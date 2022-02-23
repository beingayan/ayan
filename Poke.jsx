import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Poke = () => {

    let [val, setVal] = useState('');
    let [pokeName, setPokeName] = useState('');
    let [moves, setMoves] = useState('');
    let [newMove, setNewMove] = useState('');

    function getValues(event) {
        setVal(event.target.value);

    }
    function getMoves(event) {
        setNewMove(event.target.value);

    }
    useEffect(() => {

        async function getData() {

            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${val}`);
            setPokeName(pokemon.data.name);
            setMoves(pokemon.data.moves[`${newMove}`].move.name);
            console.log(pokemon.data)


        }
        getData();

    })
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = capitalizeFirstLetter("ayan");
    return (

        <>
            <select onChange={getValues}>
                <option value='1'  >1</option>
                <option value='25'  >25</option>
                <option value='3'  >3</option>
                <option value='6'  >6</option>
            </select>

            <h1>Name:<span style={{ color: '#43dfd1' }}>{pokeName}</span></h1>
            <h1>Moves:<span style={{ color: 'red' }}>{moves} </span> </h1> <select onChange={getMoves}>
                <option value='1'  >1</option>
                <option value='2'  >2</option>
                <option value='3'  >3</option>
                <option value='4'  >4</option>
            </select>

        </>
    )
};

export default Poke