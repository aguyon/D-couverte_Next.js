import React from 'react'
import Link from 'next/link'

export default function Container({ children }) {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid justify-content-center">
                    <Link href="/">
                        <a className="navbar-brand mx-4" href="#">Accueil</a>
                    </Link>
                    <Link href="/blog">
                        <a className="navbar-brand mx-4" href="#">Blog</a>
                    </Link>
                    <Link href="/users">
                        <a className="navbar-brand mx-4" href="#">Utilisateurs</a>
                    </Link>
                    <Link href="/vocabulary">
                        <a className="navbar-brand mx-4" href="#">Vocabulaire</a>
                    </Link>
                    <Link href="/galery">
                        <a className="navbar-brand mx-4" href="#">Galerie</a>
                    </Link>
                    <Link href="/isr">
                        <a className="navbar-brand mx-4" href="#">ISR</a>
                    </Link>
                    <Link href="/ssr">
                        <a className="navbar-brand mx-4" href="#">SSR</a>
                    </Link>
                </div>
            </nav>

            {children}
        </>
    )
}
