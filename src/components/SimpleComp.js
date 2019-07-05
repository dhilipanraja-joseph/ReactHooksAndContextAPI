import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListViewer from './ListViewer';
import DetailViewer from './DetailViewer';
import RefsTest from './RefsTest';

const getUrl= (page, limit)=> `https://pokeapi.co/api/v2/pokemon?offset=${(page-1)*limit}&limit=${limit}`;
const getPokeUrl= (name)=> `https://pokeapi.co/api/v2/pokemon/${name}`;

const SimpleComp= ()=> {

    const [page, setPage]= useState(1);
    const [pokemons, setPokemons]= useState([]);
    const [itemDetail, setItemDetail]= useState({});
    const [selectedPoke, setSelectedPoke]= useState('');
    const [resultsPerPage, setResultsPerPage]= useState(20);

    useEffect(()=> {
        axios.get(getUrl(page, resultsPerPage)).then((res)=> {
            setPokemons(res.data.results);
        });
    }, [page, resultsPerPage]);

    useEffect(()=>{
        if (selectedPoke) axios.get(getPokeUrl(selectedPoke)).then((res)=> {
            let { name, order, sprites }= res.data;
            let item= { name, order, sprites };
            setItemDetail(item);
        });
    }, [selectedPoke])

    const onListClick= (name)=> setSelectedPoke(name);

    return <div style={{display: 'flex'}}>
        <div style={{flex: '1'}}> 
            <ListViewer list={pokemons} onListClick={onListClick}/>
            <button onClick={()=> page>1 && setPage(page-1)}>Prev</button>
                {page}
            <button onClick={()=> setPage(page+1)}>Next</button>
            <select value={resultsPerPage} onChange={(e)=> setResultsPerPage(e.target.value)}>
                <option>10</option>
                <option>20</option>
                <option>40</option>
                <option>50</option>
                <option>100</option>
            </select>
        </div>
        <div style={{ flex: '1' }}>
            <RefsTest />
            {selectedPoke && <div>
                <DetailViewer item={itemDetail}/>
            </div>}
        </div>
    </div>
};

export default SimpleComp;