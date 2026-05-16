"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CanJump = (Numbers) => {
    // 1. Safety Guard: If the array is empty, we cannot proceed
    if (!Numbers || Numbers.length === 0) {
        return false;
    }
    // 2. Initialize tracking variables using PascalCase
    let MaxReachableIndex = 0;
    const TargetIndex = Numbers.length - 1;
    // 3. Iterate through the array to check step boundaries
    for (let CurrentIndex = 0; CurrentIndex <= TargetIndex; CurrentIndex++) {
        // If we ever stand on an index we cannot reach, we are stuck
        if (CurrentIndex > MaxReachableIndex) {
            return false;
        }
        // Fetch the max steps from the current spot safely
        const CurrentStepsAvailable = Numbers[CurrentIndex] ?? 0;
        // Update the furthest index we can possibly reach
        const PotentialReach = CurrentIndex + CurrentStepsAvailable;
        if (PotentialReach > MaxReachableIndex) {
            MaxReachableIndex = PotentialReach;
        }
        // Efficiency optimization: if we can already reach the end, stop early
        if (MaxReachableIndex >= TargetIndex) {
            return true;
        }
    }
    return MaxReachableIndex >= TargetIndex;
};
