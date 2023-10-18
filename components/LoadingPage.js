import React from "react";
import Image from 'next/image'

const LoadingPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div className="loading-image" style={{ marginTop: '50px' }}>
                <Image
                    src="http://media.tenor.com/Dgcn-Vcf4o4AAAAi/dancing-duck-waddle.gif"
                    alt="Page is Loading"
                    width={120} 
                    height={150} 
                />
                <p>Loading...</p>
            </div>
            <style jsx>{`
                .loading-image {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}
            </style>
        </div>
    );
};

export default LoadingPage;