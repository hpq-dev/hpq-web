import Links from "./links"
import Nav from "./nav"


const Layout = () => {
    return <div style={{
        top: 0,
        zIndex: 999,
        position: 'fixed'
    }}>
        <img
            className="md:left-20 fixed md:top-16"
            src='/logo.svg'
            alt="logo"
        />
        <Nav />
        <Links />
    </div>
}

export default Layout