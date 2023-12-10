import Links from "./links"
import Nav from "./nav"

const Layout = () => {
    return <>
        <img
            className="md:left-20 fixed md:top-16 mix-blend-difference z-10"
            src='/logo.svg'
            alt="logo"
        />
        <Nav />
        <Links />
    </>
}

export default Layout