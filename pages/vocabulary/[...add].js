import React, { useRef } from 'react';
import { useRouter } from 'next/router';

export default function AddVocabulary() {
    const enWord = useRef();
    const frWord = useRef();

    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newWord = {
            category: router.query.add[0],
            en: enWord.current.value,
            fr: frWord.current.value,
        };

        fetch('https://next-js-discovery.vercel.app/api/vocapi', {
            method: 'POST',
            body: JSON.stringify(newWord),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))

        enWord.current.value = "";
        frWord.current.value = "";
    }

    return (
        <div className="container my-4">
            <h2 className="text-center">Ajouter du vocabulaire</h2>
            <form className="mt-3" onSubmit={handleSubmit}>
                <label htmlFor="addEn" className="form-label">
                    Anglais
                </label>
                <input ref={enWord} type="text" className="form-control" id="addEN" />
                <label htmlFor="addFr" className="form-label mt-3">
                    Français
                </label>
                <input ref={frWord} type="text" className="form-control" id="addFR" />
                <button className="btn btn-primary mt-4">Ajouter</button>
            </form>
        </div>
    )
}
