async function fetchDataFromAPI() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
  
      const data = await response.json();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  }
  
  // Call the function to fetch data from the API
  fetchDataFromAPI();
  