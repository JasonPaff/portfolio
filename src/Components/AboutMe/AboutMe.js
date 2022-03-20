import InfoList from "./InfoList";

export default function AboutMe() {
    return (
        <div className="mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div className="flex flex-col md:flex-row md:max-w-5xl rounded-lg bg-zinc-900 text-white shadow-lg">
                        <img
                            className="object-cover w-full h-48 sm:h-96 rounded-t-lg md:rounded-none md:rounded-l-lg
                                hover:scale-105 transition duration-300 ease-in-out"
                            style={{flexBasis:'fit-content'}}
                            src="https://storage.googleapis.com/jason-paff-portfolio/Images/profile/catprofile.jpg" alt=""/>
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-xl font-medium mb-2">Hello! My name is <span
                                className="animate-pulse text-sky-500">Jason Paff</span> and I'm a
                                <span className="animate-pulse text-sky-500"> Full Stack Web Developer.</span></h5>
                            <p className="text-gray-300 text-base mb-4">
                                I am a software engineer with an incredible passion for the
                                industry!
                                I started coding as a hobby by making small pc games and that hobby grew into a
                                full-blown
                                obsession. I became very serious about my coding 3 years ago and learned everything I
                                could
                                about how to write professional level software. Finally in 2021 I was able to finally
                                take the leap and
                                make it a career. I joined the <span
                                className="animate-pulse text-sky-500">DigitalCrafts</span> Full Stack
                                Web Developer bootcamp in 2021 and completed the
                                immersive
                                program in April 2022.
                                I'm excited to finally begin my journey into the world of professional software
                                development!
                            </p>
                            <InfoList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}