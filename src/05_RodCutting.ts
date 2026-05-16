const CutRod = (Prices: number[], RodLength: number): number => {
//Prices : An array where Prices[i] represents the price of a rod of length i+1.
//RodLength : The total length of the rod to be cut.
  // 1. Safety Guard: Return 0 if the rod length is invalid or price list is empty
  if (!Prices || Prices.length === 0 || RodLength <= 0) {
    return 0;
  }

  // 2. Dynamic Programming memory table initialized with zeros using PascalCase
  const MaxRevenueTable: number[] = new Array(RodLength + 1).fill(0);

  // 3. Build up solutions for smaller rod lengths incrementally (Bottom-Up)
  for (
    let CurrentLength: number = 1;
    CurrentLength <= RodLength;
    CurrentLength++
  ) {
    let MaximumCalculatedValue: number = 0;

    // 4. Try all possible cut options for the current rod length
    for (let CutOption: number = 1; CutOption <= CurrentLength; CutOption++) {
      // Read price from the 0-indexed array safely
      const PiecePrice: number = Prices[CutOption - 1] ?? 0;

      // Remaining rod length revenue from our historic memory table
      const RemainingRevenue: number =
        MaxRevenueTable[CurrentLength - CutOption] ?? 0;

      // Compute potential total profit for this specific cut configuration
      const PotentialRevenue: number = PiecePrice + RemainingRevenue;

      // Keep the maximum value found among all combinations
      if (PotentialRevenue > MaximumCalculatedValue) {
        MaximumCalculatedValue = PotentialRevenue;
      }
    }

    // Save the best result for this specific length into our memory table
    MaxRevenueTable[CurrentLength] = MaximumCalculatedValue;
  }

  // 5. The final index contains the maximum profit possible for the original rod length
  return MaxRevenueTable[RodLength] ?? 0;
}
