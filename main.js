const url = "https://api.adviceslip.com/advice";

const quote = document.getElementById("quote");
const id = document.getElementById("id");

const button = document.getElementById("image-box");

try {
  const response = await fetch(url);
  const result = await response.json();

  console.log(result);

  quote.textContent = ` ''${result.slip.advice} ''`;

  id.textContent = result.slip.id;
} catch (error) {
  console.error(error);
}

button.addEventListener("click", async () => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  quote.textContent = ` ''${result.slip.advice} ''`;

  id.textContent = result.slip.id;
});
