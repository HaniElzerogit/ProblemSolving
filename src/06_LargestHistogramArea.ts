const LargestRectangleArea = (Heights: number[]): number =>
    // Heights : An array of integers representing the bar heights of the histogram.
  {
    // 1. Safety Guard: Return 0 if the array is missing or empty
    if (!Heights || Heights.length === 0) {
      return 0;
    }

    // 2. Monotonic Stack array to store indices of bars in increasing height order
    const IndexStack: number[] = [];
    let MaxAreaCalculated: number = 0;
    const TotalBars: number = Heights.length;

    // 3. Loop through all bars plus one extra step to clear the stack at the end
    for (
      let CurrentIndex: number = 0;
      CurrentIndex <= TotalBars;
      CurrentIndex++
    ) {
      // Use an imaginary bar of height 0 at the end to force processing remaining elements
      const CurrentHeight: number =
        CurrentIndex === TotalBars ? 0 : (Heights[CurrentIndex] ?? 0);

      // 4. Process and pop elements using an explicit safe evaluation loop
      while (IndexStack.length > 0) {
        const TopIndex: number = IndexStack[IndexStack.length - 1] ?? -1;
        const TopHeight: number = Heights[TopIndex] ?? 0;

        // Break the while loop if the current height breaks the boundary condition
        if (CurrentHeight >= TopHeight) {
          break;
        }

        // Safely pull the item off the tracking stack
        IndexStack.pop();

        // Calculate width of the rectangle bounded by the current smaller boundaries
        const PreviousIndex: number = IndexStack[IndexStack.length - 1] ?? -1;
        const Width: number =
          PreviousIndex === -1
            ? CurrentIndex
            : CurrentIndex - PreviousIndex - 1;

        // Track the maximum area combination found
        const PotentialArea: number = TopHeight * Width;
        if (PotentialArea > MaxAreaCalculated) {
          MaxAreaCalculated = PotentialArea;
        }
      }

      // Push current bar index onto our tracking stack
      IndexStack.push(CurrentIndex);
    }

    return MaxAreaCalculated;
  };
