/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Adrien from '../assets/adrien.png';
import Woman from '../assets/woman.png';
import Gaspard from '../assets/gaspard.png';
import Clement from '../assets/clement.png';
import Pierre from '../assets/pierre.png';
import { Link } from 'react-router-dom';
import '../styles/Avatars.css';

function ContactComponent() {
  return (
    <>
      <h2>Notre équipe</h2>
      <div className="Avatars">
        <div className="Jen avatar">
          <Link to="//github.com/JenniferDELEO" target="_blank">
            {' '}
            <img src={Woman} alt="Jen" />{' '}
          </Link>{' '}
          Jennifer De Léo
        </div>
        <div className="Adrien avatar">
          <Link to="//github.com/01adrien" target="_blank">
            {' '}
            <img src={Adrien} alt="Adrien" />
          </Link>{' '}
          Adrien Gaucher
        </div>
        <div className="Gaspard avatar">
          <Link to="//github.com/GaspardMzt" target="_blank">
            {' '}
            <img src={Gaspard} alt="Gaspard" />{' '}
          </Link>
          Gaspard Mazataud
        </div>
        <div className="Clement avatar">
          <Link to="//github.com/ClemMoFr" target="_blank">
            <img src={Clement} alt="Clement" />
          </Link>{' '}
          Clément Moreno
        </div>
        <div className="Pierre avatar">
          <Link to="//github.com/PiDartevelle" target="blank">
            <img src={Pierre} alt="Pierre" />
          </Link>{' '}
          Pierre Dartevelle
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
