import {
    AcademicCapIcon, DocumentTextIcon, HeartIcon, LocationMarkerIcon, MailIcon, PhoneIcon
} from "@heroicons/react/solid";
import LinkedIn from "./LinkedIn";
import GithubButton from "./GitHubButton";

const items = [{
    id: 1,
    icon: LocationMarkerIcon,
    label: 'Location: ',
    text: 'Atlanta, Georgia',
    link: 'https://www.google.com/maps?q=Atlanta,+Georgia'
}, {id: 2, icon: PhoneIcon, label: 'Phone: ', text: '(404) 341-8383', link: 'tel:1-404-341-8383'}, {
    id: 3,
    icon: LinkedIn,
    label: 'LinkedIn: ',
    text: 'Jason Paff',
    link: 'https://www.linkedin.com/in/jason-paff-b67349209/'
}, {id: 4, icon: MailIcon, label: 'Email: ', text: 'JasonPaff@gmail.com', link: 'mailto:jasonpaff@gmail.com'},]

const moreItems = [{
    id: 1,
    icon: GithubButton,
    label: 'Github: ',
    text: 'JasonPaff',
    link: 'https://github.com/JasonPaff'
}, {
    id: 2,
    icon: AcademicCapIcon,
    label: 'Study: ',
    text: 'DigitalCrafts',
    link: 'https://www.digitalcrafts.com'
}, {id: 3, icon: DocumentTextIcon, label: 'Degree: ', text: 'Certificate', link: 'https://www.digitalcrafts.com'}, {
    id: 4,
    icon: HeartIcon,
    label: 'Interests: ',
    text: 'Books!',
    link: 'https://www.goodreads.com/user/show/23280331-jason'
}]

export default function InfoList() {
    return (
        <div className="flex sm:grid sm:grid-cols-2">
            <ul className="">
                {items.map((item) => (<li key={item.id} className="pt-1">
                    <div className="flex">
                        <item.icon className="h-4 w-4 mt-1 mr-1 text-sky-600"/>
                        {item.label}
                        <a href={item.link} target="_blank" rel="noreferrer"
                           className="ml-1 hover:text-sky-600">{item.text}</a>
                    </div>
                </li>))}
            </ul>
            <ul className="">
                {moreItems.map((item) => (<li key={item.id} className="pt-1">
                    <div className="flex">
                        <item.icon className="h-4 w-4 mt-1 mr-1 text-sky-600"/>
                        {item.label}
                        <a href={item.link} target="_blank" rel="noreferrer"
                           className="ml-1 hover:text-sky-600">{item.text}</a>
                    </div>
                </li>))}
            </ul>
        </div>
    );
}