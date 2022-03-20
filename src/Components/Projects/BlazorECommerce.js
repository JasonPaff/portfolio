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
import BlueHoverDemoButton from "../General/BlueHoverDemoButton";

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
                    <h2 className="text-lg text-sky-500 mb-2">
                        A simple ecommerce solution built with asp.net blazor.
                    </h2>
                    <BlueHoverButton
                        icon={<Github/>}
                        link="https://github.com/JasonPaff/BlazorEcommerceSite"
                        tooltip="https://github.com/JasonPaff/BlazorEcommerceSite"
                        tooltipId="blazorGithubTooltip"
                        text="Github Repo"
                    />
                    <BlueHoverButton
                        icon={<LinkIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        link="https://blazor-ecommerce.herokuapp.com/"
                        tooltip="https://blazor-ecommerce.herokuapp.com/"
                        tooltipTwo="heroku server can take 5-10 seconds to spin up"
                        tooltipId="blazorLiveTooltip"
                        text="Live"
                    />
                    <BlueHoverDemoButton
                        icon={<VideoCameraIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        text="Demo"
                        tooltip="animated demo gif modal"
                        tooltipId="blazorDemoTooltip"
                        click={() => {
                            setIsShowing(!isShowing);
                            setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/blazor-demo.gif');
                            setTitle('Blazor ECommerce Demo');
                            setDescription('');
                        }}
                    />
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
                            ECommerce is a proof of concept website that was created as a full stack side project to showcase
                            Asp.Net & Blazor knowledge. Users are able to login/register for an account. Shopping carts are
                            provided to both logged in accounts and guest accounts. User are able to find products using the search
                            bar or selecting categories from the navigation bar. A dashboard for logged in users allows password
                            and address information to be changed and order history to be viewed.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it works</h1>
                        <p className="text-gray-300">
                            Customers utilize the search bar or navigation categories to find products to buy then add them to
                            their shopping cart and checkout. Users can continue as a guest or create an account to save
                            their shopping cart for a return visit.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it was built</h1>
                        <p className="text-gray-300">
                            ECommerce was built in C# using the asp.net blazor framework under a MVC architecture. Data management
                            is done with SQL server and entity framework orm. Stripe api was integrated using WebHooks
                            for payment processing. The admin dashboard allows for full CRUD operations to be performed on the
                            products in the database using a RESTful api implementation. Authentication is done using JSON web tokens.
                            The front-end was built in cshtml with tailwindCSS styling.
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
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/products.png"
                                alt="products page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/products.png');
                                    setTitle('Search Pagination Example');
                                    setDescription("Searching for a word/phrase will return every item title/description containing that word/phrase, paginated.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/home.png"
                                alt="search results page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/home.png');
                                    setTitle('Search Results');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/pages.png"
                                alt="home page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/BlazorECommerce/pages.png');
                                    setTitle('Home Page');
                                    setDescription("");
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
                    </Swiper>

                </div>
            </div>
            <div className="h-4/5">
                {isShowing && (<ImageModal imageSrc={modalSource} title={title} description={description} setClosed={setIsShowing}/>)}
            </div>
        </>
    );
}