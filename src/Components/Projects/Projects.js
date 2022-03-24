import ProjectTabs from "./ProjectTabs";
import {useState} from "react";
import Splatter from "./Splatter";
import EtsyClone from "./EtsyClone";
import WhatsForDinner from "./WhatsForDinner";
import BlazorECommerce from "./BlazorECommerce";
import TournamentLife from "./TournamentLife";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState("WhatsForDinner");
    return (
        <>
            <div className="flex justify-center">
                <ProjectTabs selected={selectedProject} setProject={setSelectedProject}/>
            </div>
            {selectedProject === "TournamentLife" && <TournamentLife/>}
            {selectedProject === "EtsyClone" && <EtsyClone/>}
            {selectedProject === "Splatter" && <Splatter/>}
            {selectedProject === "WhatsForDinner" && <WhatsForDinner/>}
            {selectedProject === "BlazorECommerce" && <BlazorECommerce/>}
        </>
    );
}