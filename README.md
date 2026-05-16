# ProblemSolving

A collection of 7 algorithmic and data structure challenges implemented in strongly-typed **TypeScript**. 

This repository is optimized for quick local execution using automated `npm` scripts and adheres to strict production-ready clean code standards.

---

## 🛠️ Code Architecture & Standards

*   **PascalCase Naming Convention:** All function signatures, internal variables, and types are declared using strict `PascalCase`.
*   **Chronological Sorting:** Source files are named with numeric prefixes (`01_` to `07_`) for clear, linear organization on GitHub.
*   **Single-Function Modularity:** Core algorithms run directly inside their main wrapper function blocks for maximum readability.
*   **Clean Repository Control:** Compiled JavaScript assets (`Dist/`) and local dependencies are ignored under professional workflow standards.

---

## 📂 Repository Structure

```text
ProblemSolving/
├── src/                          # Source TypeScript codebase
│   ├── 01_FloodFill.ts           # Simulates a paint program's "bucket fill" tool
│   ├── 02_TrappingRainWater.ts   # Calculates trapped rain water between bars
│   ├── 03_ClimbingStairs.ts      # Finds distinct ways to climb N steps (Fibonacci)
│   ├── 04_JumpGame.ts            # Determines if the end of an array is reachable
│   ├── 05_RodCutting.ts          # Maximizes revenue by cutting a rod into pieces
│   ├── 06_LargestHistogramArea.ts # Finds the largest rectangular area in a histogram
│   └── 07_MaximalRectangle.ts      # Locates the largest rectangle of 1s in a 2D matrix
├── package.json                  # Automated execution scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── README.md                     # Project documentation
```

---

## ⚙️ How to Run the Solutions

Ensure you have [Node.js](https://nodejs.org) installed before running these setup commands:

### 1. Install Global Tools
```bash
npm install -g typescript
```

### 2. Executing Specific Problems
To automatically compile and run any specific challenge, execute its corresponding script name directly in your terminal console:

```bash
# Run Problem 1: Flood Fill
npm run FloodFill

# Run Problem 2: Trapping Rain Water
npm run TrappingRainWater

# Run Problem 3: Climbing Stairs
npm run ClimbingStairs

# Run Problem 4: Jump Game
npm run JumpGame

# Run Problem 5: Rod Cutting
npm run RodCutting

# Run Problem 6: Largest Histogram Area
npm run LargestHistogramArea

# Run Problem 7: Maximal Rectangle
npm run MaximalRectangle
```
