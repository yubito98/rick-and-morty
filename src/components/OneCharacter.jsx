import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import { getOneCharacter } from "../functions/functions";
import '../styles/OneCharacter.css'


const OneCharacter = ()=>{

    const params = useParams()

    const [character, setCharacter] = useState(null);

    useEffect(()=>{
        getOneCharacter(params.id, setCharacter);
    },[])


    return(
        <div className="container">
            {character != null ? (
                <div className="-one-character-item row mt-5">
                    <div className="col-12 col-md-4 mb-5">
                        <div className="character-img">
                            <img src={character.image} />
                        </div>
                    </div>
                    <div className="character-info col-12 offset-md-1 col-md-6">
                        <h2>{character.name}</h2>
                        <ul>
                            <li>{character.status}</li>
                            <li>{character.species}</li>
                            <li>{character.gender}</li>
                            <li>Located in planenet  {character.origin.name}</li>
                        </ul>
                    </div>
                    
                </div>
            ):("There is no character")}
        </div>
    )
}


export default OneCharacter;