import React from 'react';

const Footer = () => {
	return (
		<section className="footer">
			<div className="footer__item">
				<p className="footer__item__title">Inmobiliaria</p>
				<a className="footer__item__link" href="/">
					Conocenos
				</a>
				<a className="footer__item__link" href="/">
					Preguntas Frecuentes
				</a>
			</div>
			<div className="footer__item">
				<p className="footer__item__title">Alquila</p>
				<a className="footer__item__link" href="/">
					Alquila tu inmueble
				</a>
				<a className="footer__item__link" href="/">
					Buscar inmuebles en alquiler
				</a>
			</div>
			<div className="footer__item">
				<p className="footer__item__title">Vende</p>
				<a className="footer__item__link" href="/">
					Vende tu inmueble
				</a>
			</div>
			{/* <div className='footer__redes'>
        <p>Encuentranos</p>
      </div> */}
		</section>
	);
};

export default Footer;
