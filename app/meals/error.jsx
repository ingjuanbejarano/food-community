"use client"

function Error({ error }) {
	return (
		<main className="error">
			<h1>Error</h1>
			<p>{error.message}</p>
		</main>
	);
}

export default Error;