function reverseBits(A) {
    let reversedNumber = 0;
    for (let i = 0; i < 32; i++) {
      // Shift the reversedNumber to the left (by 1) to make space for the next bit
      reversedNumber <<= 1;
      // Check if the rightmost bit of A is set (1)
      if (A & 1) {
        // If it is set, set the rightmost bit of reversedNumber (1)
        reversedNumber |= 1;
      }
      // Right shift A to move to the next bit
      A >>= 1;
    }
    return reversedNumber;
  }
  
  // Example usage:
  const A = 0;
  console.log(reverseBits(A)); // Output: 0
  