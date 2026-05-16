"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FloodFill = (Image, StartingRow, StartingColumn, NewColor, OriginalColor = null) => {
    // Step 1: check to ensure the image is initialized
    if (!Image || Image.length === 0) {
        return Image;
    }
    // Step 2: Extract the current row array safely to a local variable
    const TargetRowArray = Image[StartingRow];
    if (!TargetRowArray) {
        return Image;
    }
    // Step 3: Extract the current pixel color safely to a local variable
    const CurrentPixelColor = TargetRowArray[StartingColumn];
    if (CurrentPixelColor === undefined) {
        return Image;
    }
    // Step 4: Determine the original color on the first run, or reuse the passed color
    const ResolvedOriginalColor = OriginalColor ?? CurrentPixelColor;
    // Step 5: Termination criteria (color mismatch or color already matching NewColor)
    if (CurrentPixelColor !== ResolvedOriginalColor ||
        ResolvedOriginalColor === NewColor) {
        return Image;
    }
    // Step 6: Update the pixel color safely
    TargetRowArray[StartingColumn] = NewColor;
    // Step 7: Recursive single-function search calls
    FloodFill(Image, StartingRow - 1, StartingColumn, NewColor, ResolvedOriginalColor); // Up
    FloodFill(Image, StartingRow + 1, StartingColumn, NewColor, ResolvedOriginalColor); // Down
    FloodFill(Image, StartingRow, StartingColumn - 1, NewColor, ResolvedOriginalColor); // Left
    FloodFill(Image, StartingRow, StartingColumn + 1, NewColor, ResolvedOriginalColor); // Right
    return Image;
};
// ============================================================================
//Test 
// ============================================================================
const SampleGrid = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
];
const StartRowCoordinate = 1;
const StartColumnCoordinate = 1;
const TargetColorCode = 2;
console.log("Original Image Matrix:");
console.table(SampleGrid);
const OutputGrid = FloodFill(SampleGrid, StartRowCoordinate, StartColumnCoordinate, TargetColorCode);
console.log("\nUpdated Image Matrix after FloodFill:");
console.table(OutputGrid);
