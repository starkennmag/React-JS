const initState = {
    posts : [
        {id: '1', title:'Encontrar Squirtle, Eeve, Bulbasour ou Charmander', body:'Em Pokémon Let\'s Go Pikachu e Pokémon Lets Go Eevee, dependendo da versão do jogo adquirida, os jogadores começam a aventura recebendo um Pikachu ou um Eevee. Mas, assim como em Pokémon Yellow, é possível encontrar no jogo Bulbasaur (ou Bulbassauro, como chamavam o monstrinho na versão brasileira do anime de Pokémon), Charmander e Squirtle, os iniciais originais da primeira geração de Pokémon.'},
        {id: '2', title:'Get Bulbasour', body: 'Pokémon Lets Go starter locations explained. Believe it or not, all three of the original starter Pokémon, Bulbasaur, Charmander and Squirtle, are available to be caught in the wild in Pokémon Lets Go - although theres a slight catch. All three are Catch Combo Pokémon - super rare Pokémon that have very low spawn rates in certain areas, meaning theyll probably only appear if you build up a Catch Combo to increase your chances.'},
        {id: '3', title:'Charizard e Psyduck', body: 'Pelo Twitter, o editor da IGN, Joshua Yehl, mostrou a primeira imagem dos moldes dos Pokémons. Psyduck é o pato que sempre está com dor de cabeça, e Charizard o grande dragão, um dos Pokémons de fogo mais querido pelos fãs.'}
    ]
}

const rootReducer = (state = initState,action) => {
    //console.log(action);
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer