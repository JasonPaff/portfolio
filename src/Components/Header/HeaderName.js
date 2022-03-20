export default function HeaderName(props) {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl text-white font-bold truncate">{props.name}</h1>
            <span className="text-md text-sky-600">Full Stack Developer</span>
        </div>
    )
}