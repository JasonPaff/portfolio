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

export default function WhatsForDinner() {
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
                        Whats For Dinner?
                    </h2>
                    <h2 className="text-lg text-gray-400 mb-2">
                        An app to connect ingredients in your fridge to recipes found online.
                    </h2>
                    <BlueHoverButton
                        icon={<Github/>}
                        link="https://github.com/JasonPaff/WhatsForDinner"
                        text="Github Repo"
                    />
                    <BlueHoverButton
                        icon={<LinkIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        link="https://jasonpaff.github.io/WhatsForDinner/"
                        text="Live"
                    />
                    <button
                        type="button"
                        onClick={() => {
                            setIsShowing(!isShowing);
                            setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/dinner-demo.gif');
                            setTitle('Whats For Dinner? Demo');
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
                        <ImageTechBadge text={"HTML"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}/>
                        <ImageTechBadge text={"CSS"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}/>
                        <ImageTechBadge text={"Javascript"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"}/>
                        <ImageTechBadge text={"Google Maps"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"}/>
                        <ImageTechBadge text={"Google Places"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"}/>
                        <ImageTechBadge text={"Spoonacular API"} src={"https://spoonacular.com/application/frontend/images/logo-simple-framed-green-gradient.svg"}/>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">What it is</h1>
                        <p className="text-gray-300">
                            Whats For Dinner? is a mobile first responsive single page web app that helps connect
                            the ingredients in your fridge to recipes online that contain those ingredients. The dine out
                            portion of the app shows you pictures and reviews from local restaurants ranked by rating and
                            sorted by category.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it works</h1>
                        <p className="text-gray-300">
                            Users are able to select either the cook at home side of the app or the dine out side. The cook
                            at home side of the app allows users to enter ingredients they either already own or want to use and
                            then they can search for recipes online that include those ingredients. The dine out side takes
                            the users geolocation and returns all the nearby restaurants based on the selected category. Reviews
                            and photos are loaded automatically in an easy to view format designed for easy mobile scrolling.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it was built</h1>
                        <p className="text-gray-300">
                            Whats for Dinner? was built over the course of 1 week by a 3 man team as part of a front end
                            presentation during a full stack web development bootcamp. As a single page application the
                            project was built entirely in javascript/html using vanilla css for styling. api integrations
                            included google maps, google places and the spoonacular api.
                        </p>
                    </div>
                </div>
                <div className="mt-16">
                    <Swiper
                        navigation={true}
                        loop={true}
                        grabCursor={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper rounded-lg">
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/dinner-demo.gif"
                                alt="live demo"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/dinner-demo.gif');
                                    setTitle('Live Demo');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/home_page.png"
                                alt="home page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/home_page.png');
                                    setTitle('Home Page');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/cook_at_home.png"
                                alt="cook at home"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/cook_at_home.png');
                                    setTitle('Cook At Home');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/recipes.png"
                                alt="recipes"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/recipes.png');
                                    setTitle('Recipes');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/recipe_modal.png"
                                alt="recipe modal"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/recipe_modal.png');
                                    setTitle('Recipe Modal');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/more_recipes.png"
                                alt="more recipes"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/more_recipes.png');
                                    setTitle('Recipes');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/dine_out.png"
                                alt="dine out"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/WhatsForDinner/dine_out.png');
                                    setTitle('Dine Out Page');
                                    setDescription("");
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