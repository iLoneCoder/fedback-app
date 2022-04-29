function Header({ text }) {
    return <h1>{text}</h1>
}

Header.defaultProps = {
    text: "Wobaluba dub dub"
}

export default Header;