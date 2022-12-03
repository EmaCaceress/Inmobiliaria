import React from 'react';
import { FaToilet, FaTable, FaUtensils, FaBed } from 'react-icons/fa';
const CardProperty = ({ picture, zone, title, price, description }) => {
	return (
		<article className="Cardproperty">
			<div className="Cardproperty__container">
				<img
					src={picture}
					className="Cardproperty__container__img"
					alt='imagen'
				/>
			</div>


			<div className="Cardproperty__main">
				<div className="Cardproperty__main__header">
					<p className="Cardproperty__main__header__zone">{zone}</p>
					<p className="Cardproperty__main__header__title">{title}</p>
					<div className="Cardproperty__main__header__price">{price}</div>
					<p className="Cardproperty__main__header__description">{description}</p>
				</div>
				<div className="Cardproperty__main__body">
					<div className='Cardproperty__main__body__container'>
						<FaToilet className='Cardproperty__main__body__container__icon'></FaToilet>
						<div className='Cardproperty__main__body__container__num' >1</div>
					</div>
					<div className='Cardproperty__main__body__container'>
						<FaUtensils className='Cardproperty__main__body__container__icon'></FaUtensils>
						<div className='Cardproperty__main__body__container__num'>1</div>
					</div >
					<div className='Cardproperty__main__body__container'>
						<FaTable className='Cardproperty__main__body__container__icon'></FaTable>
						<div className='Cardproperty__main__body__container__num'>1</div>
					</div>
					<div className='Cardproperty__main__body__container'>
						<FaBed className='Cardproperty__main__body__container__icon'></FaBed>
						<div className='Cardproperty__main__body__container__num'>3</div>
					</div>
				</div>
			</div>

		</article>
	);
};
export default CardProperty;
