import React from "react";
import "./style.scss";
const Register = () => {
  return (
    <div className="res-search">
      <div className="res">
        <div className="container">
          <h1>
            Register now and get a discount <span>50%</span> discount until 1
            January
          </h1>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum
            nulla, vitae tempo.
          </p>
          <button>register now</button>
        </div>
      </div>

      <div className="search">
        <img
          src={
            "https://preview.colorlib.com/theme/course/images/search_background.jpg"
          }
          alt=""
        />
        <h1>Search for your course</h1>
        <form action="">
          <input type="text" placeholder="Course Name" />
          <input type="text" placeholder="Category" />
          <input type="text" placeholder="Degree" />
          <button>Search Course</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
