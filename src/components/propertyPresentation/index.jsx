import React from 'react';

const PropertyPresentation = (d) => {
	return (
		<div className="PropertyPresentation">
			<div/>
			<img
				className="PropertyPresentation__img"
				src="https://i.postimg.cc/CMz3cW14/the-remax-collection-n.webp"
				alt="team"
			/>
			<div className="PropertyPresentation__body">
				<h1>title</h1>
				<p>
					Inmuebles extraordinarios dirigidos y supervisados por Corredores Públicos matriculados, especializados en la
					compra y venta de propiedades premium
				</p>
				<button className="PropertyPresentation__body__button">Ver propiedades</button>
			</div>
		</div>
	);
};

export default PropertyPresentation;
