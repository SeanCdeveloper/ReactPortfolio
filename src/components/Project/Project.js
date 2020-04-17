import React from 'react';
import './styles.css';
import CodingQuiz from '../../Images/CodingQuiz-Timer.png'
import EmployeeManagementCLI from '../../Images/employee-managementCLI.png'
import IngredienceIntro from '../../Images/IngredienceIntro.png'
import WeatherApp from '../../Images/weatherApp.png'
import TripTips from '../../Images/tripTips1.gif'
import EmployeeDirectory from '../../Images/EmployeeDirectory.png'

const Project = () => {
    return (
        <div>
            <p>Features</p>
            <div classNameName="container">
                {/* <div classNameName="box box1"> */}
                    <div className="card card1">
                        <img src={IngredienceIntro} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://github.com/SeanCdeveloper/ingredience" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                {/* </div> */}
                <div classNameName="box box2">
                    <div className="card card2">
                        <img src={TripTips} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://github.com/SeanCdeveloper/TripTips-" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div classNameName="box box3">
                    <div className="card card3">
                        <img src={CodingQuiz} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 3</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='https://github.com/SeanCdeveloper/codingQuiz-Time' className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div classNameName="box box4">
                    <div className="card card4">
                        <img src={WeatherApp} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 4</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://github.com/SeanCdeveloper/DynamicWeatherAPP" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div classNameName="box box5">
                    <div className="card">
                        <img src={EmployeeManagementCLI} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 5</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://github.com/SeanCdeveloper/EmployeeTracker" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div classNameName="box box6">
                    <div className="card card6">
                        <img src={EmployeeDirectory} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 6</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://github.com/SeanCdeveloper/EmployeeDatabase" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div classNameName="box box7"></div>
                <div classNameName="box box8"></div>
                <div classNameName="box box9"></div>
                <div classNameName="box box10"></div>
            </div>
        </div>
    )
}

export default Project;


