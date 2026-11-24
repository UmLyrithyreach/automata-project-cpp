# 🧠 Automata Simulator (DFA & NFA)

Welcome to the Automata Simulator, a full-stack web application designed to simulate and visualize Finite Automata. This comprehensive tool allows you to create, edit, and test both **Deterministic Finite Automata (DFA)** and **Non-Deterministic Finite Automata (NFA)**. The project features a React-based frontend, a Node.js/Express backend, and a powerful C++ core for the automata logic.

This project was developed by a team of six students as part of our university coursework.

> [!NOTE]
> **About this fork — the original C++ edition**
>
> This repository is a fork of [ShurikenBy6YoungTechStudents/automata-project](https://github.com/ShurikenBy6YoungTechStudents/automata-project).
> The upstream project has since moved on: its automata engine was rewritten in JavaScript and the C++ core was removed.
>
> This fork preserves the project as it was originally built, with the **C++ engine at its heart**, and brings it up to date:
> - **Cross-platform:** the C++ programs now compile and run on Windows, Linux and macOS, instead of relying on Windows-only `.exe` files.
> - **Automatic builds:** the backend compiles the C++ core for your OS when it starts (`npm start` / `npm run dev`).
> - **Refactored:** old platform-specific code was cleaned up, with help from [Claude](https://claude.com/claude-code).

---

## 🚀 Features

- **Interactive Web Interface:** A user-friendly UI to build and visualize automata.
- **DFA and NFA Simulation:** Create and run simulations for both DFA and NFA.
- **NFA to DFA Conversion:** Automatically convert an NFA to an equivalent DFA.
- **DFA Minimization:** Optimize DFAs by reducing the number of states.
- **Input String Validation:** Test strings against your created automata to see if they are accepted or rejected.
- **JSON-based Automata Definitions:** Easily import and export your automata using JSON format.
- **RESTful API:** A robust backend to manage automata operations.

---

## 🛠 Technologies Used

- **Frontend:**
  - React
  - Vite
  - CSS
- **Backend:**
  - Node.js
  - Express.js
  - SQLite
- **Core Logic:**
  - C++17
  - `nlohmann/json` for JSON parsing in C++
- **Version Control:**
  - Git & GitHub

---

## 📁 Project Structure

```
/automata-project
├── frontend/         # React Frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   └── App.jsx     # Main app component
│   └── package.json
│
├── backend/          # Node.js Backend
│   ├── controllers/  # Request handlers
│   ├── routes/       # API routes
│   ├── utils/        # Automata logic helpers (JS)
│   ├── server.js     # Express server entry point
│   └── package.json
│
├── cpp/              # C++ Core Logic
│   ├── DFAorNFA.cpp
│   ├── NFAtoDFA.cpp
│   ├── MinimizeDFA.cpp
│   └── ...           # Other C++ source files
│
└── README.md         # You're reading it!
```

---

## ⚙️ How to Run

### 1. Prerequisites
- Node.js and npm
- A C++ compiler (like G++)

### 2. Clone the Repository
```bash
git clone https://github.com/ShurikenBy6YoungTechStudents/automata-project.git
cd automata-project
```

### 3. Backend Setup
```bash
cd backend
npm install
npm start
```
The backend server will start, typically on `http://localhost:5000`.

### 4. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
The frontend development server will start, typically on `http://localhost:5173`. Open this URL in your browser.

### 5. C++ Core
The backend runs the C++ programs in `cpp/`. They are compiled automatically for your OS
(Windows, Linux or macOS) when you run `npm start` or `npm run dev` in `backend/`, using
`g++` or `clang++` (set `CXX` to pick another compiler). To rebuild them by hand:
```bash
cd backend
npm run build:cpp            # builds whatever is missing or out of date
npm run build:cpp -- --force # rebuilds everything
```
On Windows the prebuilt `.exe` files are used when no compiler is installed.

---

## 📦 Example JSON Input

Here is an example of a DFA definition in JSON format:

```json
{
  "states": ["q0", "q1", "q2"],
  "alphabet": ["0", "1"],
  "transitions": [
    { "source": "q0", "input": "0", "destination": "q1" },
    { "source": "q0", "input": "1", "destination": "q0" },
    { "source": "q1", "input": "0", "destination": "q1" },
    { "source": "q1", "input": "1", "destination": "q2" },
    { "source": "q2", "input": "0", "destination": "q1" },
    { "source": "q2", "input": "1", "destination": "q0" }
  ],
  "start_state": "q0",
  "accept_states": ["q2"]
}
```

---

## ✨ What We've Learned

- **Full-Stack Development:** Integrating a React frontend with a Node.js backend.
- **API Design:** Creating a RESTful API to connect the client and server.
- **System Integration:** Calling C++ executables from a Node.js backend to perform heavy computations.
- **Team Collaboration:** Using Git and GitHub for version control and collaborative development.
- **Theoretical Computer Science in Practice:** Applying concepts of automata theory to build a real-world application.

---

## 👥 Our Team

This project was proudly developed by **Shuriken**, a team of six passionate young tech students.

---

> ⚡ *Feel free to fork, explore, or contribute if you find this project interesting!*
