import React from 'react';

export default function ServerSideRenderingBtcPrice(props) {
    return (
        <div className="container my-4">
            <h2 className="text-center mb-2">
                Server Side Rendering
            </h2>
            <h3 className="text-center mt-4">
                Prix du Bitcoin : {props.results.bpi.EUR.rate} €
            </h3>
        </div>
    )
}

export async function getServerSideProps(context) {
    const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const results = await data.json();

    return {
        props: {
            results
        }
    }
}
