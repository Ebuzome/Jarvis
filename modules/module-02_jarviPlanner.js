// modules/module-02_jarviPlanner.js

export async function execute(command) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-NG", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });

  return `
    <div class="jarvi-card">
      <h3>🧭 Jarvi Daily Planner</h3>
      <p><strong>Date:</strong> ${formattedDate}</p>
      <ul>
        <li>✅ Build at least <strong>2 JarviCore Modules</strong></li>
        <li>🧠 Learn Code for <strong>45 minutes</strong></li>
        <li>📣 Reach out to <strong>5 potential clients</strong></li>
        <li>🙏 Study the Bible + Pray</li>
        <li>🧪 Learn 1 new concept in <strong>Computer Science</strong></li>
        <li>🎯 Reflect on your progress tonight</li>
      </ul>
      <p class="inspire">Remember, greatness is in the grind. One day at a time, King.</p>
    </div>
  `;
}
