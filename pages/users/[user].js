import React from 'react';

export default function User({ user }) {
    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">
                Nom d&apos;utilisateur : {user.username}
            </h2>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8 col-xl-6">
                    <div className="card p-2">
                        <div className="card-body">
                            <h4 className="card-title">{user.name}</h4>
                            <h5 className="card-subtitle mb-2 text-muted">
                                Username : {user.username}
                            </h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Email : {user.email}
                                </li>
                                <li className="list-group-item">
                                    Site web : {user.website}
                                </li>
                                <li className="list-group-item">
                                    Téléphone : {user.phone}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    const userId = context.params.user;
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await data.json();

    return {
        props: { user }
    }
}

export async function getStaticPaths() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    const paths = users.map((user) => ({
        params: { user: user.id.toString() }
    }));

    return {
        paths,
        fallback: false
    }
}
