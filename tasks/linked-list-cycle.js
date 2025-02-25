// 141. Linked List Cycle
// Attempted
// Easy
// Topics
// Companies
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Input: head = [3,2,0,-4], pos = 1`
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list

// Recursive solution:
function hasCycle(head) {
  const iter = (slow, fast) => {
    if (!fast || !fast.next) {
      return false;
    } else if (fast === slow) {
      return true;
    } else {
      return iter(slow.next, fast.next.next);
    }
  };

  if (!head) {
    return false;
  } else {
    return iter(head, head.next);
  }
}

// Floyd's Cycle-Finding Algorithm (also known as the "tortoise and hare" algorithm):
// function hasCycle(head) {
//   // Handle empty list or single node
//   if (!head || !head.next) {
//       return false;
//   }

//   let slow = head;
//   let fast = head;

//   // Iterate until we find a cycle or reach the end
//   while (fast && fast.next) {
//       slow = slow.next;          // Move one step
//       fast = fast.next.next;     // Move two steps

//       // If slow and fast meet, we found a cycle
//       if (slow === fast) {
//           return true;
//       }
//   }

//   // If we reach here, we found a null (end of list), so no cycle
//   return false;
// }

// Alternative solution using a Set (if space isn't a constraint):
// function hasCycle(head) {
//   const seen = new Set();
//   let current = head;

//   while (current) {
//       if (seen.has(current)) {
//           return true;
//       }
//       seen.add(current);
//       current = current.next;
//   }

//   return false;
// }

console.log("!!hasCycle([3,2,0,-4]", hasCycle([3, 2, 0, -4])); /// pos = 1; Output: true
console.log("!!hasCycle([1,2])", hasCycle([1, 2])); /// pos = 0; Output: true
console.log("!!hasCycle([1]", hasCycle([1])); /// pos = 1; Output: false
