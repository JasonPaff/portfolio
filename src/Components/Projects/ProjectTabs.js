import ProjectButton from "./ProjectButton";

export default function ProjectTabs(props) {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center relative z-0 mt-8
            inline-flex border-gray-700 shadow-sm rounded-md">
            <ProjectButton projectText="Splatter" setProjectText="Splatter" selected={props.selected}
                           setProject={props.setProject} isBeginning={true} isEnd={false}/>
            <ProjectButton projectText="Betsy" setProjectText="EtsyClone" selected={props.selected}
                           setProject={props.setProject}  isBeginning={false} isEnd={false}/>
            <ProjectButton projectText="Whats For Dinner?" setProjectText="WhatsForDinner" selected={props.selected}
                           setProject={props.setProject}  isBeginning={false} isEnd={false}/>
            <ProjectButton projectText="Blazor ECommerce" setProjectText="BlazorECommerce" selected={props.selected}
                           setProject={props.setProject} isBeginning={false} isEnd={true}/>
        </div>
    );
}