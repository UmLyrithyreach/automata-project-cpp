import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const CPP_DIR = path.join(__dirname, "..", "..", "cpp");

// Path to a compiled C++ program in cpp/: "Name.exe" on Windows, "Name" elsewhere.
export function cppBinary(name) {
    const ext = process.platform === "win32" ? ".exe" : "";
    return path.join(CPP_DIR, name + ext);
}
