// get elements
const userInput = document.querySelector("#user-input");
const remaining = document.querySelector("#remaining");
const amount = document.querySelector("#amount");

// variables
let holder = "";

//functions
function strCharCounter(e) {
  const maxChars = 50;
  const charAmount = e.target.value.length;
  if (charAmount === 50) {
    holder = e.target.value;
  }
  if (charAmount >= 50) {
    userInput.value = holder;
  }
  amount.textContent = charAmount <= 50 ? charAmount : 50;
  const remainingChars = maxChars - charAmount;
  remaining.textContent = remainingChars <= 0 ? 0 : remainingChars;
}

// event listeners
userInput.addEventListener("input", strCharCounter);
