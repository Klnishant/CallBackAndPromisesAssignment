async function fetchDataFromBothAPIs() {
    const todoURL = "https://jsonplaceholder.typicode.com/todos/1";
    const postURL = "https://jsonplaceholder.typicode.com/posts/1";
  
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch(todoURL),
        fetch(postURL)
      ]);
  
      if (!todoResponse.ok || !postResponse.ok) {
        throw new Error("Network response was not ok.");
      }
  
      const todoData = await todoResponse.json();
      const postData = await postResponse.json();
  
      const combinedData = {
        todo: todoData,
        post: postData
      };
  
      console.log("Combined Data:", combinedData);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  }
  
  // Call the function to fetch data from both APIs
  fetchDataFromBothAPIs();
  