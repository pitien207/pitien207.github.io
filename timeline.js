document.addEventListener("DOMContentLoaded", () => {
  const events = [
    {
      title: "🏫 Graduated from Giao Thuy A High School",
      subtitle: "Abitur equivalent (2015–2017)",
    },
    {
      title: "🎯 Admitted to Hanoi University of Science and Technology",
      subtitle: "Major in IT (2017–2018)",
    },
    {
      title: "📖 Studied German at Studienkolleg Nordhausen, Germany",
      subtitle: "(2018–2019)",
    },
    {
      title: "🏫 Bachelor’s Degree in Computer Science – LMU Munich",
      subtitle: "(2019–2023)",
    },
    {
      title: "💻 Internship in IT Testing (MATLAB) – HE Electronics, Munich",
      subtitle: "(2024)",
    },
    {
      title: "💻 Internship as IT Assistant – Ärzte der Welt",
      subtitle: "(Mar 2024 – Dec 2024)",
    },
    {
      title: "💼 IT Administrator & Information Management – Ärzte der Welt",
      subtitle: "(from Jan 2025)",
    },
  ];

  const container = document.getElementById("timeline");

  events.forEach((event) => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    item.innerHTML = `
      <div class="timeline-content">
        <h3>${event.title}</h3>
        <p>${event.subtitle}</p>
      </div>
    `;

    container.appendChild(item);
  });
});
