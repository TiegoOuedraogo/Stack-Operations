let stack = [];
// updateDisplay(): A helper function to update the display of the stack content.
// Each button's onclick event calls the corresponding JavaScript function.
function updateDisplay() {
  document.getElementById("stackContent").innerText =
    "Stack: [" + stack.join(", ") + "]";
}
//pushElement(): Adds a new element to the top of the stack.
function pushElement() {
  let element = prompt("Enter element to push");
  if (element !== null && element.trim() !== "") {
    stack.push(element.trim());
    updateDisplay();
    console.log("stack contains ", stack);
    document.getElementById(
      "message"
    ).innerText = ` ${element} has been pushed to the stack.`;
  } else {
    document.getElementById("message").innerText = "No element entered.";
  }
}
//popElement(): Removes the top element from the stack.
function popElement() {
  if (stack.length === 0) {
    document.getElementById("message").innerText =
      "Stack is empty, cannot pop.";
    return;
  }
  let poppedElement = stack.pop();
  updateDisplay();
  document.getElementById(
    "message"
  ).innerText = `${popElement} has been popped `;
}
//peekElement(): Displays the top element of the stack.
function peekElement() {
  let element = stack.length > 0 ? stack[stack.length - 1] : "None";
  document.getElementById(
    "message"
  ).innerText = ` ${element} is the top element. `;
}
//checkIsEmpty(): Checks if the stack is empty.
function checkIsEmpty() {
  let isEmpty = stack.length === 0;
  document.getElementById("message").innerText = ` ${
    isEmpty ? "stack is empty" : "the stack is not empty"
  } `;
}
//getSize(): Returns the size of the stack.
function getSize() {
  let size = stack.length;
  document.getElementById(
    "message"
  ).innerText = `The stack has a max of  ${size} elements `;
}
/**
         *The searchElement function prompts the user to enter the element they want to search for in the stack.
         It uses the Array.prototype.includes() method to check if the stack contains the specified element.
        If the element is found in the stack, it returns true; otherwise, it returns false.
        The result is then displayed to the user.
         */
function searchElement() {
  let elementToSearch = prompt("Enter element to search for");
  if (elementToSearch === null || elementToSearch.trim() === "") {
    document.getElementById("message").innerText =
      "No element entered for search.";
    return;
  }

  let found = stack.includes(elementToSearch);
  document.getElementById("message").innerText =
    'Element "' + elementToSearch + '" in stack: ' + found;
}
/**
 * The findDuplicates function iterates through the stack and counts the occurrences of each element.
 * It uses an object (occurrences) where keys are the elements of the stack, and values are the counts of those elements.
 * After counting, it checks which elements have occurred more than once and collects them in the duplicates array.
 * Finally, the function updates the message to display the duplicate elements, or a message indicating no duplicates were found.
 */
function findDuplicates() {
  let occurrences = {};
  let duplicates = [];

  // Count occurrences of each element
  for (let element of stack) {
    occurrences[element] = (occurrences[element] || 0) + 1;
  }

  // Find elements with more than one occurrence
  for (let element in occurrences) {
    if (occurrences[element] > 1) {
      duplicates.push(element);
    }
  }

  if (duplicates.length > 0) {
    document.getElementById("message").innerText =
      "Duplicate elements: " + duplicates.join(", ");
  } else {
    document.getElementById("message").innerText =
      "No duplicate elements found.";
  }
}
/**
 * The findIndex function prompts the user for the element whose index they want to find.
 * It uses the Array.prototype.lastIndexOf() method to get the index of the element, starting the search from the end of the array (which represents the top of the stack).
 * If the element is found, it calculates the index relative to the bottom of the stack.
 * The result, along with a message, is displayed to the user.
 */
function findIndex() {
  let elementToFind = prompt("Enter element to find its index");
  if (elementToFind === null || elementToFind.trim() === "") {
    document.getElementById("message").innerText =
      "No element entered for search.";
    return;
  }

  // The index in the stack (in reverse order)
  let index = stack.lastIndexOf(elementToFind);

  if (index !== -1) {
    // Convert to index from the stack's bottom
    let stackIndexFromBottom = stack.length - 1 - index;
    document.getElementById("message").innerText =
      'Index of "' + elementToFind + '" (from bottom): ' + stackIndexFromBottom;
  } else {
    document.getElementById("message").innerText =
      "Element not found in stack.";
  }
}

