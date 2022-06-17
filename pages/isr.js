import React from 'react';

export default function IncrementalStaticGeneration(props) {
    return (
        <div className="container my-4">
            <h2 className="text-center mb-2">
                Incremental Static Generation
            </h2>
            <h4 className="text-center mt-4">
                Citation aléatoire
            </h4>
            <p className="text-center">(Toutes les 10 secondes)</p>
            <p className="text-center mb-2">
                {props.data.quotes[0].text}
            </p>
        </div>
    )
}

export async function getStaticProps() {
    const quote = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    const data = await quote.json();

    return {
        props: {
            data,
        },
        revalidate: 10,
    }
}
