// Compiles the C++ programs in cpp/ for the current OS.
// Usage: npm run build:cpp            (rebuild only what is missing or out of date)
//        npm run build:cpp -- --force (rebuild everything)
// Set CXX to choose a compiler; otherwise g++ then clang++ is tried.
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { CPP_DIR, cppBinary } from "../utils/cppBinary.js";

const PROGRAMS = ["DFAorNFA", "MinimizeDFA", "NFAtoDFA", "StringValidator"];
const force = process.argv.includes("--force");

function findCompiler() {
    const candidates = process.env.CXX ? [process.env.CXX] : ["g++", "clang++"];
    return candidates.find((cxx) => spawnSync(cxx, ["--version"], { stdio: "ignore", shell: process.platform === "win32" }).status === 0);
}

function isUpToDate(src, out) {
    if (!fs.existsSync(out)) return false;
    const outTime = fs.statSync(out).mtimeMs;
    const deps = [src, path.join(CPP_DIR, "libraries", "json.hpp")];
    return deps.every((dep) => fs.statSync(dep).mtimeMs <= outTime);
}

const todo = PROGRAMS.filter((name) => force || !isUpToDate(path.join(CPP_DIR, name + ".cpp"), cppBinary(name)));
if (todo.length === 0) {
    console.log("C++ programs are up to date.");
    process.exit(0);
}

const cxx = findCompiler();
if (!cxx) {
    const missing = todo.filter((name) => !fs.existsSync(cppBinary(name)));
    if (missing.length === 0) {
        console.warn("No C++ compiler found; using the existing binaries.");
        process.exit(0);
    }
    console.error(`No C++ compiler found (tried ${process.env.CXX || "g++, clang++"}). Install g++ or clang++, or set CXX.`);
    console.error("Missing programs: " + missing.join(", "));
    process.exit(1);
}

let failed = false;
for (const name of todo) {
    const src = path.join(CPP_DIR, name + ".cpp");
    const out = cppBinary(name);
    console.log(`${cxx}: ${name}.cpp -> ${path.basename(out)}`);
    const r = spawnSync(cxx, ["-std=c++17", "-O2", "-o", out, src], { stdio: "inherit", shell: process.platform === "win32" });
    if (r.status !== 0) failed = true;
}
process.exit(failed ? 1 : 0);
