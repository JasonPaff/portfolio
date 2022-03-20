import {Tab} from '@headlessui/react'
import classJoiner from "../../Utils/ClassJoiner";

export default function EnabledTab(props) {
    return (
        <Tab className={({selected}) =>
            classJoiner('flex justify-center w-36 sm:w-56 py-4 px-1 text-center border-b-2 font-medium text-sm',
                selected ? 'border-sky-600 text-sky-600'
                    : 'border-transparent text-gray-400')}>
                {props.icon}
                {props.title}
        </Tab>
    );
}