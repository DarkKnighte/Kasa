import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import logements from '../../data.json';
import Star from '../components/Star';
import './Lodging.scss';

const Lodging = () => {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);
  const [first,last] = logement.host.name.split(" ");

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="lodging-page">
      {logement.pictures && <Carousel pictures={logement.pictures} />}
      <div className='lodging-page_container'>
          <div className='lodging-page_container_information'>
              <div className='lodging-page_container_information_lodging'>
                  <h1 className='lodging-page_container_information_lodging_title'>{logement.title}</h1>
                  <h2 className='lodging-page_container_information_lodging_location'>{logement.location}</h2>
              </div>
              <div className='lodging-page_container_information_tags'>
                  {logement.tags.map(tag => (
                      <span key={tag} className='lodging-page_container_information_tags_tag'>{tag}</span>
                  ))}
              </div>
          </div>
          <div className='lodging-page_container_details'>
              <div className='lodging-page_container_details_host'>
                  <div className='lodging-page_container_details_host_name'>{first} <br/> {last}</div>
                  <img className='lodging-page_container_details_host_picture' src={logement.host.picture} alt={logement.host.name} />
              </div>
              <div className='lodging-page_container_details_rating'>
                  <Star rating={logement.rating} />
              </div>
          </div>
      </div>



      <div className="lodging-page_collapses">
        <Collapse title={"Description"}><p>{logement.description}</p></Collapse>
        <Collapse title={"Equipements"}><ul>{logement.equipments.map(equipment => <li key={equipment}>{equipment}</li>)}</ul></Collapse>
      </div>
    </div>
  );
};

export default Lodging;
