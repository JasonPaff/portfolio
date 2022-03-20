const languages = [
    {name: 'C#', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"},
    {name: 'Javascript', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"},
    {name: 'HTML', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {name: 'CSS', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    {name: 'XAML', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"},
    {name: 'SQL', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
    },
];

const frameworks = [
    {name: 'React', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name: 'Redux', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},
    {name: 'Node.js', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
    {name: 'Express', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
    {name: 'Asp.Net', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"},
    {name: 'Blazor', icon:"https://storage.googleapis.com/jason-paff-portfolio/Images/Icons/blazor.png"},
    {name: 'Entity FW', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"},
    {name: '.Net Core', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"},
    {name: 'Handlebars', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg"},
    {name: 'Sequelize', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"},
    {name: 'Postgres', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
    {name: 'MongoDB', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
];

const frameworks2 = [
    {name: 'TailwindCSS', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
    {name: 'Bootstrap', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},
    {name: 'REST', icon:"https://www.svgrepo.com/show/120283/api.svg"},
];

const tools = [
    {name: 'Git', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
    {name: 'Github', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
    {name: 'Rider', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"},
    {name: 'Webstorm', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"},
    {name: 'SQL Server', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"},
    {name: 'AWS', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"},
    {name: 'Azure', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"},
    {name: 'Google Cloud', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"},
    {name: 'Postman', icon:"https://storage.googleapis.com/jason-paff-portfolio/Images/Icons/postman-icon.svg"},
    {name: 'Beekeeper', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"},
    {name: 'REST', icon:"https://www.svgrepo.com/show/120283/api.svg"},
    {name: 'GraphQL', icon:"https://jwt.io/img/pic_logo.svg"},
    {name: 'Auth0', icon:"https://jwt.io/img/pic_logo.svg"},
    {name: 'Stripe', icon:"https://www.svgrepo.com/show/354401/stripe.svg"},
    {name: 'Google Maps', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"},
    {name: 'Google Places', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"},
    {name: 'Google Auth', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"},
    {name: 'Spoonacular', icon:"https://spoonacular.com/application/frontend/images/logo-simple-framed-green-gradient.svg"},
];

export default function Skills() {
    return (
        <>
            <h5 className="ml-20 mt-10 text-xl font-medium mb-2 text-white">Check out some of the languages, frameworks,
                libraries, apis and services I have worked with!</h5>
            <div className="mt-20">
                <h2 className="text-white text-xs font-medium uppercase tracking-wide">Languages</h2>
                <ul className="mt-3 grid grid-cols-3 gap-5 sm:gap-6 sm:grid-cols-6 lg:grid-cols-11">
                    {languages.map((language) => (
                        <li key={language.name}
                            className="col-span-1 flex shadow-sm rounded-md"
                        >
                            <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 text-gray-400
                            text-sm font-medium rounded-l-md">
                                <img src={language.icon} alt={language.name}/>
                                <h1>{language.name}</h1>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-20">
                <h2 className="text-white text-xs font-medium uppercase tracking-wide">Frameworks & Libraries</h2>
                <ul className="mt-3 grid grid-cols-3 gap-5 sm:gap-6 sm:grid-cols-6 lg:grid-cols-12">
                    {frameworks.map((framework) => (
                        <li key={framework.name}
                            className="col-span-1 flex shadow-sm rounded-md"
                        >
                            <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 text-gray-400
                            text-sm font-medium rounded-l-md">
                                <img src={framework.icon} alt={framework.name}/>
                                <h1>{framework.name}</h1>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-20">
                <ul className="mt-3 grid grid-cols-3 gap-5 sm:gap-6 sm:grid-cols-6 lg:grid-cols-12">
                    {frameworks2.map((framework) => (
                        <li key={framework.name}
                            className="col-span-1 flex shadow-sm rounded-md"
                        >
                            <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 text-gray-400
                            text-sm font-medium rounded-l-md">
                                <img src={framework.icon} alt={framework.name}/>
                                <h1>{framework.name}</h1>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-20 mb-20">
                <h2 className="text-white text-xs font-medium uppercase tracking-wide">Tools, Services, and APIs</h2>
                <ul className="mt-3 grid grid-cols-3 gap-5 sm:gap-6 sm:grid-cols-6 lg:grid-cols-12">
                    {tools.map((tool) => (
                        <li key={tool.name}
                            className="col-span-1 flex shadow-sm rounded-md"
                        >
                            <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 text-gray-400
                            text-sm font-medium rounded-l-md">
                                <img src={tool.icon} alt={tool.name}/>
                                <h1>{tool.name}</h1>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}