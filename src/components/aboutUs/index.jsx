import React from 'react';

const AboutUs = (d) => {
	return (
		<div className="aboutUs">
			<div className="aboutUs__container">
				<div className="aboutUs__container__title">Sobre nosotros:</div>
				<div className="aboutUs__container__description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae a deserunt aspernatur, cum ullam veritatis
					est eos ut? Suscipit incidunt ratione tempora officiis ipsam mollitia cum soluta hic quidem? Aspernatur? Lorem
					ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quos voluptatibus, dolorem aliquam reprehenderit
					explicabo dicta vero quas necessitatibus odit. Id ipsa cumque est, labore ea voluptatibus distinctio
					cupiditate quaerat!
				</div>
			</div>
			<img
				className="aboutUs__img"
				src="https://cdn.bizneo.com/blog/wp-content/uploads/2019/10/caracteristicas-del-trabajo-en-equipo.webp"
				alt="team"
			/>
		</div>
	);
};

export default AboutUs;
