function addBinaryStrings(A, B) {
    let i = A.length - 1;
    let j = B.length - 1;
    let carry = 0;
    let result = '';
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digitA = i >= 0 ? parseInt(A.charAt(i)) : 0;
      const digitB = j >= 0 ? parseInt(B.charAt(j)) : 0;
  
      const sum = digitA + digitB + carry;
      const currentDigit = sum % 2;
      carry = Math.floor(sum / 2);
  
      result = currentDigit + result;
  
      i--;
      j--;
    }
  
    return result;
  }
  
  // Example usage:
  const A = "100";
  const B = "11";
  const sum = addBinaryStrings(A, B);
  console.log(sum); // Output: "111"
  