const timelineEvents = {
  en: [
    {
      title: "Graduated from Giao Thuy A High School",
      subtitle: "Abitur equivalent (2015-2017)",
    },
    {
      title: "Admitted to Hanoi University of Science and Technology",
      subtitle: "Major in IT (2017-2018)",
    },
    {
      title: "Studied German at Studienkolleg Nordhausen, Germany",
      subtitle: "(2018-2019)",
    },
    {
      title: "Bachelor's Degree in Computer Science - LMU Munich",
      subtitle: "(2019-2023)",
    },
    {
      title: "Internship in IT Testing (MATLAB) - HE Electronics, Munich",
      subtitle: "(2024)",
    },
    {
      title: "Internship as IT Assistant - Arzte der Welt",
      subtitle: "(Mar 2024 - Dec 2024)",
    },
    {
      title: "IT Administrator & Information Management - Arzte der Welt",
      subtitle: "(from Jan 2025)",
    },
  ],
  vi: [
    {
      title: "Tốt nghiệp THPT Giao Thuy A",
      subtitle: "Tương đương Abitur (2015-2017)",
    },
    {
      title: "Trúng tuyển Đại học Bách khoa Hà Nội",
      subtitle: "Chuyên ngành CNTT (2017-2018)",
    },
    {
      title: "Học tiếng Đức tại Studienkolleg Nordhausen, Đức",
      subtitle: "(2018-2019)",
    },
    {
      title: "Cử nhân Khoa học Máy tính - LMU Munich",
      subtitle: "(2019-2023)",
    },
    {
      title: "Thực tập kiểm thử CNTT (MATLAB) - HE Electronics, Munich",
      subtitle: "(2024)",
    },
    {
      title: "Thực tập sinh IT Assistant - Arzte der Welt",
      subtitle: "(03/2024 - 12/2024)",
    },
    {
      title: "IT Administrator & Information Management - Arzte der Welt",
      subtitle: "(từ 01/2025)",
    },
  ],
  de: [
    {
      title: "Abschluss an der Giao Thuy A High School",
      subtitle: "Abitur-Äquivalent (2015-2017)",
    },
    {
      title: "Zulassung an der Hanoi University of Science and Technology",
      subtitle: "Fachrichtung IT (2017-2018)",
    },
    {
      title: "Deutschstudium am Studienkolleg Nordhausen",
      subtitle: "(2018-2019)",
    },
    {
      title: "Bachelor in Informatik - LMU München",
      subtitle: "(2019-2023)",
    },
    {
      title: "Praktikum im IT-Testing (MATLAB) - HE Electronics, München",
      subtitle: "(2024)",
    },
    {
      title: "Praktikum als IT Assistant - Arzte der Welt",
      subtitle: "(03/2024 - 12/2024)",
    },
    {
      title: "IT Administrator & Information Management - Arzte der Welt",
      subtitle: "(seit 01/2025)",
    },
  ],
};

function renderTimeline(language) {
  const container = document.getElementById("timeline");
  if (!container) return;

  const events = timelineEvents[language] || timelineEvents.en;
  container.innerHTML = "";

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
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLanguage = window.getPortfolioLanguage?.() || "en";
  renderTimeline(initialLanguage);
});

document.addEventListener("portfolio-language-change", (event) => {
  renderTimeline(event.detail.language);
});
