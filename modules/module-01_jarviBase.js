// jarviBase.js — JarviClone Phase 3 (Fully Functional Engine)

import { routeCommand } from './core/router.js';

let currentPersona = "mentor";

const input = document.getElementById("userInput"); const sendBtn = document.getElementById("sendBtn"); const chatbox = document.getElementById("chatWindow"); const toggleTheme = document.getElementById("toggleTheme"); const personaSelect = document.getElementById("personaSelect"); const micBtn = document.getElementById("micBtn"); const typingIndicator = document.getElementById("typingIndicator");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; const recognizer = SpeechRecognition ? new SpeechRecognition() : null; if (recognizer) { recognizer.lang = 'en-US'; recognizer.continuous = false; recognizer.interimResults = false; }

sendBtn.addEventListener("click", handleCommand); input.addEventListener("keydown", (e) => { if (e.key === "Enter") handleCommand(); });

micBtn.addEventListener("click", () => { if (recognizer) recognizer.start(); });

if (recognizer) { recognizer.onresult = (event) => { const transcript = event.results[0][0].transcript; input.value = transcript; handleCommand(); }; }

toggleTheme.addEventListener("click", () => { document.body.classList.toggle("light-mode"); });

personaSelect.addEventListener("change", () => { currentPersona = personaSelect.value; });

async function handleCommand() { const command = input.value.trim(); if (!command) return;

addMessage(command, "user"); input.value = ""; showTyping(true);

try { const reply = await routeCommand(command, currentPersona); await typeOut(reply, "bot"); } catch (err) { await typeOut(⚠️ Error: ${err.message}, "bot"); }

showTyping(false); }

function addMessage(text, sender) { const msg = document.createElement("div"); msg.classList.add("message", sender); msg.innerHTML = text; chatbox.appendChild(msg); chatbox.scrollTop = chatbox.scrollHeight; }

function showTyping(state) { typingIndicator.classList.toggle("visible", state); }

async function typeOut(text, sender) { const msg = document.createElement("div"); msg.classList.add("message", sender); chatbox.appendChild(msg);

for (let i = 0; i < text.length; i++) { msg.innerHTML += text[i]; chatbox.scrollTop = chatbox.scrollHeight; await new Promise(res => setTimeout(res, 10)); } }


