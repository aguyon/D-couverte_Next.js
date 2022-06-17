import React, { useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { formatContent } from '../../utils/utils';

const FORMAT_CATEGORIES = {
    words: 'mot',
    adjectives: 'adjectif',
    verbs: 'verbe'
};

export default function Vocabulary(props) {
    const [state, setState] = useState(false);

    const newWord = () => {
        fetch('https://next-js-discovery.vercel.app/api/vocapi')
            .then(response => response.json())
            .then(data => setState(data))
    };

    let randomWord;
    if (state) {
        const allWords = [];
        for (const list of state.englishList) {
            allWords.push(...list.data);
        }
        randomWord = allWords[Math.floor(Math.random() * allWords.length)].en;
    }

    return (
        <div className="container my-4">
            <h2 className="text-center mb-2">
                Les listes de vocabulaire
            </h2>
            <div className="row justify-content-center">
                {props.array.map(item => (
                    <div key={uuidv4()} className="col-12 col-lg-6 mt-3 m-2">
                        <div className="card">
                            <div className="card-body d-flex justify-content-between">
                                <h5 className="card-title">
                                    <a href={`/vocabulary/${item.name}`}>{formatContent(item.name)}</a>
                                </h5>
                                <Link href={`/vocabulary/${item.name}/add`}>
                                    <button className="btn btn-primary">
                                        Ajouter un {FORMAT_CATEGORIES[item.name]}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-center mt-5 mb-4">
                Testez-vous ! Essayez de trouver la traduction française
            </h2>
            <button
                onClick={newWord}
                className="btn btn-primary d-block m-auto"
            >
                Obtenir un mot au hasard
            </button>
            {randomWord && <h2 className="text-center mt-3">{formatContent(randomWord)}</h2>}
        </div>
    )
}

export async function getStaticProps() {
    const data = await import(`/data/vocabulary.json`);
    const array = data.englishList;

    // if (array.length === 0) {
    //   return {
    //     notFound: true,
    //   }
    // }

    // if (array.length === 0) {
    //   return {
    //     redirect: {
    //       destination: '/isr'
    //     },
    //   }
    // }

    return {
        props: {
            array
        }
    }
}
