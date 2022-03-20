import classJoiner from "../../Utils/ClassJoiner";

export default function DisabledNavButton(props) {
    return (
        <>
            <button disabled className={
                classJoiner('w-1/6 py-4 px-1 text-center border-b-2 font-medium text-sm',
                    props.selected
                        ? 'border-sky-600 text-sky-600'
                        : 'border-transparent text-gray-400')}>
                <div className="flex justify-center w-56">
                </div>
            </button>
        </>
    );
}