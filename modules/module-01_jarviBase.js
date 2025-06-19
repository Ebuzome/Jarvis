// jarviBase.js – ChatGPT-style UI Integration with Mic, Persona, Typing Animation

import { routeCommand } from './core/router.js';

let currentPersona = "mentor";

// Optional Voice API const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; const recognizer = SpeechRecognition ? new SpeechRecognition() : null; if (recognizer) { recognizer.lang = 'en-US'; recognizer.continuous = false; recognizer.interimResults = false; }

const input = document.getElementById("userInput"); const sendBtn = document.getElementById("sendBtn"); const chatbox = document.getElementById("chatbox"); const toggleTheme = document.getElementById("toggleTheme"); const personaSelect = document.getElementById("personaSelect"); const micBtn = document.getElementById("micBtn"); const loading = document.getElementById("loading");

sendBtn.addEventListener("click", handleCommand); input.addEventListener("keydown", (e) => { if (e.key === "Enter") handleCommand(); });

micBtn.addEventListener("click", () => { if (recognizer) recognizer.start(); });

if (recognizer) { recognizer.onresult = (event) => { const transcript = event.results[0][0].transcript; input.value = transcript; handleCommand(); }; }

toggleTheme.addEventListener("click", () => { document.body.classList.toggle("chat-theme"); });

personaSelect.addEventListener("change", () => { currentPersona = personaSelect.value; });

async function handleCommand() { const command = input.value.trim(); if (!command) return;

addMessage(command, "user"); input.value = ""; showLoader(true);

try { const rawResponse = await routeCommand(command, currentPersona); await typeOutResponse(rawResponse, "bot"); } catch (err) { await typeOutResponse(⚠️ Error: ${err.message}, "bot"); }

showLoader(false); }

function addMessage(text, sender) { const msg = document.createElement("div"); msg.classList.add("message", sender); msg.innerHTML = text; chatbox.appendChild(msg); chatbox.scrollTop = chatbox.scrollHeight; }

function showLoader(show) { loading.classList.toggle("visible", show); }

async function typeOutResponse(text, sender) { const msg = document.createElement("div"); msg.classList.add("message", sender); chatbox.appendChild(msg);

for (let i = 0; i < text.length; i++) { msg.innerHTML += text.charAt(i); chatbox.scrollTop = chatbox.scrollHeight; await new Promise((r) => setTimeout(r, 10)); } }
export async function execute(command) {
  return "👋 Hello there! I’m JarviCore, your virtual assistant and coding bestie!";
                                                                                            }

  
