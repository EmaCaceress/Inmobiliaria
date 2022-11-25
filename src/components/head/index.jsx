import React from 'react';

const HeadHome = () => {
	return (
		<section className="sectionHome">
			<div className="sectionHome__headerHome">
				<p className="sectionHome__headerHome__title">Encuentra tu Hogar</p>
				<form className="sectionHome__headerHome__form">
					<p className="sectionHome__headerHome__form__title">Inserte su busqueda</p>
					<select name="operation" className="sectionHome__headerHome__form__input">
						<option disabled selected>
							Operacion
						</option>
						<option value="rental">Alquiler</option>
						<option value="sale">Venta</option>
					</select>
					<br />
					<select name="province" className="sectionHome__headerHome__form__input">
						<option disabled selected>
							Provincia
						</option>
						<option value="rental">Buenos Aires</option>
						<option value="sale">Jujuy</option>
					</select>
					<br />
					<select name="city" className="sectionHome__headerHome__form__input">
						<option disabled selected>
							Ciudad
						</option>
						<option value="rental">Berazategui</option>
						<option value="sale">Quilmes</option>
					</select>
					<br />
					<button className="sectionHome__headerHome__form__button">Buscar</button>
				</form>
			</div>
		</section>
	);
};
export default HeadHome;
