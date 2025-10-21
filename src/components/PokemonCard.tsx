// function PokemonCard() {
// 	return (
// 		<figure>
// 			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur"/>
// 			<figcaption>Bulbasaur</figcaption>
// 		</figure>
// 	);
// }

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

function PokemonCard() {
	const pokemon = pokemonList[0];

	return (
		<>
			{pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt={pokemon.name} />}
			<figcaption>{pokemon.name}</figcaption>

		</>
	);
}
export default PokemonCard;
