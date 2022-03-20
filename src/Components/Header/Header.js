import {DocumentDownloadIcon, MailIcon, PhoneIcon} from '@heroicons/react/solid'
import Github from "./Github";
import HeaderImage from "./HeaderImage";
import HeaderName from "./HeaderName";
import BlueHoverButton from "../General/BlueHoverButton";

const profile = {
    name: 'Jason Paff',
    email: 'jasonpaff@gmail.com',
    avatar: 'https://storage.googleapis.com/jason-paff-portfolio/Images/profile/catprofile.jpg',
    backgroundImage: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    fields: [['Phone', '(404) 341-8383'], ['Email', 'jasonpaff@gmail.com'], ['Title', 'Full Stack Web Developer']],
};

export default function Header() {
    return (
        <div>
            <HeaderImage imageSrc={profile.backgroundImage}/>
            <div className="mt-5 sm:flex items-center sm:justify-center sm:space-x-6 sm:pb-1 ml-4">
                <HeaderName name={profile.name}/>
                <div className="flex items-center flex-row flex-wrap">
                    <BlueHoverButton
                        link="https://www.linkedin.com/in/jason-paff-b67349209/"
                        imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        tooltip="https://www.linkedin.com/in/jason-paff-b67349209/"
                        tooltipId="linkedInTooltip"
                        text="LinkedIn"
                    />
                    <BlueHoverButton
                        icon={<Github/>}
                        link="https://github.com/JasonPaff"
                        tooltip="https://github.com/JasonPaff"
                        tooltipId="githubTooltip"
                        text="Github"
                    />
                    <BlueHoverButton
                        icon={<MailIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        link="mailto:jasonpaff@gmail.com"
                        tooltip="JasonPaff@gmail.com"
                        tooltipId="emailTooltip"
                        text="Email"
                    />
                    <BlueHoverButton
                        icon={<PhoneIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        link="tel:1-404-341-8383"
                        tooltip="404-341-8383"
                        tooltipId="phoneTooltip"
                        text="Call"
                    />
                    <BlueHoverButton
                        icon={<DocumentDownloadIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        link="https://storage.googleapis.com/jason-paff-portfolio/resume.pdf"
                        text="Download CV"
                    />
                </div>
            </div>
        </div>);
}