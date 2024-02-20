import React from "react";
import "./Project.css";

function Project({ projectData }) {
    return (
        <div className="card">
            <h2><strong>Title:</strong> {projectData.title}</h2>
            <div className="content">
                <ul>
                    <li>
                        <strong>Deployed app:</strong> <a href={projectData.live_app_url}>{projectData.live_app_url}</a>
                    </li>
                    <li>
                        <strong>GitHub repository:</strong> <a href={projectData.repository_url}>{projectData.repository_url}</a>
                    </li>
                    <div className="img-container">
                <img alt={projectData.title} src={projectData.image} />
            </div>
                </ul>
            </div>
        </div>
    );
}

export default Project;
