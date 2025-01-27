import Link from 'next/link';

const MealsPage = () => {
	return (
		<main>
			<h1>Meals</h1>
			<ul>
				<li>
					<Link href="meals/pizza">Pizza</Link>
				</li>
				<li>
					<Link href="meals/burger">Burger</Link>
				</li>
			</ul>
		</main>
	);
};

export default MealsPage;
