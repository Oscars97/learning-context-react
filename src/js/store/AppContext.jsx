import React, { useState, createContext } from "react";

//pasos: lo primero es crear una varaible que contenga las funciones del context y lo inicializamos con null

const Context = createContext(null);

const AppContext = PassedComponent => {
	//nuestro componente recibe como parametros el componente que va a tener
	// acceso a nuestro context

	let [tareas, setTareas] = useState({
		store: {
			//este va a ser el objeto que contenga las tareas
			todos: ["tarea1", "tarea2", "tarea3"]
		},
		actions: {
			//este va a ser el objeto que va a contener las acciones que podemos realizar con esa tareas
			addTarea: tarea => {
				console.log(tarea);
			}
		}
	});
	return (
		// El el value indicamos las variables que vamos a pasar
		<Context.Provider value={(tareas, setTareas)}>
			{PassedComponent}
			{/* Aqui metemos el componente que va a tener acceso a nuestras variables y funciones */}
		</Context.Provider>
	);
};

export { Context, AppContext };
