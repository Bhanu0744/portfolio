function Projects() {
    const projectList = [
      {
        name: "Web Application for a company",
        description: "Manage tasks with login and PostgreSQL backend",
        tech: "React, Flask, PostgreSQL",
        demo: "https://asarit.com/",
        code: "https://github.com/Bhanu0744"
      },
      // Add more projects here
    ];
  
    return (
      <section id="projects">
        <h2>Projects</h2>
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech}</p>
            <a href={project.demo}>Live Demo</a> | <a href={project.code}>Code</a>
          </div>
        ))}
      </section>
    );
  }
  export default Projects;
  