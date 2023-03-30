import React from 'react';
import Title from './Title';
import missionData from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    const missionsList = missionData;
    return (
      <div data-testid="missions" className="missions-section">
        <Title headline="Missões" />
        <div className="missions-card-section">
          {missionsList.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
