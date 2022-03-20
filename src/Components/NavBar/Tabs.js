import {Tab} from '@headlessui/react'
import {BookOpenIcon, ClipboardListIcon, FireIcon, UserIcon} from "@heroicons/react/solid";
import DisabledTab from "./DisabledTab";
import EnabledTab from "./EnabledTab";
import AboutMe from "../AboutMe/AboutMe";
import BlankPanel from "./BlankPanel";
import Skills from "../Skills/Skills";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import Projects from "../Projects/Projects";

export default function Tabs() {
    return (
        <>
            <div className="flex items-center mt-2">
                <div className="flex flex-col items-center justify-center w-full">
                    <Tab.Group defaultIndex={2} manual>
                        <Tab.List>
                            <div className="flex flex-row">
                                <div className="hidden md:block">
                                    <DisabledTab/>
                                </div>
                                <div className="flex flex-col md:flex-row items-center">
                                    <EnabledTab title="About Me"
                                                icon={<UserIcon className="-ml-0.5 mr-2 h-5 w-5"/>}/>
                                    <EnabledTab title="Featured Project"
                                                icon={<FireIcon className="-ml-0.5 mr-2 h-5 w-5"/>}/>
                                    <EnabledTab title="Projects"
                                                icon={<BookOpenIcon className="-ml-0.5 mr-2 h-5 w-5"/>}/>
                                    <EnabledTab title="Skills"
                                                icon={<ClipboardListIcon className="-ml-0.5 mr-2 h-5 w-5"/>}/>
                                </div>
                                <div className="hidden md:block">
                                    <DisabledTab/>
                                </div>
                            </div>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel><BlankPanel/></Tab.Panel>
                            <Tab.Panel><AboutMe/></Tab.Panel>
                            <Tab.Panel><FeaturedProject/></Tab.Panel>
                            <Tab.Panel><Projects/></Tab.Panel>
                            <Tab.Panel><Skills/></Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </>
    );
}