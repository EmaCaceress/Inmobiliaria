import HeadHome from '../../components/head'
import CardProperty from '../../components/card';
import Footer from '../../components/footer';
import { useEffect, useState } from 'react';
import customFetch from '../../utils/CustomFetch';

const Products = () => {
	const [departament, setDepartament] = useState([])

	useEffect(() => {
		customFetch(2000)
			.then(data => setDepartament(data))
	}, [])
	return (
		<>

			<section id="products">
				<main className='products__main'>
					{
						departament === []
							? <h1>cargando</h1>
							: departament.map(obj =>
								<CardProperty picture={obj.picture} zone={obj.zone} title={obj.title} price={obj.price} description={obj.description} />
							)
					}
				</main>
				<aside className='products__aside'>
					<HeadHome></HeadHome>
				</aside>
			</section>
			<Footer></Footer>
		</>
	);
};

export default Products;
