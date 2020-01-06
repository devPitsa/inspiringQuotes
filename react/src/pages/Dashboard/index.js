import React, { useState, useEffect } from 'react';
import { graphqlOperation } from 'aws-amplify'
import api from '../../services/api';
import './styles.css'

const ListQuote = `
    query {
        quotes {
            quote
            author
        }
    }
`

export default function Dashboard() {
    
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function loadApi() {
            const response = await api.post("/", graphqlOperation(ListQuote));
            let aleatorio = Math.floor(Math.random()*response.data.data.quotes.length);

            console.log(response.data.data.quotes[aleatorio]);
            setQuotes(response.data.data.quotes[aleatorio]);
        }
        loadApi();
    }, []);


    async function reloadApi() {
        const response = await api.post("/", graphqlOperation(ListQuote));
        let aleatorio = Math.floor(Math.random()*response.data.data.quotes.length);
        console.log(aleatorio)
        setQuotes(response.data.data.quotes[aleatorio]);
    }

    return (
        <>
        <div className="content">
            <p>"{quotes.quote}"</p>
            <h2>-{quotes.author}</h2>
        </div>
        <button onClick={() => reloadApi()} className="btn">I feel lucky</button>

        </>
    )
}