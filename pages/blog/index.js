import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Blog(props) {
    return (
        <div className="container my-4">
            <h2 className="text-center">Bienvenue sur le blog</h2>
            <p className="text-center">Voici les articles</p>
            <div className="row">
                {props.articles.slice(0, 20).map(article => (
                    <div key={uuidv4()} className="col-sm-6">
                        <div className="card" style={{ height: '150px', margin: '15px' }}>
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text text-truncate" style={{ maxWidth: '400px' }}>{article.body}</p>
                                <Link href={`/blog/${article.id.toString()}`}>
                                    <a className="card-link">Lire cet article</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await data.json();

    return {
        props: { articles },
    }
}
