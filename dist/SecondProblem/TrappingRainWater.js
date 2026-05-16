"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TrapWater = (Heights) => {
    // 1. Safety Guard: Return 0 if the array is missing or contains fewer than 3 bars
    if (!Heights || Heights.length < 3) {
        return 0;
    }
    // 2. Variable Initialization using PascalCase
    let LeftPointer = 0;
    let RightPointer = Heights.length - 1;
    let LeftMaxHeight = 0;
    let RightMaxHeight = 0;
    let TotalTrappedWater = 0;
    // 3. Process the bars from both sides moving towards the center
    while (LeftPointer < RightPointer) {
        // Read current bar heights safely
        const LeftBar = Heights[LeftPointer] ?? 0;
        const RightBar = Heights[RightPointer] ?? 0;
        if (LeftBar < RightBar) {
            // Update the maximum height seen from the left side
            if (LeftBar >= LeftMaxHeight) {
                LeftMaxHeight = LeftBar;
            }
            else {
                // Water trapped is the boundary height minus the current bar height
                TotalTrappedWater += LeftMaxHeight - LeftBar;
            }
            LeftPointer++;
        }
        else {
            // Update the maximum height seen from the right side
            if (RightBar >= RightMaxHeight) {
                RightMaxHeight = RightBar;
            }
            else {
                // Water trapped is the boundary height minus the current bar height
                TotalTrappedWater += RightMaxHeight - RightBar;
            }
            RightPointer--;
        }
    }
    return TotalTrappedWater;
};
