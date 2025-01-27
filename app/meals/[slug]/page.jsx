const MealPage = ({ params }) => {
	const { slug } = params;

	return (
		<div>
			<h1>Meal: {slug}</h1>
			{/* Add your component logic here */}
		</div>
	);
};

export default MealPage;
