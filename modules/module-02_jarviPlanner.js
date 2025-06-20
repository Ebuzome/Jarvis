function getPlannerResponse() {
    const responses = [
        "Here's a plan for today:\n1. Build at least two Jarviscore modules💪 (30 min)\n2. Talk with five clients 💌 (2 hrs)\n3. Bible study session (1 hr)\n4. Creative exploration (1 hr)\n5. Wrap up & planning tomorrow (30 min) ✅",
        "Today's optimized schedule:\n🌅 Morning: Creative work\n☀️ Afternoon: Meetings & collaboration\n🌙 Evening: Learning & planning\nRemember to take breaks! 🧘‍♂️",
        "I suggest this schedule:\n- 9-11 AM: Focused work\n- 11-12: Collaboration\n- 1-3 PM: Strategic tasks\n- 3-5 PM: Execution\nWhat would you like to adjust?",
        "Planning mode activated! �\nMorning: Tackle complex tasks\nAfternoon: Communication & follow-ups\nEvening: Reflection & planning\nSound good?",
        "Your productivity blueprint:\n📊 8-10 AM: Analytics review\n💻 10-12 PM: Development\n🍱 12-1 PM: Lunch break\n📞 1-3 PM: Client calls\n📝 3-5 PM: Documentation"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
      }
