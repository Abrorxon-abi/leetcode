/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
  const stack = [];

  const isOperator = (str) => {
    return str === "+" || str === "-" || str === "*" || str === "/";
  };

  for (const token of tokens) {
    if (isOperator(token)) {
      const ele2 = parseInt(stack.pop());
      const ele1 = parseInt(stack.pop());
      let result = 0;

      if (token === "+") {
        result = ele1 + ele2;
      } else if (token === "-") {
        result = ele1 - ele2;
      } else if (token === "*") {
        result = ele1 * ele2;
      } else if (token === "/") {
        result = Math.trunc(ele1 / ele2);
      }

      stack.push(result.toString());
    } else {
      stack.push(token);
    }
  }

  return parseInt(stack.pop());
};
