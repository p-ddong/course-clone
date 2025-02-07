import React from "react";
import "./style.scss";
import blackboard from '../../assets/service/blackboard.svg';
import books from '../../assets/service/books.svg';
import earthGlobe from '../../assets/service/earth-globe.svg';
import exam from '../../assets/service/exam.svg';
import mortarboard from '../../assets/service/mortarboard.svg';
import professor from '../../assets/service/professor.svg';

const OurService = () => {
  return (
    <div className="our-service">
      <h1 className="service-title">Our Services</h1>
      <div className="service-content">
        <div className="item">
          <img src={earthGlobe} alt="" />
          <h2>Online Courses</h2>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
        <div className="item">
          <img src={exam} alt="" />
          <h2>Indoor Courses</h2>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
        <div className="item">
          <img src={books} alt="" />
          <h2>Amazing Library</h2>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
        <div className="item">
          <img src={professor} alt="" />
          <h2>Exceptional Professors</h2>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
        <div className="item">
          <img src={blackboard} alt="" />
          <h2>Top Programs</h2>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
        <div className="item">
          <img src={mortarboard} alt="" />
          <h2>Graduate Diploma</h2>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
