import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getListElement } from "../services/api.js";
import CardElement from "../components/CardElement.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const handleGetListElement = async (type, action) => {
		const list = await getListElement(type)
		dispatch({ type: action, payload: list })
	}
	useEffect(() => {

		// obtener los elementos de people
		handleGetListElement("people", "get_people")

		// obtener los elementos de planets
		handleGetListElement("planets", "get_planets")

		// obtener los elementos de vehicles
		handleGetListElement("vehicles", "get_vehicles")

	}, [])

	return (
		<div className="container mt-5">
			{/* ------------------------ Characters ------------------------ */}
			<h2 className="text-danger">Characters</h2>
			<div className="d-flex overflow-auto gap-3 py-3">
				{store.people.map((people) => (
					<CardElement key={people.uid} name={people.name} id={people.uid} type="people" />
				))}
			</div>

			{/* ------------------------ Planets ------------------------ */}
			<h2 className="text-danger">Planets</h2>
			<div className="d-flex overflow-auto gap-3 py-3">
				{store.planets.map((planet) => (
					<CardElement key={planet.uid} name={planet.name} id={planet.uid} type="planets" />
				))}
			</div>

			{/* ------------------------ Vehicles ------------------------ */}
			<h2 className="text-danger">Vehicles</h2>
			<div className="d-flex overflow-auto gap-3 py-3">
				{store.vehicles.map((vehicle) => (
					<CardElement key={vehicle.uid} name={vehicle.name} id={vehicle.uid} type="vehicles" />
				))}
			</div>
		</div>
	);
}; 