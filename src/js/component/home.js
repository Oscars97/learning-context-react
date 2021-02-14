import React, { useContext } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/AppContext.jsx";
import Item from "./Item.jsx";
//create your first component
export function Home() {
	let { tareas, setTareas } = useContext(Context);
	let listaTareas = tareas.store.todos;

	const addTarea = e => {
		if (e.key === "Enter") {
			tareas.actions.addTarea(e.target.value);
		}
	};
	return (
		<div className="text-center mt-5">
			<input onKeyPress={addTarea} type="text" />
			<ul>
				{listaTareas.map((tarea, i) => {
					return <Item tarea={tarea} key={i} />;
				})}
			</ul>
		</div>
	);
}
