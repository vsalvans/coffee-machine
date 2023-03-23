import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Coffe Machine</Link>
                    </li>
                    <li>
                        <Link to="/coffee">Coffe Info</Link>
                    </li>
                    <li>
                        <Link to="/tea">Tea Info</Link>
                    </li>
                    <li>
                        <Link to="/chocolate">Chocolate Info</Link>
                    </li>
                </ul>
            </nav>

            <hr />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
