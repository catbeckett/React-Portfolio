function Project ({projectData}) {
    return (
        <div className="projectCard">
            <h1>{projectData.title}</h1>
            <a>Deployed</a>
            <a>GitHub</a>
            <img src=projectData.screenshot} />
        </div>
    )
}

export default Project;