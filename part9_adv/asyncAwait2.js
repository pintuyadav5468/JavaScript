async function myAsyncFunction() {
  return "Hello, async!";
}

myAsyncFunction().then(value => console.log(value)); // Output: Hello, async!


async function fetchData() {
  try {
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}