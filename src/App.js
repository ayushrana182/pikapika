import React from "react"
import './App.css';
import {  ChakraProvider,  theme } from "@chakra-ui/react"
import ColorModeSwitcher from './components/ColorModeSwitcher'
import PokemonCards from "./components/PokemonCard";
import InputBar from "./components/Input"
import { Provider } from "./store";




function App() {
  const [pokemon, setPokemon] = React.useState({});

React.useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
    .then((resp) => resp.json())
    .then((data) => setPokemon(data));
}, []);


  return (
   <>
    <ChakraProvider theme={theme}>
    <ColorModeSwitcher/>
    <Provider>

   <h1>Poke Dex App (Gotta'a find em all!)</h1>

   <InputBar />
   {/* <div>{JSON.stringify(pokemon)}</div> */}
    <PokemonCards pokemon={pokemon}/>
    </Provider>
    </ChakraProvider>
   </>
  );
}

export default App;
