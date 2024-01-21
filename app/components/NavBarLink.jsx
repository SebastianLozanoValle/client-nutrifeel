export const NavBarLink = (props) => {
    return (
        <a href={`/${props.children == 'Inicio' ? '' : props.children}`} className="mx-8 my-auto text-[#e97613]">{props.children}</a>
    )
}