function findElementAndIndex() {
  let elementToFind = prompt("Enter the element to find");
  if (elementToFind === null || elementToFind.trim() === "") {
    document.getElementById("message").innerText =
      "No element entered for search.";
    return;
  }

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === elementToFind) {
      let indexFromBottom = stack.length - 1 - i;
      document.getElementById("message").innerText =
        'Element "' + elementToFind + '" found at index ' + indexFromBottom;
      return;
    }
  }

  document.getElementById("message").innerText = "Element not found in stack.";
}

function findHighestAndSmallest() {
  if (stack.length === 0) {
    document.getElementById("message").innerText = "Stack is empty.";
    return;
  }

  let highest = stack[0];
  let smallest = stack[0];

  for (let i = 1; i < stack.length; i++) {
    if (stack[i] > highest) {
      highest = stack[i];
    }
    if (stack[i] < smallest) {
      smallest = stack[i];
    }
  }

  document.getElementById("message").innerText =
    "Highest number: " + highest + ", Smallest number: " + smallest;
}
function findHighestNumber() {
  if (stack.length === 0) {
    document.getElementById("message").innerText = "Stack is empty.";
    return;
  }

  let highest = stack[0];
  for (let i = 1; i < stack.length; i++) {
    if (stack[i] > highest) {
      highest = stack[i];
    }
  }

  document.getElementById("message").innerText = "Highest number: " + highest;
}

function findSmallestNumber() {
  if (stack.length === 0) {
    document.getElementById("message").innerText = "Stack is empty.";
    return;
  }

  let smallest = stack[0];
  for (let i = 1; i < stack.length; i++) {
    if (stack[i] < smallest) {
      smallest = stack[i];
    }
  }

  document.getElementById("message").innerText = "Smallest number: " + smallest;
}
/**
 * The sortStack function uses a temporary stack (tempStack) to sort the elements.
 * It repeatedly pops elements from the main stack (stack) and
 * inserts them into the right position in tempStack to ensure tempStack is sorted.
 * If tempStack's top element is greater than the element to be inserted,
 * it moves elements back to stack until the correct position is found.
 * Once the main stack is empty, all elements are in tempStack in sorted order.
 * The function then moves these elements back to the main stack.
 * The updateDisplay() call (assuming you have such a function) updates the display of the stack on the webpage.
 * This function would need to reflect the current state of the stack in your user interface.
 */
function sortStack() {
  if (stack.length === 0) {
    document.getElementById("message").innerText = "Stack is empty.";
    return;
  }

  let tempStack = [];
  while (stack.length > 0) {
    let temp = stack.pop();
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }

  // Transferring the sorted elements back to the original stack
  while (tempStack.length > 0) {
    stack.push(tempStack.pop());
  }

  updateDisplay();
  document.getElementById("message").innerText = "Stack sorted.";
}
/**
 * The removeDuplicates function first checks if the stack is empty.
 * If it is, it sets a message indicating the stack is empty and then returns.
 * It uses an object (occurrenceMap) to count the occurrences of each element in the stack.
 * The function then iterates over the stack again and adds each element
 * with only one occurrence to a temporary stack (tempStack).
 * After the iteration, the original stack is replaced with tempStack,
 * which contains only elements that appeared once.
 * Finally, it updates the display to reflect the changes in the stack.
 */
function removeDuplicates() {
  if (stack.length === 0) {
    document.getElementById("message").innerText = "Stack is empty.";
    return;
  }

  let occurrenceMap = {};
  let tempStack = [];

  // Count occurrences of each element
  stack.forEach((element) => {
    occurrenceMap[element] = (occurrenceMap[element] || 0) + 1;
  });

  // Push only elements with a single occurrence back to the temp stack
  stack.forEach((element) => {
    if (occurrenceMap[element] === 1) {
      tempStack.push(element);
    }
  });

  stack = tempStack; // Replace the original stack with temp stack

  updateDisplay(); // Update your stack display
  document.getElementById("message").innerText = "Duplicates removed.";
}
// Initial display update
updateDisplay();
