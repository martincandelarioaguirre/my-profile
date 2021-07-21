/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './AboutMe.css';
import ContainerSection from '../ContainerSection/ContainerSection';

const AboutMe = (): React.ReactElement => {
    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <ContainerSection>
            <div className="wrapper">
                <div className="col-4">
                    <img src={process.env.PUBLIC_URL + '/img/profile_pic.jpeg'} />
                </div>
                <div className="col-6">
                    ...
                </div>
            </div>
            {/* <div className="description">
                <h3>{new Date().toLocaleString()}</h3>
                <h2>Martin Candelario Aguirre</h2>
                <p>
                    Enthusiastic software engineer with 7 years of experience in the IT industry eager to learn, experienced
                    with specialties which include financial, accountable, logistics, marketing and real estate, team player
                    working with international and internal teams, a challenging person willing to take the ownership to
                    accomplish deadline goals to ensure operational products efficiency.
                </p>
            </div> */}
        </ContainerSection>
    );
}

export default AboutMe;