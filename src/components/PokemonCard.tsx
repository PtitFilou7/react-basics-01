interface Info {
	pokemon: {
		name: string;
		imgSrc?: string;
	};
}

function PokemonCard({ pokemon }: Info) {
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
