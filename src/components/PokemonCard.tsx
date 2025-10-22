function PokemonCard({ pokemon }) {
	return (
		<>
			{pokemon.imgSrc === undefined ? (
				<p>???</p>
			) : (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			)}
			<figcaption>{pokemon.name}</figcaption>
		</>
	);
}

export default PokemonCard;
