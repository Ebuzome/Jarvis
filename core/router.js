// core/router.js import { applyPersonaTone } from './personaEngine.js';

export async function routeCommand(command, persona = "mentor") { const lower = command.toLowerCase();

const routes = [ { match: ["hi", "hello", "hey"], modulePath: "../modules/module-01_jarviBase.js", }, { match: ["plan", "schedule", "task", "today"], modulePath: "../modules/module-02_jarviPlanner.js", } ];

for (const route of routes) { if (route.match.some(word => lower.includes(word))) { try { const mod = await import(route.modulePath); const response = await mod.execute(command); return applyPersonaTone(persona, response); } catch (err) { return applyPersonaTone(persona, ⚠️ Could not load module: ${err.message}); } } }

return applyPersonaTone(persona, 🤖 Sorry, I didn’t understand. Try something like "hi" or "plan my day".); }

                             
