    import Project from "./Project";

    const projects = [{
        title:'',
        deployedLink:'',
        githubLink:'',
        screenshot:'',
    }];

    function ProjectGallery() {

   return (
   {projects.map(p => <Project project={p}/>)}
   )
}

export default ProjectGallery