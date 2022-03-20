import { FolderDownloadIcon} from "@heroicons/react/solid";
import {useState} from "react";
import ImageModal from "../General/ImageModal";
import Github from "../Header/Github";
import ImageTechBadge from "../General/ImageTechBadge";
import BlueHoverButton from "../General/BlueHoverButton";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

export default function FeaturedProject() {
    const [isShowing, setIsShowing] = useState(false);
    const [modalSource, setModalSource] = useState(' ');
    const [title, setTitle] = useState(' ');
    const [description, setDescription] = useState(' ');

    return (<>
        <div
            className="max-w-2xl mx-auto py-8 px-4 grid grid-cols-1 gap-y-16
                gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
            <div>
                <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Tournament Life
                </h2>
                <BlueHoverButton
                    icon={<Github/>}
                    link="https://github.com/JasonPaff/TournamentLife"
                    tooltip="https://github.com/JasonPaff/TournamentLife"
                    tooltipId="tournamentGithubTooltip"
                    text="Github Repo"
                    />
                <BlueHoverButton
                    icon={<FolderDownloadIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                    link="https://storage.googleapis.com/jason-paff-portfolio/Tournament%20Life.zip"
                    tooltip="Zip file with standalone executable"
                    tooltipId="tournamentExeTooltip"
                    text="Standalone Exe"
                    />
                <BlueHoverButton
                    icon={<FolderDownloadIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                    link="https://storage.googleapis.com/jason-paff-portfolio/Tournament.Life.Setup.exe"
                    tooltip="Windows installer"
                    tooltipId="tournamentInstallTooltip"
                    text="Windows Installer"
                    />

                <div className="mt-2">
                    <ImageTechBadge text={"C#"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"}/>
                    <ImageTechBadge text={"XAML"}/>
                    <ImageTechBadge text={".Net Core"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"}/>
                    <ImageTechBadge text={"SQL"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"}/>
                    <ImageTechBadge text={"Entity Framework"}/>
                    <ImageTechBadge text={"WPF"}/>
                    <ImageTechBadge text={"MVVM"}/>
                </div>
                <div className="mt-4">
                    <h1 className="text-white underline">What it is</h1>
                    <p className="text-gray-300">
                        Tournament Life is a full-featured cross-platform application that provides detailed
                        results tracking, filtering, and displaying for professional poker players and serious
                        recreational players.
                    </p>
                </div>
                <div className="mt-4">
                    <h1 className="text-white underline">How it works</h1>
                    <p className="text-gray-300">
                        The software was built from the ground up to make it as easy as possible to track a high level
                        of data with minimal input from the user while playing. The idea is that you will create (or import
                        someone else's) pre-made tournament templates and then use those templates when you sit down to play to quickly
                        start tournaments. The templates contain all the information for the tournament such as name, buy-in,
                        start time, starting stack sizes, blind levels, late registration length, and much more. The user just
                        has to enter the few variables that change every night such as number of players registered, finishing
                        position and any prize money won.
                    </p>
                </div>
                <div className="mt-4">
                    <h1 className="text-white underline">How it was built</h1>
                    <p className="text-gray-300">
                        Tournament Life is a C# Windows Presentation Foundation application utilizing the .Net Core
                        framework to run on Windows, Mac, and Linux systems. The software was developed by one person
                        (40k line codebase) as a commercially viable product and is used by numerous online poker
                        players every night. The user interface is built entirely in XAML utilizing Syncfusion WPF
                        components. The data is managed by a backend SQL database using entity framework for the ORM.
                        Tournament Life was built from the start up to fully conform to the MVVM architectural pattern.
                        Great care was taken to conform to SOLID principles and other best practices.
                    </p>
                </div>
            </div>

            <div className="sm:w-[42rem] sm:h-[38rem] mt-16">
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
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/demo.gif"
                            alt="demo"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/demo.gif');
                                setTitle('Tournament Life Demo');
                                setDescription('');
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/main-window.png"
                            alt="main window"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/main-window.png');
                                setTitle('Main Tournament Life View');
                                setDescription('Tournament Life was designed from the ground up for ease of use while playing multiple online tournaments.');
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/tournament-manager.png"
                            alt="tournament creator"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/tournament-manager.png');
                                setTitle('Tournament Creation View');
                                setDescription('Tournament Life was built around the idea of reusing user created tournament templates. Easy create your own or import/export to share with others.');
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/no-template-creation.png"
                            alt="quick start"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/no-template-creation.png');
                                setTitle('No Templates? No Problem!');
                                setDescription("Easy to use quick creation window as well as easy tournament duplication for when you don't have or don't want to use a template.");
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/session-creator.png"
                            alt="session creator"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/session-creator.png');
                                setTitle('Session Creator View');
                                setDescription("Group related tournament templates into sessions and start a whole night of tournaments with one click.");
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/session-results.png"
                            alt="session results"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/session-results.png');
                                setTitle('Session Results View');
                                setDescription("Tournament Life automatically groups your tournaments into the sessions they were played in.");
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/session-graph.png"
                            alt="session graphs"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/session-graph.png');
                                setTitle('Sessions Graph View');
                                setDescription("Tournament Life included many ways to display your results. Below is overall profit graphed by overall sessions instead of individual tournaments.");
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/graph.png"
                            alt="single session graph"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/graph.png');
                                setTitle('Single Session Graph View');
                                setDescription("Tournament Life included many ways to display your results. Below is the profit graph for a single session of tournaments.");
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/records-view.png"
                            alt="tournament records"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/records-view.png');
                                setTitle('Tournament Records View');
                                setDescription("Display any tournament records you want in a sortable table view. Easily export the entire table to an excel spreadsheet with one click.");
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/filters.png"
                            alt="results filter"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/filters.png');
                                setTitle('Result Filter Creator View');
                                setDescription("Tournament Life includes many preconfigured filtering options but you are also free to create any new filters you want.");
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/tournament-results.png"
                            alt="tournament results"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/tournament-results.png');
                                setTitle('Tournament Results View');
                                setDescription("Tournament Life tracks a large variety of statistics automatically.");
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/bar-graph.png"
                            alt="bar graph"
                            onClick={() => {
                                setIsShowing(!isShowing);
                                setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/TournamentLife/bar-graph.png');
                                setTitle('Bar Graph View');
                                setDescription("Tournament Life has multiple graphs and charts for displaying results data. Below is roi vs buy-in filtered to 50 minimum games at that buy-in level played.");
                            }}
                        />
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
        <div className="h-4/5">
            {isShowing && (<ImageModal imageSrc={modalSource} title={title} description={description} setClosed={setIsShowing}/>)}
        </div>
    </>)
}