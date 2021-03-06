import React, { Component } from 'react';
import takingPhotograph from '../images/me-photo-min.jpg'

class HomeIntro extends Component {  
  render() {
    return (
      <section className="leader mh5-ns">
        <h2 className="f3 f2-l normal lh-title-ns w-70-ns mh4 mb4 mv5-l ">
            Monument Monitor is a collaborative research project between Historic Environment Scotland and the Institute of Sustainable Heritage at Univerity College London. It aims to assess to what extent we can use visitors photographs of heritage sites to inform conservation and monitoring efforts.
        </h2>
        <div className="photo w-100 overflow-auto pb5-ns">
          <img className="w-60-ns fr-ns grayscale" src={takingPhotograph} alt="woman taking photograph of standing stones"/>
        </div>
      </section>
    );
  }
}

export default HomeIntro;