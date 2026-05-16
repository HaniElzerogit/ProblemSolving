const CanJump = (Numbers: number[]): boolean =>
  //Numbers : An array of maximum jump lengths from each position.
  {
    // 1. Safety Guard: If the array is empty, we cannot proceed
    if (!Numbers || Numbers.length === 0) {
      return false;
    }

    // 2. Initialize tracking variables using PascalCase
    let MaxReachableIndex: number = 0;
    const TargetIndex: number = Numbers.length - 1;

    // 3. Iterate through the array to check step boundaries
    for (
      let CurrentIndex: number = 0;
      CurrentIndex <= TargetIndex;
      CurrentIndex++
    ) {
      // If we ever stand on an index we cannot reach, we are stuck
      if (CurrentIndex > MaxReachableIndex) {
        return false;
      }

      // Fetch the max steps from the current spot safely
      const CurrentStepsAvailable: number = Numbers[CurrentIndex] ?? 0;

      // Update the furthest index we can possibly reach
      const PotentialReach: number = CurrentIndex + CurrentStepsAvailable;
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
