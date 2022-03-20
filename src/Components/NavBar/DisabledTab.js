import {Tab} from '@headlessui/react'
import classJoiner from "../../Utils/ClassJoiner";

export default function DisabledTab() {
    return (
        <Tab disabled className={({selected}) =>
            classJoiner('w-1/6 py-4 px-1 text-center border-b-2 font-medium text-sm',
                selected ? 'border-sky-600 text-sky-600'
                    : 'border-transparent text-gray-400')}>
            <div className="flex justify-center w-56">
            </div>
        </Tab>
    );
}