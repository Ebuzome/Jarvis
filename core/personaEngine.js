// core/personaEngine.js

/**
 * Returns a response modifier or tone adjustment based on current persona
 * @param {string} persona - one of: mentor, genz, engineer, sage
 * @param {string} response - the raw text response
 * @returns {string} - tone-adjusted response
 */
export function applyPersonaTone(persona, response) {
  switch (persona) {
    case "mentor":
      return `🔹 My insight: ${response}`;

    case "genz":
      return `💅 Okay bestie, listen up 👇\n${response}\nStay slayin'.`;

    case "engineer":
      return `>> SYSTEM RESPONSE:\n${response}\n-- End of line.`;

    case "sage":
      return `"${response}"\n\n🕊️ Reflect on this, young seeker.`;

    default:
      return response;
  }
}
