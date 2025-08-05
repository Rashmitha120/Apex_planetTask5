console.log("JS is running...");
document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Weather App",
      description: "Displays real-time weather using OpenWeatherMap API."
    },
    {
      title: "To-Do List",
      description: "Simple to-do list app with localStorage support."
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio using HTML, CSS, and JavaScript."
    }
  ];

  const projectList = document.getElementById("projectList");

  projects.forEach(project => {
    const item = document.createElement("div");
    item.className = "project-item";
    item.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectList.appendChild(item);
  });
});
