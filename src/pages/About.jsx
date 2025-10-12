import React from 'react';
import Collapse from '../components/Collapse';
import logo from '../assets/about_banner.png';
import './About.scss';
import aboutData from '../../about.json';

const About = () => {
  return (
    <div className="about-page">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backgroundBlendMode: 'darken'
        }}
      ></div>

      <div className="about-page_collapses">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;
