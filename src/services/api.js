
// Trae la lista de personajes
export const getCharacters = async () => {
    try {
        const response = await fetch("https://www.swapi.tech/api/people");
        const data = await response.json();  // Convierte la respuesta a JSON

        return data.results; // Array de personajes { name, uid, url }
    } catch (error) {
        console.error("Error al obtener personajes:", error);
        return [];// Devuelve arreglo vacío si falla
    }
};

// Trae la lista de planetas
export const getPlanets = async () => {
    try {
        const response = await fetch("https://www.swapi.tech/api/planets");
        const data = await response.json();  // Convierte la respuesta a JSON

        return data.results; // Array de planetas { name, uid, url }
    } catch (error) {
        console.error("Error al obtener planetas:", error);
        return [];
    }
};

// Trae la lista de vehículos
export const getVehicles = async () => {
    try {
        const response = await fetch("https://www.swapi.tech/api/vehicles");
        const data = await response.json();  // Convierte la respuesta a JSON

        return data.results; // Array de vehículos { name, uid, url }
    } catch (error) {
        console.error("Error al obtener vehículos:", error);
        return [];
    }
};

// Trae el detalle de un elemento específico (personaje, planeta o vehículo)
export const getElement = async (type, id) => {
    try {
        const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
        const data = await response.json();  // Convierte la respuesta a JSON

        if (data && data.result) {
            return data; // Devuelve result: { uid, properties: {}, description: "" } 
        } else {
            throw new Error("Respuesta inesperada");
        }
    } catch (error) {
        console.error(`Error al obtener ${type} con ID ${id}:`, error);
        return null;
    }
};




