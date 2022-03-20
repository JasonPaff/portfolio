export default function ImageTechBadge(props) {
    return (
        <span
            className="inline-flex items-center mr-1 px-3 py-0.5 rounded-full text-sm
                font-medium bg-gray-400 text-gray-900">
        <img
            className="-ml-1 h-5 w-5 mr-2"
            src={props.src ? props.src : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"}
            alt={props.text}
        />
            {props.text}
        </span>
    );
}