import React from 'react';
import Lottie from 'react-lottie';
const animationBook = require('../../assets/lottie/loaderinfinit.json')

export default function LoaderCustom({ label = "", height = 180, width = 180 }) {
    const bookOptions = {
        loop: true,
        autoplay: true,
        animationData: animationBook,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <Lottie
                options={bookOptions}
                height={height}
                width={width} />
            <h4 style={{ color: "#635d5d", textAlign: 'center' }}>{label}</h4>
        </div>
    );
}
