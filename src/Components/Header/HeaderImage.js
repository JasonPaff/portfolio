export default function HeaderImage(props) {
    return (
        <img className="h-32 w-full object-cover lg:h-48" src={props.imageSrc} alt="header background"/>
    );
}