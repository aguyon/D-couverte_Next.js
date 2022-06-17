import React from 'react';

export default function Article(props) {

    if (!props.article) {
        return <h1>Chargement</h1>
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center">{props.article.title}</h2>
            <p className="text-center mt-4">{props.article.body}</p>
        </div>
    )
}

export async function getStaticProps(context) {
    const articleId = context.params.article;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`);
    const article = await data.json();

    return {
        props: { article }
    }
}

export async function getStaticPaths() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await data.json();

    const paths = articles.map(article => ({
        params: { article: article.id.toString() }
    }))

    return {
        paths,
        fallback: true,
    }
}
