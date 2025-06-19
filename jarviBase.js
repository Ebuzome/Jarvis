document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");
  const output = document.getElementById("output");
  const sendBtn = document.getElementById("sendBtn");

  sendBtn.addEventListener("click", handleCommand);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleCommand();
  });

  function handleCommand() {
    const command = input.value.trim();
    if (!command) return;

    appendMessage(`🗨 ${command}`, "user");

    const response = getJarviResponse(command);
    appendMessage(response, "jarvi");

    input.value = "";
  }

  function appendMessage(text, sender) {
    const p = document.createElement("p");
    p.className = sender;
    p.innerHTML = text;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
  }

  function getJarviResponse(command) {
    // Later this will be routed to modules.
    const lower = command.toLowerCase();
    if (lower.includes("hello")) return "Greetings, Commander.";
    if (lower.includes("status")) return "All modules are standing by.";
    if (lower.includes("help")) return "Try commands like: 'generate a blog', 'optimize images', or 'launch JarviMiniGPT'";
    return "Module not yet linked. Expand with power.";
  }
});
