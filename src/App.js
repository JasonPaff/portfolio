import "./tailwind.output.css"
import "swiper/css/bundle";
import Header from "./Components/Header/Header";
import Tabs from "./Components/NavBar/Tabs";

function App() {
    return (
        <div className="flex flex-col justify-center">
            <Header/>
            <Tabs/>
        </div>
    );
}
export default App;