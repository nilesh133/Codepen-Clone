import React, { useEffect, useState } from 'react';

const Quotes = () => {

    const [quotes, setQuotes] = useState();
    useEffect(() => {
        function getQuote() {
            fetch("https://api.quotable.io/random").then((res) => res.json()).then((res) => {
                setQuotes(res.content);
            })
        }
        getQuote();
    }, [])
    console.log(quotes);
    return (
        <>
            <div className='quotes'>
                <h4>{quotes}</h4>
            </div>

        </>
    );
};

export default Quotes;
