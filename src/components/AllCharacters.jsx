import React, {useEffect, useState} from "react";
import { getAllCharacters } from "../functions/functions";
import '../styles/AllCharacters.css'



const AllCharacters = ()=>{

    const [characters, setCharacters] = useState(null);

    useEffect(()=>{
        getAllCharacters(setCharacters);
    },[])


    return(
        <div className="characters container">
            <div className="row mt-5" >
                {characters != null ?(
                    characters.map(character =>(
                        <a href={`/character/${character.id}`} className="character-link col-12 col-md-6 col-lg-4 mb-5">
                            <div className="character-item">
                                <div className="character-item-img">
                                    <img src={character.image} />
                                </div>
                                <a  href={`/character/${character.id}`}>
                                    <h2 className="character-title-name" >{character.name}</h2>
                                </a>
                            </div>
                        </a>
                    ))
                ):("There is no characters")}
            </div>
        </div>
    )
}


export default AllCharacters;