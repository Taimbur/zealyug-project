import React from 'react'
import '../styles/Related.css'
import redditimg from '../assets/img/reddit.jpg'
const Related = () => {
    return (

        <div className="container ">
            <center>
                <h1 className='heading t-h ths'>Related Jobs</h1>
                {/* card section */}
                <section className='mt-3'>
                    <div className="row">

                        {/* <div className="col ">
                            <span className='notify-top alert alert-danger'>Urgent Hiring</span>
                            <div className="card mb-4 border rounded-4 r-c " style={{ width: "20rem", padding: '20px' }}>
                                <div className="card-body">
                                    <div className="card-text">
                                        <div className="d-flex f-t">
                                            <div >
                                                <p className="sub-heading-r reddit-space"> <span><img src={redditimg} alt="reddit-logo" className='reddit-img' /></span> Graphic Designer    </p>
                                                <p className='mini-heading-r reddit-space'>reddit</p>
                                                <p className='mini-heading reddit-space'>15 days remaining</p>
                                            </div>
                                            <div>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lightning sub-heading" viewBox="0 0 16 16">
                                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                                                </svg> &nbsp;
                                                    <i className="ri-save-line fs-2 reddit "></i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-map-pin-line"></i>delhi,india <br /><span className='mini-heading mx-3'>full time</span></p>
                                    </div>
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-briefcase-line"></i> 1 to 4 year exp <br /><span className='mini-heading mx-3'>remote</span></p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex f-t">
                                        <div><button className='btns'> Adobe</button></div>
                                        <div><button className='btns'> Video Editing</button></div>
                                        <div><button className='btns'> Motion Graphics</button></div>
                                        <div><button className='btns'> + 6</button></div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className="sub-heading-r">1555+ impression</p> </div>
                                    <div>
                                        <button className='btn-my-1'>apply now</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="col main-cards ">
                            <span className='notify-top alert alert-primary '>Top Choice </span>
                            <div className="card mb-4 border rounded-4 r-c" style={{ width: "20rem" }}>
                                <div className="card-body ">
                                    <div className="card-text">
                                        <div className="d-flex f-t">
                                            <div>
                                                <p className="sub-heading-r"> <span><img src={redditimg} alt="reddit-logo" className='reddit-img' /></span> Graphic Designer    </p>
                                                <p className='mini-heading-r reddit-space'>reddit</p>
                                                <p className='mini-heading reddit-space2'>15 days remaining</p>
                                            </div>
                                            <div>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lightning sub-heading" viewBox="0 0 16 16">
                                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                                                </svg> &nbsp;
                                                    <i className="ri-save-line fs-2 reddit "></i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-map-pin-line big-s"></i>delhi,india <br /><span className='mini-heading mx-3 big-s2'>full time</span></p>
                                    </div>
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-briefcase-line big-s"></i> 1 to 4 year exp <br /><span className='mini-heading mx-3 big-s2'>remote</span></p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex f-t  ">
                                        <div><button className='btns big-s3'> Adobe</button></div>
                                        <div><button className='btns big-s3'> Video Editing</button></div>
                                        <div><button className='btns big-s3'> Motion Graphics</button></div>
                                        <div><button className='btns big-s3'> + 6</button></div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className="sub-heading-r">1555+ impression</p> </div>
                                    <div>
                                        <button className='btn-my-1'>apply now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col ">
                            <span className='notify-top alert alert-warning'>Female   only</span>
                            <div className="card mb-4 border rounded-4" style={{ width: "20rem" }}>
                                <div className="card-body">
                                    <div className="card-text">
                                        <div className="d-flex f-t">
                                            <div>
                                                <p className="sub-heading-r"> <span><img src={redditimg} alt="reddit-logo" className='reddit-img' /></span> Graphic Designer    </p>
                                                <p className='mini-heading-r'>reddit</p>
                                                <p className='mini-heading'>15 days remaining</p>
                                            </div>
                                            <div>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lightning sub-heading" viewBox="0 0 16 16">
                                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                                                </svg> &nbsp;
                                                    <i className="ri-save-line fs-2 reddit "></i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-map-pin-line"></i>delhi,india <br /><span className='mini-heading mx-3'>full time</span></p>
                                    </div>
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-briefcase-line"></i> 1 to 4 year exp <br /><span className='mini-heading mx-3'>remote</span></p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex f-t  ">
                                        <div><button className='btns'> Adobe</button></div>
                                        <div><button className='btns'> Video Editing</button></div>
                                        <div><button className='btns'> Motion Graphics</button></div>
                                        <div><button className='btns'> + 6</button></div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className="sub-heading-r">1555+ impression</p> </div>
                                    <div>
                                        <button className='btn-my-1'>apply now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col ">
                            <span className='notify-top alert alert-danger'>Urgent Hiring</span>
                            <div className="card mb-4 border rounded-4" style={{ width: "20rem" }}>
                                <div className="card-body">
                                    <div className="card-text">
                                        <div className="d-flex f-t">
                                            <div>
                                                <p className="sub-heading-r"> <span><img src={redditimg} alt="reddit-logo" className='reddit-img' /></span> Graphic Designer    </p>
                                                <p className='mini-heading-r'>reddit</p>
                                                <p className='mini-heading'>15 days remaining</p>
                                            </div>
                                            <div>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lightning sub-heading" viewBox="0 0 16 16">
                                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                                                </svg> &nbsp;
                                                    <i className="ri-save-line fs-2 reddit "></i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-map-pin-line"></i>delhi,india <br /><span className='mini-heading mx-3'>full time</span></p>
                                    </div>
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-briefcase-line"></i> 1 to 4 year exp <br /><span className='mini-heading mx-3'>remote</span></p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex f-t  ">
                                        <div><button className='btns'> Adobe</button></div>
                                        <div><button className='btns'> Video Editing</button></div>
                                        <div><button className='btns'> Motion Graphics</button></div>
                                        <div><button className='btns'> + 6</button></div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className="sub-heading-r">1555+ impression</p> </div>
                                    <div>
                                        <button className='btn-my-1'>apply now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col ">
                            <span className='notify-top alert alert-primary '>Top Choice </span>
                            <div className="card mb-4 border rounded-4" style={{ width: "20rem" }}>
                                <div className="card-body">
                                    <div className="card-text">
                                        <div className="d-flex f-t">
                                            <div>
                                                <p className="sub-heading-r"> <span><img src={redditimg} alt="reddit-logo" className='reddit-img' /></span> Graphic Designer    </p>
                                                <p className='mini-heading-r'>reddit</p>
                                                <p className='mini-heading'>15 days remaining</p>
                                            </div>
                                            <div>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lightning sub-heading" viewBox="0 0 16 16">
                                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                                                </svg> &nbsp;
                                                    <i className="ri-save-line fs-2 reddit "></i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-map-pin-line"></i>delhi,india <br /><span className='mini-heading mx-3'>full time</span></p>
                                    </div>
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-briefcase-line"></i> 1 to 4 year exp <br /><span className='mini-heading mx-3'>remote</span></p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex f-t  ">
                                        <div><button className='btns'> Adobe</button></div>
                                        <div><button className='btns'> Video Editing</button></div>
                                        <div><button className='btns'> Motion Graphics</button></div>
                                        <div><button className='btns'> + 6</button></div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className="sub-heading-r">1555+ impression</p> </div>
                                    <div>
                                        <button className='btn-my-1'>apply now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col ">
                            <span className='notify-top alert alert-warning'>Female  only</span>
                            <div className="card mb-4 border rounded-4" style={{ width: "20rem" }}>
                                <div className="card-body">
                                    <div className="card-text">
                                        <div className="d-flex f-t">
                                            <div>
                                                <p className="sub-heading-r"> <span><img src={redditimg} alt="reddit-logo" className='reddit-img' /></span> Graphic Designer    </p>
                                                <p className='mini-heading-r'>reddit</p>
                                                <p className='mini-heading'>15 days remaining</p>
                                            </div>
                                            <div>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lightning sub-heading" viewBox="0 0 16 16">
                                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                                                </svg> &nbsp;
                                                    <i className="ri-save-line fs-2 reddit "></i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-map-pin-line"></i>delhi,india <br /><span className='mini-heading mx-3'>full time</span></p>
                                    </div>
                                    <div>
                                        <p className='mini-heading-r'> <i className="ri-briefcase-line"></i> 1 to 4 year exp <br /><span className='mini-heading mx-3'>remote</span></p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex f-t  ">
                                        <div><button className='btns'> Adobe</button></div>
                                        <div><button className='btns'> Video Editing</button></div>
                                        <div><button className='btns'> Motion Graphics</button></div>
                                        <div><button className='btns'> + 6</button></div>
                                    </div>
                                </div>
                                <div className="d-flex f-t">
                                    <div>
                                        <p className="sub-heading-r">1555+ impression</p> </div>
                                    <div>
                                        <button className='btn-my-1'>apply now</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </center>
        </div>

    )
}

export default Related