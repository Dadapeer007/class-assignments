function isPossibleToZero(A) {
    let xorResult = 0;
    for (let i = 0; i < A.length; i++) {
      xorResult ^= A[i];
    }
    return xorResult === 0 ? "Yes" : "No";
  }
  
  // Example usage:
  console.log(isPossibleToZero([9, 17])); // Output: "Yes"
  