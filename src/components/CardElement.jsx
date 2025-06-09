import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Usamos el hook

const CardElement = ({ name, type, id }) => {
    const { store, dispatch } = useGlobalReducer(); // Aquí accedemos al estado global
    const uid = `${type}-${id}`; // Aquí accedemos a los ID y tipos
    const isFavorite = store.favorites.includes(uid); 

    const toggleFavorite = () => { // Aquí agregamos y eliminamos de favoritos
        dispatch({
            type: isFavorite ? "remove_favorite" : "add_favorite",
            payload: uid
        });
    };

    return (
        <div className="card position-relative" style={{ width: "18rem", minWidth: "18rem" }}>
            <img
                className="card-img-top"
                src="https://dummyjson.com/image/400x200?type=webp"
                alt="Card cap"
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    {/* Esta parte son los botones de la card*/}
                    <Link to={`/single/${type}/${id}`} className="btn btn-primary">
                        Learn more!
                    </Link>
                    <button
                        className="btn btn-outline-warning"
                        onClick={toggleFavorite}
                    >
                        <i className={`fa${isFavorite ? "s" : "r"} fa-heart`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardElement;
