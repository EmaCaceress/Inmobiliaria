import HeadHome from '../../components/head';
import Features from '../../components/features';
import AboutUs from '../../components/aboutUs';
import Footer from '../../components/footer';
import PropertyPresentation from '../../components/propertyPresentation';
const Home = () => {
	return (
		<>
			<HeadHome />
			<main>
				<section id="body">
					<Features />
					<PropertyPresentation />
				</section>
				<section>
					<AboutUs />
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
