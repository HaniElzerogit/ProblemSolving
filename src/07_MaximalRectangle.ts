const MaximalRectangle = (Matrix: string[][]): number =>
{
  //Matrix : A 2D grid populated exclusively by strings "0" and "1".
  // 1. Safety Guard: Return 0 if the matrix or rows are completely empty
  if (!Matrix || Matrix.length === 0) {
    return 0;
  }

  const TotalRows: number = Matrix.length;
  const FirstRow: string[] | undefined = Matrix[0];
  if (!FirstRow) {
    return 0;
  }
  const TotalColumns: number = FirstRow.length;

  let MaxRectangleArea: number = 0;

  // 2. Create a 2D memory table to store the consecutive width of "1"s for each cell
  const WidthTable: number[][] = Array.from({ length: TotalRows }, () =>
    new Array(TotalColumns).fill(0),
  );

  // 3. Step 1: Populate the WidthTable with horizontal consecutive counts of "1"s
  for (let RowIndex: number = 0; RowIndex < TotalRows; RowIndex++) {
    const CurrentRow: string[] | undefined = Matrix[RowIndex];
    const CurrentWidthRow: number[] | undefined = WidthTable[RowIndex];

    if (!CurrentRow || !CurrentWidthRow) {
      continue;
    }

    for (
      let ColumnIndex: number = 0;
      ColumnIndex < TotalColumns;
      ColumnIndex++
    ) {
      const CellValue: string = CurrentRow[ColumnIndex] ?? "0";

      if (CellValue === "1") {
        // Width is 1 plus whatever consecutive width was available on the left cell
        const LeftCellWidth: number =
          ColumnIndex === 0 ? 0 : (CurrentWidthRow[ColumnIndex - 1] ?? 0);
        CurrentWidthRow[ColumnIndex] = LeftCellWidth + 1;
      }
      // If cell value is "0", the width defaults to 0 (already filled by array initialization)
    }
  }

  // 4. Step 2: Look upwards from each cell to find the maximum bounding rectangle area
  for (let RowIndex: number = 0; RowIndex < TotalRows; RowIndex++) {
    for (
      let ColumnIndex: number = 0;
      ColumnIndex < TotalColumns;
      ColumnIndex++
    ) {
      const CurrentCellWidth: number = WidthTable[RowIndex]?.[ColumnIndex] ?? 0;

      // Skip processing if the current cell width is 0 (it is a "0" block)
      if (CurrentCellWidth === 0) {
        continue;
      }

      let MinimumWidth: number = CurrentCellWidth;

      // Scan upwards from the current row to find combined multi-row rectangles
      for (
        let UpwardRowIndex: number = RowIndex;
        UpwardRowIndex >= 0;
        UpwardRowIndex--
      ) {
        const UpwardCellWidth: number =
          WidthTable[UpwardRowIndex]?.[ColumnIndex] ?? 0;

        // If we encounter a width of 0 above us, the vertical block sequence breaks
        if (UpwardCellWidth === 0) {
          break;
        }

        // The bounding rectangle width is limited by the narrowest row width found
        if (UpwardCellWidth < MinimumWidth) {
          MinimumWidth = UpwardCellWidth;
        }

        // Calculate current bounding box dimensions
        const CurrentHeight: number = RowIndex - UpwardRowIndex + 1;
        const PotentialArea: number = MinimumWidth * CurrentHeight;

        // Update final answer tracker
        if (PotentialArea > MaxRectangleArea) {
          MaxRectangleArea = PotentialArea;
        }
      }
    }
  }

  return MaxRectangleArea;
}
