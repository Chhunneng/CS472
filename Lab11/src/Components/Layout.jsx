import { Link, Outlet } from "react-router";

export default function Layout() {
    return (
        <div className="layout-container">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Book List
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-book">
                            Add Book
                        </Link>
                    </li>
                </ul>
            </nav>
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}
