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

export default function BlazorECommerce() {
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
                        Blazor ECommerce
                    </h2>
                    <h2 className="text-lg text-gray-400 mb-2">
                        A simple ecommerce solution built with asp.net blazor.
                    </h2>
                    <BlueHoverButton
                        icon={<Github/>}
                        link="https://github.com/JasonPaff/BlazorEcommerceSite"
                        text="Github Repo"
                    />
                    <BlueHoverButton
                        icon={<LinkIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        link="https://blazor-ecommerce.herokuapp.com/"
                        text="Live"
                    />
                    <button
                        type="button"
                        onClick={() => {
                            setIsShowing(!isShowing);
                            setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazor-demo.gif');
                            setTitle('Blazor ECommerce Demo');
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
                        <ImageTechBadge text={"C#"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"}/>
                        <ImageTechBadge text={"Asp.Net"} src={"https://storage.googleapis.com/jason-paff-portfolio/Images/Icons/asp.svg"}/>
                        <ImageTechBadge text={"Blazor"} src={"https://storage.googleapis.com/jason-paff-portfolio/Images/Icons/blazor.svg"}/>
                        <ImageTechBadge text={"TailwindCSS"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"}/>
                        <ImageTechBadge text={"Webhooks"}/>
                        <ImageTechBadge text={"SQL Server"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"}/>
                        <ImageTechBadge text={"Entity Framework"}/>
                        <ImageTechBadge text={"Stripe API"} src={"https://www.svgrepo.com/show/354401/stripe.svg"}/>
                        <ImageTechBadge text={"REST API"} src={"https://www.svgrepo.com/show/120283/api.svg"}/>
                        <ImageTechBadge text={"JWT"} src={"https://jwt.io/img/pic_logo.svg"}/>
                        <ImageTechBadge text={"MVC"}/>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">What it is</h1>
                        <p className="text-gray-300">
                            ECommerce is a proof of concept website that was created to showcase Asp.Net & Blazor
                            knowledge.
                            The site uses the MVC architecture and numerous other best practices such as JWT
                            authentication and Dependency Injection. Data management is with SQL Server and Entity
                            Framework
                            Core providing the ORM. Stripe checkout was integrated using WebHooks to fulfill orders.
                            The admin dashboard allows for full CRUD operations to be performed on the products for that
                            store in the database
                            while the front end interacts with the back end through a full RESTful API implementation.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it works</h1>
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
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazor-demo.gif"
                                alt="live demo"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazor-demo.gif');
                                    setTitle('Live Demo');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazor.png"
                                alt="products page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazor.png');
                                    setTitle('Search Pagination Example');
                                    setDescription("Searching for a word/phrase will return every item title/description containing that word/phrase, paginated.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazorJWT.png"
                                alt="jwt example"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazorJWT.png');
                                    setTitle('JWT Example');
                                    setDescription("Shows a JWT being utilized for authentication");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazorcart.png"
                                alt="shopping cart"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazorcart.png');
                                    setTitle('Shopping Cart');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazororders.png"
                                alt="order history"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazororders.png');
                                    setTitle('Completed Orders History');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazors.png"
                                alt="search results page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazors.png');
                                    setTitle('Search Results');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/homeproducts.png"
                                alt="home page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/homeproducts.png');
                                    setTitle('Home Page');
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