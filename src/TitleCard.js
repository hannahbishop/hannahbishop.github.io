import React from 'react';
import { ReactComponent as Illustration } from './me.svg';

function TitleCard() {
  return(
    <div className="title-card">
      <div className="title-card__text">
        <h1>Hannah Bishop</h1>
        <h2>Software Engineer</h2>
        <a className="btn-link" href="/">Résumé</a>
      </div>
      <Illustration className="illustration"/>
    </div>
  )
}

export default TitleCard;
