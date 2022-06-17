import Link from 'next/link';

export default function Home() {
    return (
        <div className="container fluid my-4">
            <h2>Bienvenue sur Code.io</h2>
            <p>Le blog communautaire des afficionados de développement web</p>

            <div className="row">
                <div className="col-12 col-sm-6" style={{ minHeight: "200px" }}>
                    <div className="card w-100 h-100">
                        <div className="card-body">
                            <h5 className="card-title">Lisez les articles</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Maximisez votre culture web</h6>
                            <p className="card-text">Chaque auteur tente de vous apporter le plus de valeur possible par article.</p>
                            <Link href="/blog">
                                <a className="card-link">Visiter le blog</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6" style={{ minHeight: "200px" }}>
                    <div className="card w-100 h-100">
                        <div className="card-body">
                            <h5 className="card-title">Faites un tour vers la liste des membres</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Faites-vous des amis</h6>
                            <p className="card-text">Ajoutez, invitez et discutez avec les différents membres</p>
                            <Link href="/users">
                                <a className="card-link">Découvrir la liste des membres</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
