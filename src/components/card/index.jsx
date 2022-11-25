import React from 'react';

const CardProperty = () => {
	return (
		<article className="Cardproperty">
			<img
				src="http://zonainmobiliaria.com.ar/wp-content/uploads/2022/10/IMG-20221004-WA0044-385x258.jpg"
				className="Cardproperty__img"
			/>

			<div className="Cardproperty__main">
				<div className="Cardproperty__main__header">
					<p className="Cardproperty__main__header__title">ALQUILA DEPTO 4 AMBIENTES EN B° JUAN EL BUENO</p>
					<div className="Cardproperty__main__header__price">$45.000</div>
				</div>
				<div className="Cardproperty__main__body">
					<p className="Cardproperty__main__body__description">DEPARTAMENTO DE 3 HABITACIONES, EN PLANTA BAJA.</p>
				</div>
			</div>
			<button className="Cardproperty__button">Ver propiedad</button>
		</article>
	);
};
export default CardProperty;
