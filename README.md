Running Task Manager

1. Create a new codespace on the main branch of the project.
2. In the terminal, type "cd backend".
3. Run the command "npm install" to install the necessary dependencies.
4. Once the dependencies are installed, run the command "node server.mjs" to start the server.
5. Set the server to Public.
6. Open the server in a new tab. Append "/task" to the end of the URL.
7. Copy the entire URL, task included, to client/src/data/backendURL.js". The file should read as follows:

	export const backendURL = <server link>
8. In a new terminal, type "cd client".
9. Run "npm install" and "npm start".

Running Ollama (For TaskBot only)

In a terminal enter the following: 
1. Install Ollama 
curl -fsSL https://ollama.com/install.sh | sh
 
2. Start the Ollama service 
Ollama serve 
 
3. Pull LLM
Ollama pull gemma2:2b
