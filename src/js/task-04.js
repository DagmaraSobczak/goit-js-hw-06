let counterValue = 0;
const counterElement = document.querySelector("#value");
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const decrementCounterValue = () => {
  counterValue -= 1;
  counterElement.textContent = counterValue;
};

const incrementCounterValue = () => {
  counterValue += 1;
  counterElement.textContent = counterValue;
};

decrementButton.addEventListener("click", decrementCounterValue);
incrementButton.addEventListener("click", incrementCounterValue);