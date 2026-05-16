const ClimbStairs = (TotalSteps: number): number => {
  // 1. Base Cases: If there are 0, 1, or 2 steps, the answers are identical to the step count
  if (TotalSteps <= 0) return 0;
  if (TotalSteps === 1) return 1;
  if (TotalSteps === 2) return 2;

  // 2. State Variables tracking the calculation history
  let WaysTwoStepsBehind: number = 1; // Represents ways to reach (CurrentStep - 2)
  let WaysOneStepBehind: number = 2; // Represents ways to reach (CurrentStep - 1)
  let TotalCurrentWays: number = 0; // Accumulator for the current step configurations

  // 3. Iteratively calculate combinations up to the target step
  for (let CurrentStep: number = 3; CurrentStep <= TotalSteps; CurrentStep++) {
    // The current step's possibilities are the sum of the two preceding step options
    TotalCurrentWays = WaysOneStepBehind + WaysTwoStepsBehind;

    // Shift our history windows forward by one position for the next iteration
    WaysTwoStepsBehind = WaysOneStepBehind;
    WaysOneStepBehind = TotalCurrentWays;
  }

  return TotalCurrentWays;
}
