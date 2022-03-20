import BlueHoverButton from "../General/BlueHoverButton";
import Github from "../Header/Github";
import {LinkIcon, VideoCameraIcon} from "@heroicons/react/solid";
import ImageTechBadge from "../General/ImageTechBadge";
import ImageModal from "../General/ImageModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import {useState} from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Splatter() {
    const [isShowing, setIsShowing] = useState(false);
    const [modalSource, setModalSource] = useState(' ');
    const [title, setTitle] = useState(' ');
    const [description, setDescription] = useState(' ');

    return (
        <>
            <div
                className="max-w-2xl mx-auto py-4 px-4 grid grid-cols-1 gap-y-16
                gap-x-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="mb-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        Splatter
                    </h2>
                    <h2 className="text-lg text-gray-400 mb-2">
                        A bug/issue tracking software solution.
                    </h2>
                    <BlueHoverButton
                        icon={<Github/>}
                        link="https://github.com/JasonPaff/Splatter"
                        text="Github Repo"
                    />
                    <BlueHoverButton
                        icon={<LinkIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        link="https://splatter-app.herokuapp.com/"
                        text="Live"
                    />
                    <button
                        type="button"
                        onClick={() => {
                            setIsShowing(!isShowing);
                            setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/splatter/splatter_demo.gif');
                            setTitle('Splatter Demo');
                            setDescription('');
                        }}
                        className="transition ease-in-out delay-150 hover:scale-110 duration-300
                                    inline-flex justify-center px-4 py-2 shadow-sm text-sm font-medium
                                    rounded-md bg-zinc-900 text-gray-300 hover:bg-zinc-900 hover:text-sky-600
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                        <VideoCameraIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>
                        <span>Demo</span>
                    </button>

                    <div className="mt-2">
                        <ImageTechBadge text={"Javascript"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"}/>
                        <ImageTechBadge text={"HTML"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}/>
                        <ImageTechBadge text={"TailwindCSS"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"}/>
                        <ImageTechBadge text={"Node.js"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"}/>
                        <ImageTechBadge text={"Express"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}/>
                        <ImageTechBadge text={"GraphQL"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"}/>
                        <ImageTechBadge text={"React"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}/>
                        <ImageTechBadge text={"Redux"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"}/>
                        <ImageTechBadge text={"Mongodb"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}/>
                        <ImageTechBadge text={"Auth0"} src={"https://jwt.io/img/pic_logo.svg"}/>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">What it is</h1>
                        <p className="text-gray-300">
                            Splatter is a bug/issue tracking software solution intended to be used internally during the software
                            development process. Splatter is a role based program, available roles are quality assurance, developer, and admin.
                            The users role determines which parts of the dashboard they have access too.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it works</h1>
                        <p className="text-gray-300">
                            under construction
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it was built</h1>
                        <p className="text-gray-300">
                            under construction
                        </p>
                    </div>
                </div>
                <div className="sm:w-[38rem] sm:h-[30rem] mt-16">
                    <Swiper
                        navigation={true}
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper rounded-lg">
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/splatter/splatter_demo.gif"
                                alt="demo"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/splatter/splatter_demo.gif');
                                    setTitle('Live Demo');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/login_page.png"
                                alt="login page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/login_page.png');
                                    setTitle('Login page');
                                    setDescription("Splatter utilizes the Auth0 api to manage authentication and authorization for its users.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/stats_page.png"
                                alt="stats page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/stats_page.png');
                                    setTitle('Statistics Page');
                                    setDescription("Splatter utilizes the recharts library to show various graphs and statistics for the bug reports.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/new_ticket_page.png"
                                alt="new ticket page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/new_ticket_page.png');
                                    setTitle('New Ticket Page');
                                    setDescription("The users with the quality assurance role are responsible for testing the software and submitting new bug reports.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/open_ticket_page.png"
                                alt="open ticket page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/open_ticket_page.png');
                                    setTitle('Ticket Viewer');
                                    setDescription("Every role has the ability to use the tickets viewer, admins can see every ticket in the " +
                                        "system while developers can only see tickets assigned to them and quality assurance personnel can only see the tickets they have created.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/messages_page.png"
                                alt="messages page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/messages_page.png');
                                    setTitle('Internal Messaging Page');
                                    setDescription("Users can send messages to any other member of the team from here. Messaging utilizes a graphQL endpoint" +
                                        " for real-time communications with no refreshing or reloading required.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/help_page.png"
                                alt="help page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/Splatter/help_page.png');
                                    setTitle('Support Page');
                                    setDescription("Answers to common questions are found here.");
                                }}
                            />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
            <div className="h-4/5">
                {isShowing && (<ImageModal imageSrc={modalSource} title={title} description={description} setClosed={setIsShowing}/>)}
            </div>
        </>
    );
}