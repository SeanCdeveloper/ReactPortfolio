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
            <div className="container-fluid">
                    <div className="card card1">
                        <img src={IngredienceIntro} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 1</h5>
                            <p className="card-text">The purpose of this application is allowing users to find recipes based
                                on needs, preferences, and/or ingredients they already have.&nbsp;
                                The user can enter any ingredient contained in their pantry or refrigerator and receive
                                recipes containing those ingredients.&nbsp;
                                The unique feature of this APP is that the user can filter through recipes by food
                                allergies and/or
                                intolerances - shellfish, gluten, dairy, peanuts, etc. - and even filter by specific
                                diets - vegan,
                                vegetarian, keto, paleo - to retrieve various options.&nbsp;</p>
                            <a href="https://github.com/SeanCdeveloper/ingredience" className="btn btn-primary">Visit Github Repo</a>
                            <a href=" https://seancdeveloper.github.io/ingredience/" className="btn btn-primary">View Website</a>
                        </div>
                    </div>
                <div className="box box2">
                    <div className="card card2">
                        <img src={TripTips} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 2</h5>
                            <p className="card-text">Above, you can see how a recipe displays on the Ingredience app.&nbsp;
                                After adding ingredients to use in preparing food, correlating recipes display in a
                                carousel of images.&nbsp;
                                The user scrolls through a carousel, an image slider that is touch-enabled for mobile
                                use, until finding a recipe to view.&nbsp;
                                Clicking on an image of a recipe will then display a recipe card, which includes a
                                Title, Ingredients, and Instructions.&nbsp;
                                Using the Ingredience APP makes food preparation simplified.</p>
                            <a href="https://github.com/SeanCdeveloper/TripTips-" className="btn btn-primary">Visit Github Repo</a>
                            <a href="https://grouptriptips.herokuapp.com/" className="btn btn-primary">View Website</a>
                        </div>
                    </div>
                </div>
                <div className="box box3">
                    <div className="card card3">
                        <img src={CodingQuiz} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 3</h5>
                            <p className="card-text">      The Coding Quiz is designed to display how 21st century test-taking should take place.&nbsp;
                            The Coding Quiz is created to take users' answers, dynamically check for correctness, and
                            respond accordingly.&nbsp;
                            When the quiz is completed, scores are then sorted and arranged in order from high to low
                            and then dynamically re-arranged after each new users' result.</p>
                            <a href='https://github.com/SeanCdeveloper/codingQuiz-Time' className="btn btn-primary">Visit Github Repo</a>
                            <a href='https://seancdeveloper.github.io/codingQuiz-Time/' className="btn btn-primary">View Website</a>
                        </div>
                    </div>
                </div>
                <div className="box box4">
                    <div className="card card4">
                        <img src={WeatherApp} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 4</h5>
                            <p className="card-text">The Dynamic Weather APP allows users to find weather conditions for multiple
                            cities simultaneously with just one click.&nbsp;
                            The Dynamic Weather APP displays temperature, weather conditions, humidity percentage, wind
                            speed, and UV Index for any city.&nbsp;
                            In addition, a five-day forecast for any city can be displayed, and changing forecasts
                            between cities is as easy as clicking a button!</p>
                            <a href="https://github.com/SeanCdeveloper/DynamicWeatherAPP" className="btn btn-primary">Visit Github Repo</a>
                            <a href="https://seancdeveloper.github.io/DynamicWeatherAPP/" className="btn btn-primary">View Website</a>
                        </div>
                    </div>
                </div>
                <div className="box box5">
                    <div className="card">
                        <img src={EmployeeManagementCLI} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 5</h5>
                            <p className="card-text">The Features of the Employee Tracker allow managers to "View all Employees", "View all Departments", "View all Roles", "View all Employees By Department", "View all Employees By Manager", "Add Employee", "Delete Employee", "Delete Employee", "Delete Employee", "Add Departments", "Delete Department", "Add Roles", "Update Employee Role", "Delete Role, "Update Employee Manager", "View Total Budget".&nbsp;
                            The Employee Tracker is perfect for business who want to know about all the activity inside their business. Managing departments, roles, and employees in the company is the most important aspect of being a successful product manager.  &nbsp;In a fast-paced world, organization needs to be efficient.
                            </p>
                            <a href="https://github.com/SeanCdeveloper/EmployeeTracker" className="btn btn-primary">Visit Github Repo</a>
                        </div>
                    </div>
                </div>
                <div className="box box6">
                    <div className="card card6">
                        <img src={EmployeeDirectory} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card 6</h5>
                            <p className="card-text">This project is an employee directory created with React. It allows people to instantly search for information about Employees just by typing a name in the search bar. In addition to searching for employees, the user can also sort employees by image, name, phone, email, and date-of-birth.&nbsp;
                            An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.&nbsp;
                            Given a table of random users, when the user loads the page, a table of employees should render. &nbsp;The user is able to Sort the table by image, name, phone, email, and date-of-birth.&nbsp;
                            </p>
                            <a href="https://github.com/SeanCdeveloper/EmployeeDatabase" className="btn btn-primary">Visit Github Repo</a>
                            <a href="https://guarded-forest-79756.herokuapp.com/" className="btn btn-primary">View Website</a>
                        </div>
                    </div>
                </div>
                <div className="box box7"></div>
                <div className="box box8"></div>
                <div className="box box9"></div>
                <div className="box box10"></div>
            </div>
        </div>
    )
}

export default Project;


