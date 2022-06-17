import React from 'react';
import Image from 'next/image';
import img1 from '../public/assets/img1.jpg';
import img2 from '../public/assets/img2.jpg';
import img3 from '../public/assets/img3.jpg';

export default function galery() {
    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">
                Galerie d&apos;images optimisées
            </h2>
            <Image
                layout="responsive"
                placeholder="blur"
                src={img1}
                width="3845"
                height="4646"
                alt=""
            />
            <Image
                layout="responsive"
                placeholder="blur"
                src={img2}
                width="4000"
                height="5333"
                alt=""
            />
            <Image
                layout="responsive"
                placeholder="blur"
                src={img3}
                width="2772"
                height="3465"
                alt=""
            />

            {/* <img src="/assets/img1.jpg" alt="" />
            <img src="/assets/img2.jpg" alt="" />
            <img src="/assets/img3.jpg" alt="" /> */}
        </div>
    )
}

/*
    2.8 MB -> 1 MB
    3.2 MB --> 1 MB
    1.3 MB --> 469 Ko
*/

