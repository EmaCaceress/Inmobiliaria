import HeadHome from '../../components/head'
import CardProperty from '../../components/card';
import Footer from '../../components/footer';
import { useEffect, useState } from 'react';
import customFetch from '../../utils/CustomFetch';
import { Cards } from '../../utils/Cards';
import { Zones } from '../../utils/Zones';

const Products = () => {
	const [departament, setDepartament] = useState([])
	const [zones, setZones] = useState([])

	useEffect(() => {
		customFetch(2000, Cards)
			.then(data => setDepartament(data))
		customFetch(2000, Zones)
			.then(data => setZones(data))
	}, [])

	return (
		<>

			<section className="products">
				<main className='products__main'>
					{
						departament === []
							? <h1>cargando</h1>
							: departament.map(obj =>
								<CardProperty picture={obj.picture} zone={obj.zone} title={obj.title} price={obj.cost} description={obj.description} />
							)
					}
				</main>
				<aside className='products__aside'>
					<HeadHome zones={zones}></HeadHome>
				</aside>
			</section>
			<Footer></Footer>
		</>
	);
};

export default Products;
