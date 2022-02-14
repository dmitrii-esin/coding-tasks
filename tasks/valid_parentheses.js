// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
  // Open brackets must be closed by the same type of brackets.
  // Open brackets must be closed in the correct order.
 

// Example 1:
  // Input: s = "()"
  // Output: true

// Example 2:
  // Input: s = "()[]{}"
  // Output: true

// Example 3:
  // Input: s = "(]"
  // Output: false
 
// Constraints:
  // 1 <= s.length <= 104
  // s consists of parentheses only '()[]{}'.

  var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
  
    var stack = [];
  
    var hash = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
  
    for (var i = 0; i < s.length; i++) {
      if (hash[s[i]]) {
        if (stack.pop() !== hash[s[i]]) return false;
      } else {
        stack.push(s[i]);
      }
    }
    
    return stack.length === 0;
};

isValid("(({}))[](){}"); // true
isValid("[(])"); // false
