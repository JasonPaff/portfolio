import classJoiner from "../../Utils/ClassJoiner";

export default function ProjectButton(props) {
    return (
        <button
            type="button"
            onClick={() => props.setProject(props.setProjectText)}
            className={classJoiner('-ml-px relative inline-flex items-center px-4 py-2 border border-black',
                ' rounded-md sm:rounded-none text- text-sm font-medium focus:z-10',
                'focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500',
                props.selected === props.setProjectText ? 'text-sky-500' : 'text-gray-400',
                props.isBeginning
                    ? 'sm:rounded-l-md'
                    : '',
                props.isEnd
                    ? 'sm:rounded-r-md'
                    : '')}
        >
            {props.projectText}
        </button>
    );
}