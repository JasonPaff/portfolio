import ProjectTabs from "./ProjectTabs";
import {useState} from "react";
import Splatter from "./Splatter";
import EtsyClone from "./EtsyClone";
import WhatsForDinner from "./WhatsForDinner";
import BlazorECommerce from "./BlazorECommerce";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState("Splatter");
    return (
        <>
            <div className="flex justify-center">
                <ProjectTabs selected={selectedProject} setProject={setSelectedProject}/>
            </div>
            {selectedProject === "Splatter" && <Splatter/>}
            {selectedProject === "EtsyClone" && <EtsyClone/>}
            {selectedProject === "WhatsForDinner" && <WhatsForDinner/>}
            {selectedProject === "BlazorECommerce" && <BlazorECommerce/>}
        </>
    );
}