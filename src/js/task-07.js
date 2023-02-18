const newFontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

newFontSize.addEventListener("input", () => {
  const fontSize = newFontSize.value;
  text.style.fontSize = `${fontSize}px`;
});
