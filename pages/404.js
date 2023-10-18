import React from "react";
import Image from 'next/image';
import { BackLink } from "@/components/Buttons";

const ErrorPage = ({ message }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div style={{ position: 'absolute', top: 20, left: 20 }}>
                <BackLink/>
            </div>
            <div className="error-image" style={{ marginTop: '50px' }}>
                <Image
                    src="https://img.freepik.com/free-vector/cute-penguin-cartoon-character-wearing-sunglasses_1308-117046.jpg?w=740&t=st=1697559231~exp=1697559831~hmac=59471aa2816324334e4030e40b52cf11c2f443302c37fd2535850ca5d9a7a8ae" 
                    alt="An Error has Occurred" 
                    width={120} 
                    height={150}
                />
                <p>{message}</p>
            </div>
            <div style={{ marginTop: '20px', fontSize: '18px' }}>That did not work. Please try again.</div>
            <style jsx>{`
                .error-image {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}
            </style>
        </div>
    );
};

export default ErrorPage;