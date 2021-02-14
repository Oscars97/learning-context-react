//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { AppContext } from "./store/AppContext.jsx"; //Importamos el componte para meterle los componentes hijos

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

const ContextWrapper = () => {
	{
		/*Creamos este componente para meter los
                                componente hijos dentro del componente App Context */
	}
	return (
		<AppContext>
			<Home />{" "}
			{/*Aqui metemos este componente he incluimos los componente hijos del home*/}
		</AppContext>
	);
};
//render your react application
ReactDOM.render(<ContextWrapper />, document.querySelector("#app"));
