function isEvenSubarraysPossible(A) {
    const firstElement = A[0];
    for (let i = 1; i < A.length; i++) {
      if (A[i] !== firstElement) {
        return "NO";
      }
    }
    return "YES";
  }
  
  // Example usage
  let A = [2,4,8,7,6];
  let result = isEvenSubarraysPossible(A);
  console.log(result);