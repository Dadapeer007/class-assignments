function findSingleNumber(A) {
    let result = 0;
  
    for (let i = 0; i < A.length; i++) {
      result ^= A[i];
    }
  
    return result;
  }
  
  // Example usage:
  const A = [1, 2, 2, 3, 1];
  const singleNumber = findSingleNumber(A);
  console.log(singleNumber);
  