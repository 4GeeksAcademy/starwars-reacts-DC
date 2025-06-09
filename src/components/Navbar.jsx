import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" alt="" 
					style={{width: "100px"}} /></span>
				</Link>
				<div className="ml-auto">
					<Link to="#">
						<button className="btn btn-primary">Favorites {store.favorites.length}</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};