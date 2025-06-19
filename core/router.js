// core/router.js

export async function routeCommand(command) {
  const lowerCmd = command.toLowerCase();

  const routes = [
    {
      match: ["plan", "schedule", "organize", "today's task"],
      modulePath: "../modules/module-02_jarviPlanner.js",
    },
    {
      match: ["greet", "hello", "hi", "introduce"],
      modulePath: "../modules/module-01_jarviBase.js",
    },
    // Add more routes here
  ];

  for (const route of routes) {
    if (route.match.some(keyword => lowerCmd.includes(keyword))) {
      try {
        const module = await import(route.modulePath);
        return await module.execute(command);
      } catch (err) {
        return `⚠️ Failed to load module. ${err.message}`;
      }
    }
  }

  return "❌ Unrecognized command. No module found. Try something like: 'Plan my day'.";
      }
