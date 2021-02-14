import React from "react";
import PropTypes from "prop-types";

const Item = ({ tarea, id }) => {
	return (
		<div>
			<span key={id}>
				{tarea}{" "}
				<button>
					<i className="fas fa-trash"></i>
				</button>
			</span>
		</div>
	);
};
Item.propTypes = {
	tarea: PropTypes.string,
	id: PropTypes.number
};
export default Item;
