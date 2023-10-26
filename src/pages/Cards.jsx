import React from "react";
import "../styles/Cards.css";
import Realted from "../pages/Related";
import water from "../assets/img/water.png";
import g from "../assets/img/group.png";
import s from "../assets/img/save.png";
import s2 from "../assets/img/sahil2.png";

const Cards = () => {
    return (
        <div className="container real-cards">
            <div className="container px-4 text-center">
                <div className="row gx-5">

                    <div className="col-9 real-cards">
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">
                                    <div className="notfi-3 ">
                                        <span className="alert alert-warning notfi">
                                            Female Candidate Preferred{" "}
                                        </span>
                                        &nbsp;
                                        <span className="alert alert-danger notfi2 mx-2">
                                            Urgent Hiring
                                        </span>
                                    </div>
                                </h5>
                                <div className="card-text d-flex d">
                                    <div>
                                        <img src={water} alt="waterlogo" className="water-img" />
                                        <h6 className="heading mp">Product Designer</h6>
                                        <p className="sub-heading m">GrameenPhone</p>
                                        <p className=" mini-heading m-post"> Posted on 24 Oct 2023</p>
                                        <p className="mp">
                                            <img src={s} alt="save icon" className="save-img" />
                                            <button className="btn-my ">
                                                Apply Now &nbsp;{" "}
                                                <i className="ri-arrow-right-fill"></i>
                                            </button>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <img src={g} alt="goup-icon" className="g-photo m-g" />
                                        </p>
                                        <p className="m-d">
                                            <span className="mini-heading m-dd">Delhi India</span> <br />
                                            <span className="mini-heading">10 days remaing</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <div className="card user-card">
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">

                                                <div className="d-flex ">
                                                    <div className=" avatar-div">
                                                        <img src={s2} alt="avatar" className="avatar-img end-img" />
                                                    </div>
                                                    <div className=" names-div-s">
                                                        <h6 className="sub-heading sahil">
                                                            Sahil khan
                                                        </h6>
                                                        <p className="mini-heading user-card-name end-text"> HR Manager | Grameenphone</p>
                                                    </div>
                                                    <div className="user-input-div-s">
                                                        <button className=" last-btn ">message</button>
                                                    </div>
                                                </div>


                                            </blockquote>
                                        </div>
                                    </div>
                                </div>



                                <div className="card-text mt-5">
                                    <div className="container text-center">
                                        <div className="row align-items-center">
                                            <div className="col "> <p className="mini-headingr">Department:</p>
                                                <p className="sub-headingr">IT Development</p></div>
                                            <div className="col "><p className="mini-headingr">Job Role:</p>
                                                <p className="sub-headingr">Programmer</p></div>
                                            <div className="col "> <p className="mini-headingr">work type:</p>
                                                <p className="sub-headingr">onsite</p></div>
                                            <div className="col "> <p className="mini-headingr">salary:</p>
                                                <p className="sub-headingr">25,000/Month</p></div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col"> <p className="mini-headingr">job type:</p>
                                                <p className="sub-headingr">full time</p></div>
                                            <div className="col"> <p className="mini-headingr">work location:</p>
                                                <p className="sub-headingr">delhi india</p>  </div>
                                            <div className="col"><p className="mini-headingr">education:</p>
                                                <p className="sub-headingr">masters</p>  </div>
                                            <div className="col"> <p className="mini-headingr">start date:</p>
                                                <p className="sub-headingr">immediate</p> </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="card-text mt-5">
                                    <h4 className="job-d">
                                        job description
                                    </h4>
                                    <p className="job-d">
                                        responsibilities
                                    </p>
                                    <ul className='p-heading mx-5 li-side'  >
                                        <li>
                                            <article className='art'>
                                                <p> work on and execute design from start to finish
                                                    while meeting creative and technical requirments.</p>
                                            </article >
                                        </li>
                                        <li>
                                            <article className='art'><p>                      collaborate closely with engineers, research clinicians and product managers literate rapidly.
                                            </p></article >
                                        </li>
                                        <li>
                                            <article className='art'>
                                                <p>                      work on entire project lifecycle, from wireframes to detailed specs across multiple UX platfroms.
                                                </p>
                                            </article>
                                        </li>
                                        <li>
                                            <article className='art'>
                                                <p>                             participate in regular design reviews and other team wide design efforts; create and contribute to a great design team culture.
                                                </p>
                                            </article>
                                        </li>

                                        <li>
                                            <article className='art'>
                                                <p>                      participate in user-experience research and usability studies.
                                                </p>
                                            </article >
                                        </li>

                                    </ul>

                                </div>

                                <div className="card-text mt-5">
                                    <h4 className="job-d">
                                        qualifications and skills
                                    </h4>
                                    <ul className='p-heading mx-5 li-side'  >
                                        <li>
                                            <article className='art'>
                                                <p>                      BA/BS degree in desing ,HCI, CS,or realted field or equvilaent, practical experience.
                                                </p>
                                            </article>
                                        </li>
                                        <li>
                                            <article className='art'>
                                                <p>                      3+ years of relevant UX design exeperience in consumer products,medical devices or ther relevant areas.
                                                </p>
                                            </article>
                                        </li>


                                        <li>
                                            <article className='art'>
                                                <p>
                                                    proven ability to work across the design process, from developing strong conceptual foundation to refining the smallest details with high quality and attention to details.

                                                </p>
                                            </article>
                                        </li>
                                        <li>
                                            <article className='art'>
                                                <p>                      excellent interpersonal, communication,negotiation and collaboration skills.
                                                </p>
                                            </article>
                                        </li>
                                        <li>

                                            <p className='art '> portfolio of UX design work.</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="card-text mt-5">
                                    <h4 className="job-d">
                                        preferred qualification and skills
                                    </h4>
                                    <ul className='p-heading mx-5 li-side'  >
                                        <li>
                                            <article className='art'>
                                                <p>                                                experience designing for health-realted products (software and /or hardware).

                                                </p>
                                            </article>
                                        </li>
                                        <li>
                                            <article className='art'>
                                                <p>                     experience designing for wearable devices.

                                                </p>
                                            </article>
                                        </li>


                                        <li>
                                            <article className='art'>
                                                <p>
                                                    self-motivated and able to prioritize and manage and meet critical project milestones and deadlines.

                                                </p>
                                            </article>
                                        </li>
                                        <li>
                                            <article className='art'>
                                                <p>          excellent interpersonal,communication,negotiation and collaborate skills.
                                                </p>
                                            </article>
                                        </li>

                                    </ul>
                                </div>


                                <div className="card-text mt-5 ">
                                    <h4 className="job-d">
                                        about company
                                    </h4>
                                    <div className="card-text">
                                        <div className="card user-card">
                                            <div className="card-body">
                                                <blockquote className="blockquote mb-0">

                                                    <div className="d-flex ">
                                                        <div className=" avatar-div">
                                                            <img src={water} alt="avatar" className="avatar-img end-img" />
                                                        </div>
                                                        <div className=" names-div">
                                                            <h6 className="sub-heading">
                                                                Grameenphone Ltd
                                                            </h6>
                                                            <p className="mini-heading user-card-name end-text">Telecommunications  6177 employees  &nbsp;<span className="actives">Actively Hiring</span></p>
                                                        </div>
                                                        <div className="user-input-div">
                                                            <button className=" last-btn ">view page</button>
                                                        </div>
                                                    </div>


                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    {/* 2nd col */}
                    <div className="col-3  ">
                        <div className="p-3">
                            <Realted />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
