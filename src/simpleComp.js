import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListViewer from './listViewer';

const getUrl= (page, limit)=> `https://pokeapi.co/api/v2/pokemon?offset=${(page-1)*limit}&limit=${limit}`

const SimpleComp= ()=> {

    const [page, setPage]= useState(1);
    const [pokemons, setPokemons]= useState([]);
    const [resultsPerPage, setResultePerPage]= useState(20)

    useEffect(()=> {
        axios.get(getUrl(page, resultsPerPage)).then((res)=> {
            setPokemons(res.data.results)
        })
    }, [page, resultsPerPage]);

    return <div>
        <ListViewer list={pokemons}/>
        <button onClick={()=> page>1 && setPage(page-1)}>Prev</button>
            {page}
        <button onClick={()=> setPage(page+1)}>Next</button>
        <select value={resultsPerPage} onChange={(e)=> setResultePerPage(e.target.value)}>
            <option>20</option>
            <option>40</option>
            <option>50</option>
            <option>100</option>
        </select>
    </div>
}

export default SimpleComp;