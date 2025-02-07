import React from "react";
import "./style.scss";

const EventUpcoming = () => {
  return (
    <div className="event">
      <h1 className="event-title">Upcoming Events</h1>
      <div className="event-content">
        <div className="event-item">
          <img
            className="img1"
            src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp"
            alt=""
          />
          <div className="item-info">
            <div className="date">
              <h1>07</h1>
              <p>January</p>
            </div>
            <div className="info">
              <h1>Student Festival</h1>
              <h3>Grand Central Park</h3>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor.
              </p>
            </div>
            <img
              className={"img2"}
              src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp"
              alt=""
            />
          </div>
        </div>
        <div className="event-item">
          <img
            className="img1"
            src="https://preview.colorlib.com/theme/course/images/event_2.jpg.webp"
            alt=""
          />
          <div className="item-info">
            <div className="date">
              <h1>07</h1>
              <p>January</p>
            </div>
            <div className="info">
              <h1>Open day in the Univesrsity campus</h1>
              <h3>Grand Central Park</h3>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor.
              </p>
            </div>
            <img
              className="img2"
              src="https://preview.colorlib.com/theme/course/images/event_2.jpg.webp"
              alt=""
            />
          </div>
        </div>
        <div className="event-item">
          <img
            className="img1"
            src="https://preview.colorlib.com/theme/course/images/event_3.jpg.webp"
            alt=""
          />
          <div className="item-info">
            <div className="date">
              <h1>07</h1>
              <p>January</p>
            </div>
            <div className="info">
              <h1>Student Graduation Ceremony</h1>
              <h3>Grand Central Park</h3>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor.
              </p>
            </div>
            <img
              className="img2"
              src="https://preview.colorlib.com/theme/course/images/event_3.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventUpcoming;
