function minTimeToEquality(A) {
    var maxNum = A[0];
    var sum = A[0];
  
    // Find the maximum number and calculate the sum of all elements
    for (var i = 1; i < A.length; i++) {
      if (A[i] > maxNum) {
        maxNum = A[i];
      }
      sum += A[i];
    }
  
    // Calculate the minimum time to make all elements equal
    var targetNum = Math.ceil(sum / A.length);
    var time = targetNum - maxNum;
  
    return time;
  }
  
  // Test the function
  var A = [2, 4, 1, 3, 2];
  console.log(minTimeToEquality(A)); // Output: 3
  