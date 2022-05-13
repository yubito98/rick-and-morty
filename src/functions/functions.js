import axios from "axios";

const getAllCharacters = async (state)=>{
    const peticion = await axios.get('https://rickandmortyapi.com/api/character');
    state(peticion.data.results);
}


const getOneCharacter = async (id,state)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    state(peticion.data);
}

export {getAllCharacters, getOneCharacter};