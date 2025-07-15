const ProjectsPage = () => {
  const projects = [
    {
      title: "AI-Driven Data Visualization",
      description: "Developed a web application that visualizes complex datasets using AI algorithms to identify patterns and anomalies. Features interactive charts and real-time data updates.",
      tags: ["Next.js", "D3.js", "Python", "TensorFlow", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Interactive 3D Portfolio",
      description: "Designed and built a personal portfolio website featuring interactive 3D models and animations using React Three Fiber. Showcases creative coding and immersive user experiences.",
      tags: ["Next.js", "React Three Fiber", "Three.js", "motion.dev", "Blender"],
      link: "#",
    },
    {
      title: "Full-Stack E-commerce Platform",
      description: "Created a scalable e-commerce platform with a robust backend (Node.js, Express, MongoDB) and a dynamic frontend (React). Includes user authentication, product management, and payment gateway integration.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Machine Learning Model Deployment",
      description: "Deployed a custom machine learning model as a RESTful API service using Flask and Docker. Integrated with a web interface for real-time predictions.",
      tags: ["Python", "Flask", "Docker", "Scikit-learn", "React"],
      link: "#",
    },
    {
      title: "Real-time Chat Application",
      description: "Built a real-time chat application with WebSockets (Socket.IO) and a React frontend. Supports private messaging, group chats, and user presence indicators.",
      tags: ["React", "Socket.IO", "Node.js", "Express.js", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto p-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-blue-600 hover:underline self-start">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;