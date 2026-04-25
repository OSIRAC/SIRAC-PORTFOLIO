"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "42-Minishell",
    description:
      "C dili ve sistem çağrıları kullanılarak geliştirilmiş özelleştirilmiş bir shell. Proses yönetimi, piping, sinyal işleme ve manuel bellek yönetimi ile güçlü bir terminal simülasyonu.",
    image: "/images/projects/01_42-Minishell.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/OSIRAC/42-MINISHELL",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Fake API CRUD",
    description:
      "React ve TypeScript ile geliştirilmiş, harici API üzerinden veri yönetimi yapan dinamik arayüz. Sınıf tabanlı bileşenler ve modüler mimari ile tam CRUD operasyonları.",
    image: "/images/projects/02_React_Fake_API_CRUD.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OSIRAC/REACT-FAKE_API-CRUD",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Racing Simulation (C# / MSSQL)",
    description:
      "C# Windows Forms ve MSSQL kullanılarak N-tier mimarisiyle geliştirilmiş çok formlu yarış simülasyonu. Azure ile bulut entegrasyonu ve kullanıcılar arası istatistik takibi.",
    image: "/images/projects/03_Racing_Simulation.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/OSIRAC/RACING-GAME",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Microservice Backend (Staj — Emlak Katılım)",
    description:
      "Ocelot API Gateway, RabbitMQ ile event-driven mesajlaşma ve Docker ile bağımsız servis orkestrasyonu içeren ölçeklenebilir mikroservis altyapısı.",
    image: "/images/projects/04_Microservice_Backend.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/OSIRAC/EMLAK_KATILIM_MIKROSERVICE",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "News Content Web API (Staj — Turkuvaz Media)",
    description:
      "ASP.NET Core ile haber içeriği yönetimi için geliştirilmiş RESTful API. EF Core ile veritabanı tasarımı, Admin/User rol tabanlı yetkilendirme ve Swagger entegrasyonu.",
    image: "/images/projects/05_News_Content_Web_API.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/OSIRAC/TURKUVAZ_WEB_API",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-12 scroll-mt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projelerim
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;