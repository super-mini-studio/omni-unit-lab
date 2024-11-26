export interface TupleCount {
  values: string[];
  count: number;
}

export const countTuples = (tuples: string[][]): TupleCount[] =>{
  // Use Map to track counts of stringified tuples
  const countMap = new Map<string, number>();
  
  // Count occurrences of each tuple
  tuples.forEach(tuple => {
    const key = JSON.stringify(tuple);
    countMap.set(key, (countMap.get(key) || 0) + 1);
  });
  
  // Convert Map to array of TupleCount objects
  return Array.from(countMap.entries()).map(([key, count]) => ({
    values: JSON.parse(key),
    count: count
  }));
}
