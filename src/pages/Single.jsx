// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";
import { getElement } from "../services/api";

// Vista de detalle de un personaje, planeta o vehículo
export const Single = () => {
  const { idElement, typeElement } = useParams(); // Ej: idElement = 1, typeElement = people
  const [element, setElement] = useState(null); // Guardará el objeto con los datos

  // Llama a la API y guarda la respuesta
  const handleGetElement = async () => {
    const response = await getElement(typeElement, idElement);
    if (response?.result) {
      setElement(response.result); // Tiene { uid, properties: {...}, description }
    }
  };

  useEffect(() => {
    handleGetElement();
  }, [idElement, typeElement]);

  if (!element) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  const { properties } = element;
  const image = `...${typeElement}/${idElement}.jpg`;

  return (
    <div className="container mt-5">
      <div className="card mb-4 mx-auto" style={{ maxWidth: "1500px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={image}
              className="img-fluid rounded-start"
              alt={properties.name || "Star Wars"}
              onError={(e) => (e.target.src = "...")}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title">{properties.name}</h3>
              <p className="card-text text-muted">
                {element.description || "No description available"}
              </p>
              <ul className="list-group list-group-flush text-start">
                {Object.entries(properties).map(([key, value]) => (
                  <li key={key} className="list-group-item">
                    <strong>{key}: </strong> {value}
                  </li>
                ))}
              </ul>
              <Link to="/" className="btn btn-outline-primary mt-3">Back Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Utilice PropTypes para validar las propiedades pasadas a este componente, garantizando un comportamiento confiable.
Single.propTypes = {
  match: PropTypes.object // Aunque la propiedad 'match' se define aquí, no se utiliza en el
};
// Considere eliminarlo o usarlo según sea necesario.
