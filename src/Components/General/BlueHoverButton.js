export default function BlueHoverButton(props) {
    return (
        <button
            type="button"
            onClick={() => window.open(props.link)}
            className="transition ease-in-out delay-150 hover:scale-110 duration-300
                inline-flex justify-center px-4 py-2 shadow-sm text-sm font-medium
                rounded-md bg-zinc-900 text-gray-300 hover:bg-zinc-900 hover:text-sky-600
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
                mb-2 sm:mb-0 mr-2"
        >
            {props.imageSrc && (
            <img
                className="-ml-1 h-5 w-5 mr-2"
                src={props.imageSrc}
                alt="button"/>)}
            {props.icon}
            <span>{props.text}</span>
        </button>
    )
}