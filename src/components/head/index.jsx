import React, { useState } from 'react';

const HeadAside = ({ zones }) => {
	const [city, setCities] = useState([])

	const onProvince = (event) => {
		const result = zones.find(obj => event.target.value === obj.province)
		console.log("hola", result)

		setCities(result.cities)
	}
	return (
		<>
			<p className="products__aside__title">Alquileres</p>
			<p className="products__aside__result">32.000 resultados</p>
			<form className="products__aside__form">
				<p className="products__aside__form__title">Inserte su busqueda</p>
				<select name="operation" className="products__aside__form__select">
					<option className="products__aside__form__select__options" disabled selected>
						Operacion
					</option>
					<option className="products__aside__form__select__options" value="rental">Alquiler</option>
					<option className="products__aside__form__select__options" value="sale">Venta</option>
				</select>
				<br />
				<select onChange={onProvince} name="province" className="products__aside__form__select">
					<option disabled selected>
						Provincia
					</option>
					{
						zones.map(obj =>
							<option className="products__aside__form__select__options" value={obj.province} >{obj.province}</option>
						)
					}
				</select>
				<br />
				<select name="city" className="products__aside__form__select">
					<option className="products__aside__form__select__options" disabled selected>
						Ciudad
					</option>
					{
						city !== []
						&& city.map(obj =>
							<option className="products__aside__form__select__options" value={obj}>{obj}</option>
						)

					}
				</select>
				<br />
				<div className="products__aside__form__price">
					<input className="products__aside__form__price__input" placeholder='minimo'></input><div>-</div><input className="products__aside__form__price__input" placeholder='maximo'></input>
				</div>
				<button className="products__aside__form__button">Buscar</button>
			</form>
		</>
	);
};
export default HeadAside;
