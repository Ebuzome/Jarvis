// core/router.js

import { applyPersonaTone } from '../core/personaEngine.js';

/**

Handles incoming commands and routes them to the appropriate module.

Applies persona tone before returning response.

@param {string} command - user input

@param {string} persona - current selected persona

@returns {string} - modified module response */ export async function routeCommand(command, persona = "mentor") { const lowerCmd = command.toLowerCase();


const routes = [ { match: ["plan", "schedule", "organize", "today's task"], modulePath: "../modules/module-02_jarviPlanner.js", }, { match: ["greet", "hello", "hi", "introduce"], modulePath: "../modules/module-01_jarviBase.js", }, // Add more routes as needed ];

for (const route of routes) { if (route.match.some(keyword => lowerCmd.includes(keyword))) { try { const module = await import(route.modulePath); const response = await module.execute(command); return applyPersonaTone(persona, response); } catch (err) { return applyPersonaTone(persona, ⚠️ Failed to load module: ${err.message}); } } }

return applyPersonaTone(persona, "❌ Unrecognized command. Try: 'Plan my day' or 'Say hello'."); }

                                                                                                                 
