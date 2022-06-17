import React from 'react';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { formatContent } from '../../utils/utils';

export default function VocabularyDetails(props) {

    const router = useRouter();

    if (!props.currentList) {
        return <h1>Chargement</h1>
    }

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">
                {formatContent(router.query.slug)}
            </h2>
            <table className={styles.tableau}>
                <tbody>{props.currentList.map(el => (
                    <tr key={uuidv4()}>
                        <td>{formatContent(el.en)}</td>
                        <td>{formatContent(el.fr)}</td>
                    </tr>
                ))}</tbody>
            </table>
        </div>
    )
}

export async function getStaticProps(context) {
    const list = context.params.slug;
    const data = await import('/data/vocabulary.json');
    const currentList = data.englishList.find(el => el.name === list);

    if (!currentList) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            currentList: currentList.data,
        }
    }
}

export async function getStaticPaths() {
    const data = await import('/data/vocabulary.json');

    // const paths = data.englishList.map(el => ({
    //     params: { slug: el.name }
    // }));

    return {
        // paths,
        // fallback: false,

        paths: [
            { params: { slug: "words" } },
            { params: { slug: "adjectives" } },
        ],
        fallback: true,

        // fallback: "blocking",
    }
}
