// core/personaEngine.js

export function applyPersonaTone(persona, response) { switch (persona) { case "mentor": return 🧙 Mentor says:\n${response}; case "genz": return 💅 Gen Z Vibe:\n${response}\n#SlayOn; case "engineer": return ⚙️ Terminal Output:\n>>> ${response}; case "sage": return 🌿 From the Sage:\n"${response}"; default: return response; } }

    
