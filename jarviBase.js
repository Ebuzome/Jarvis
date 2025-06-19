import { routeCommand } from './core/router.js';

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");
  const output = document.getElementById("output");
  const sendBtn = document.getElementById("sendBtn");

  sendBtn.addEventListener("click", handleCommand);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleCommand();
  });

  async function handleCommand() {
    const command = input.value.trim();
    if (!command) return;

    appendMessage(`🗨 ${command}`, "user");
    input.value = "";

    const response = await routeCommand(command);
    appendMessage(response, "jarvi");
  }

  function appendMessage(text, sender) {
    const p = document.createElement("p");
    p.className = sender;
    p.innerHTML = text;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
  }
});
