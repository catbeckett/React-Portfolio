import React from "react";
import Project from "./Project";
import projectsData from "./projects.json";

function ProjectGallery() {
    return (
        <div>
            {projectsData.map(project => <Project key={project.id} projectData={project} />)}
        </div>
    );
}

export default ProjectGallery;
