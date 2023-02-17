const categories = document.querySelectorAll("li.item");
console.log(categories.length);

categories.forEach((category) => {
  const header = category.querySelector("h2");
  const items = category.querySelectorAll("li");
  console.log(header.textContent, items.length);
});
