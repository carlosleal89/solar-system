import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends Component {
  render() {
    const planetsList = Planets;
    return (
      <div data-testid="solar-system" className="solar-system-section">
        <Title headline="Planetas" />
        <div className="planets-container">
          {
            planetsList
              .map(({ name, image }) => (
                <PlanetCard key={ name } planetName={ name } planetImage={ image } />
              ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
