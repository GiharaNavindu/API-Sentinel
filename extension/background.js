chrome.webRequest.onCompleted.addListener(
    (details) => {
      console.log("API Call Detected:", details.url);
      // Send data to backend
      fetch("http://localhost:5000/api/usage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ endpoint: details.url, calls: 1 }),
      });
    },
    { urls: ["<all_urls>"] }
  );