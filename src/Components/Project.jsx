// Project.jsx
import React from "react";
import "./Project.css";

function Project({ projectData }) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={projectData.title} src={projectData.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Title:</strong> {projectData.title}
                    </li>
                    <li>
                        <strong>Deployed app:</strong> <a href={projectData.live_app_url}>{projectData.live_app_url}</a>
                    </li>
                    <li>
                        <strong>GitHub repository:</strong> <a href={projectData.repository_url}>{projectData.repository_url}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Project;
