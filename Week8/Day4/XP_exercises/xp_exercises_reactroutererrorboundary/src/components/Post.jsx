const Post = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const sentData = async () => {
    const payload = JSON.stringify({
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    });

    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.text(); // webhook.site responde como texto
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Send JSON to Webhook</h1>
        <button onClick={sentData}>Send Data</button>
      </div>
    </>
  );
};

export default Post;
