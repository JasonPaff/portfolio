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

export default function EtsyClone() {
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
                        Etsy Clone
                    </h2>
                    <h2 className="text-lg text-gray-400 mb-2">
                        A community driven ecommerce experience.
                    </h2>
                    <BlueHoverButton
                        icon={<Github/>}
                        link="https://github.com/JasonPaff/EtsyClone"
                        text="Github Repo"
                    />
                    <BlueHoverButton
                        icon={<LinkIcon className="-ml-1 mr-2 h-5 w-5 text-sky-600" aria-hidden="true"/>}
                        link="https://our-etsy.herokuapp.com/"
                        text="Live"
                    />
                    <button
                        type="button"
                        onClick={() => {
                            setIsShowing(!isShowing);
                            setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/etsy-demo.gif');
                            setTitle('Etsy Clone Demo');
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
                    <h1 className="text-sm text-gray-400">(heroku server on live link takes 5-10 seconds to spin up)</h1>
                    <div className="mt-2">
                        <ImageTechBadge text={"HTML"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}/>
                        <ImageTechBadge text={"TailwindCSS"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"}/>
                        <ImageTechBadge text={"Javascript"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"}/>
                        <ImageTechBadge text={"Node.js"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"}/>
                        <ImageTechBadge text={"Express"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}/>
                        <ImageTechBadge text={"Postgres"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"}/>
                        <ImageTechBadge text={"Handlebars"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg"}/>
                        <ImageTechBadge text={"Sequelize"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"}/>
                        <ImageTechBadge text={"JWT"} src={"https://jwt.io/img/pic_logo.svg"}/>
                        <ImageTechBadge text={"REST API"} src={"https://www.svgrepo.com/show/120283/api.svg"}/>
                        <ImageTechBadge text={"Stripe API"} src={"https://www.svgrepo.com/show/354401/stripe.svg"}/>
                        <ImageTechBadge text={"Google Auth"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"}/>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">What it is</h1>
                        <p className="text-gray-300">
                            Creates an online shopping marketplace for goods sold by small business owners.
                            Based off of the popular marketplace Etsy. Users can create an account or use a Google
                            login. Implements a backend Postgres database with Sequelize ORM to manage the user
                            created stores and products. Integrates Stripe api to allow for checkouts.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it works</h1>
                        <p className="text-gray-300">
                            Etsy clone is based off the popular site Etsy. Users can sign up and create a storefront of their
                            own and add products that they wish to sell. Stores and their products are created using the
                            admin dashboard. Shoppers are able to create an account or use their google account to login.
                            Features like the wishlist, shopping cart, and checkout are only available to registered users.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-white underline">How it was built</h1>
                        <p className="text-gray-300">
                            Etsy Clone was built over one week by a two man team for presentation during a full stack
                            developer bootcamp. The website is served entirely from a back-end node.js/express server.
                            The pages themselves are built using mustache/handlebar templates with tailwindCSS providing
                            the styling. A postgres database with sequelize orm is providing the data management. Api integrations
                            are stripe api for payment processing and google auth for google login integrations.
                        </p>
                    </div>
                </div>
                <div className="sm:w-[48rem] sm:h-[36rem] mt-16">
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
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/etsy-demo.gif"
                                alt="live demo"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/etsy-demo.gif');
                                    setTitle('Live Demo');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/products_page.png"
                                alt="products page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/products_page.png');
                                    setTitle('Products page');
                                    setDescription("All products home page.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/home_page.png"
                                alt="popular products page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/home_page.png');
                                    setTitle('Popular Products Page');
                                    setDescription("Products listed by most popular first.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/add_product.png"
                                alt="add product page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/add_product.png');
                                    setTitle('Add Product');
                                    setDescription("The dashboard page where shop owning users can add new products.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/cart_page.png"
                                alt="shopping cart page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/cart_page.png');
                                    setTitle('Shopping Cart');
                                    setDescription("");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/etsy_login_page.png"
                                alt="login page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/etsy_login_page.png');
                                    setTitle('Login/Registration Page');
                                    setDescription("User account login/registration page. Integrates with Google Login as well.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/order_history.png"
                                alt="order history page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/order_history.png');
                                    setTitle('Order History Page');
                                    setDescription("Displays all the users previous orders.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/sales_page.png"
                                alt="sale products page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/sales_page.png');
                                    setTitle('Sale Products Page');
                                    setDescription("Only displays products that are currently on sale.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/stores_page.png"
                                alt="stores page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/stores_page.png');
                                    setTitle('Stores Page');
                                    setDescription("Displays all the stores you can shop at.");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/update_password.png"
                                alt="change password page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/update_password.png');
                                    setTitle('Update Password Page');
                                    setDescription("Dashboard page for changing user password");
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/wishlist.png"
                                alt="wishlist page"
                                onClick={() => {
                                    setIsShowing(!isShowing);
                                    setModalSource('https://storage.googleapis.com/jason-paff-portfolio/Images/EtsyClone/wishlist.png');
                                    setTitle('Wishlist Page');
                                    setDescription("Displays all the items on the users wishlist.");
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