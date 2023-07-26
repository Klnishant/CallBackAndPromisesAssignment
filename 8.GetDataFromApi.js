const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  })
  .then(data => {
    console.log("Data from the API:", data);
  })
  .catch(error => {
    console.error("Error occurred while fetching data:", error);
  });
