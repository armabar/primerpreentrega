import './Navbar.css'



const Navbar = () => {

    return (

        <nav className ="navbar">

            <div className ="navbar-logo">

                <p>MI LOGO</p>

            </div>

            <div className ="navbar-links">

                <ul>
                    <li>
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">HAMBURGUESAS</a>
                    </li>
                    <li>
                        <a href="#">BEBIDAS</a>
                    </li>
                    <li>
                        <a href="#">SUCURSALES</a>
                    </li>
                    <li>
                        <a href="#">MERCH</a>
                    </li>
                </ul>

            </div>


        </nav>

    )

}

export default Navbar;