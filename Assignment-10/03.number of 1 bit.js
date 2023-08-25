function countOneBits(A) {
    let count = 0;
    while (A > 0) {
      // Check the rightmost bit and increment count if it is 1
      count += A & 1;
      // Right shift A to move to the next bit
      A >>= 1;
    }
    return count;
  }
  
  // Example usage:
  console.log(countOneBits(11)); // Output: 3 (11 in binary is 1011, it has 3 one bits)
  
  