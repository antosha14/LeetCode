`
If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
`
function decrypt(code: number[], k: number): number[] {
    if (k === 0) {
      return code.map(() => 0);
    }
    let result: number[] = [];
    let v = 0;
    if (k > 0) {
      for (let i = 0; i < k; i++) {
        v += code[i];
      }
      for (let i = 0; i < code.length; i++) {
        v += code[(i + k) % code.length] - code[i]
        result.push(v);
      }
    } else {
      for (let i = -1; i >= k; i--) {
        v += code.at(i)!;
      }
      for (let i = 0; i < code.length; i++) {
        result.push(v);
        v += code[i] - code[(i + k + code.length) % code.length];
      }
    }
    return result;
  };