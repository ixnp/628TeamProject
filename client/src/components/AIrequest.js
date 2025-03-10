import { useState } from "react";
import "../styles/AIrequest.css";
//Citations
//Samchung. (n.d.). cs628-examples/Module 01/frontend/src/ChatInterface.js at main · samchung0117/cs628-examples. GitHub. https://github.com/samchung0117/cs628-examples/blob/main/Module%2001/frontend/src/ChatInterface.js
function AIrequest() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/task/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: input }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let done = false;
      let accumulatedResult = "";
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        const chunk = decoder.decode(value, { stream: true });

        const lines = chunk.split("\n");
        lines.forEach((line) => {
          if (line.startsWith("data:")) {
            try {
              const parsedData = JSON.parse(line.replace("data: ", ""));
              if (parsedData.response) {
                accumulatedResult += parsedData.response;
                console.log(accumulatedResult);
                setResult(accumulatedResult);
              }

              if (parsedData.done) {
              }
            } catch (err) {
              console.error("Error parsing JSON chunk:", err);
            }
          }
        });
      }
    } catch (error) {
      console.error("Error during streaming:", error);
    }
  };
  return (
    <div className="AI-container">
      <h1>Ask Task Bot a Question!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <input type="submit" value="Ask Question"/>
      </form>
      <div className="AI-responce">
        <p>{result}</p>
      </div>
    </div>
  );
}
export default AIrequest;
