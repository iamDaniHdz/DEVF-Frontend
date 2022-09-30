import { useState, useEffect } from 'react'
import { Pokemon } from '../Pokemon/Pokemon';
import axios from 'axios'

const List = () => {
  
  const [pokemones, setPokemones] = useState([]);

  useEffect(()=>{
    axios.get(`https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json`)
      .then(function (response) {
        // handle success
        const pokeData = response.data;
        // pokemones = pokeData
        setPokemones(pokeData);
        // console.log(pokemones)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },[]);

  return (
    <ul className="App">
      {
        pokemones.map(pokemon => {
          return <Pokemon id={pokemon.id} src={pokemon.ThumbnailImage} name={pokemon.name}></Pokemon>
          // return <li key={pokemon.id}><img src={pokemon.ThumbnailImage}/>{pokemon.name}</li>
        })
      }
    </ul>
  )
}

export { List }