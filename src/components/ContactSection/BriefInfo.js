import React from 'react';
import SocialMedia from './../HeroSection/SocialMedia';

function BriefInfo() {
    return (
        <div className="brief-info">
            <img
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="Joeylene Rivera's Logo"
                className="logo"
            />
            <h3 className="name">Joeylene Rivera</h3>
            <p className="title text-muted">Full Stack Developer</p>
            <p>
                I'm 22 years old and currently living in Manila, Philippines. I’m a Full Stack (JS) Developer that has NextJS, TypeScript, NodeJS and Rails under my toolbelt.
            </p>
            <SocialMedia />
        </div>
    );
}

export default BriefInfo;
