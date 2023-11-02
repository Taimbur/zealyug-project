import React from 'react'
import '../styles/Related.css'
import redditimg from '../assets/img/Reddit.png'
import save from '../assets/img/save2.png'
import save2 from '../assets/img/share.png'
const Related = () => {
    return (

        <div className="container r-cards mt-5  ">
            <h1 className='mt-5 r-card mb-5'>Related Jobs</h1> <div>

                <div className="col-3 mt-5">
                    <div className="card r-main-card" style={{ width: '22rem' }}>
                        <div className="card-body">
                            <div className="card-title">
                                <div className="notfi-3 ">

                                    <span className="alert alert-danger notfi2">
                                        Urgent Hiring
                                    </span>
                                </div>
                                <div className="d-flex f-r">
                                    <div>
                                        <div>
                                            <p className="sub-heading-r"> <span><img src={redditimg} alt="reddit-logo" className='avatar-img-r' /></span> <span className='r-graphic'>Graphic Designer </span>   </p>
                                            <p className=' reddit-space'>reddit</p>
                                            <p className='reddit-space-2'>15 days remaining</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={save2} alt="save" className='avatar-img-r2' />
                                        <img src={save} alt="save" className='avatar-img-r2' />

                                    </div>
                                </div>

                                <div className="d-flex delhi-r ">
                                    <div>
                                        <p className='mini s'> <i className="ri-map-pin-line w-i"></i> delhi,india <br /><span ><button className='mini-btn'>full time</button></span></p>
                                    </div>

                                    <div>
                                        <p className='mini s'> <i className="ri-briefcase-line w-i"></i> 1 to 4 year exp <br /><span ><button className='mini-btn'>remote</button></span></p>
                                    </div>
                                </div>

                                <div className="d-flex wallet mt-3">

                                    <p ><i className="ri-wallet-3-line w-r w-i"></i>  &nbsp;<span className='mini-heading-r'> RS 4.5 L / <span className='annum'>Annum</span></span></p>
                                </div>
                            </div>

                            <div className="card-text">
                                <div className="d-flex justify-content-center ">
                                    <div><button className='mini-btns ss'> Adobe</button></div>
                                    <div><button className='mini-btns ss'> Video Editing</button></div>
                                    <div><button className='mini-btns ss'> Motion Graphics</button></div>
                                    <div><button className='mini-btns ss'> + 6</button></div>
                                </div>
                            </div>

                            <div className="card-text ">
                                <div className="d-flex last-card ">
                                    <div>
                                        <h6 className='fwt-bold sss'><span className='for-space'> 1250</span>  &nbsp;  <span className='im'> impressions</span></h6>
                                    </div>
                                    <div>
                                        <button className='btn-my-l ssss'>Apply Now <i className="ri-arrow-right-fill"></i></button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3 mt-5">
                    <div className="card r-main-card" style={{ width: '22rem' }}>
                        <div className="card-body">
                            <div className="card-title">
                                <div className="notfi-3 ">

                                    <span className="alert alert-primary notfi-end">
                                        top choice
                                    </span>
                                </div>
                                <div className="d-flex f-r">
                                    <div>
                                        <div>
                                            <p className="sub-heading-r"> <span><img src={redditimg} alt="reddit-logo" className='avatar-img-r' /></span> <span className='r-graphic'>Graphic Designer </span>   </p>
                                            <p className=' reddit-space'>reddit</p>
                                            <p className='reddit-space-2'>15 days remaining</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={save2} alt="save" className='avatar-img-r2' />
                                        <img src={save} alt="save" className='avatar-img-r2' />

                                    </div>
                                </div>

                                <div className="d-flex delhi-r ">
                                    <div>
                                        <p className='mini s'> <i className="ri-map-pin-line w-i"></i> delhi,india <br /><span ><button className='mini-btn'>full time</button></span></p>
                                    </div>

                                    <div>
                                        <p className='mini s'> <i className="ri-briefcase-line w-i"></i> 1 to 4 year exp <br /><span ><button className='mini-btn'>remote</button></span></p>
                                    </div>
                                </div>

                                <div className="d-flex wallet mt-3">

                                    <p ><i className="ri-wallet-3-line w-r w-i"></i>  &nbsp;<span className='mini-heading-r'> RS 4.5 L / <span className='annum'>Annum</span></span></p>
                                </div>
                            </div>

                            <div className="card-text">
                                <div className="d-flex justify-content-center ">
                                    <div><button className='mini-btns ss'> Adobe</button></div>
                                    <div><button className='mini-btns ss'> Video Editing</button></div>
                                    <div><button className='mini-btns ss'> Motion Graphics</button></div>
                                    <div><button className='mini-btns ss'> + 6</button></div>
                                </div>
                            </div>

                            <div className="card-text ">
                                <div className="d-flex last-card ">
                                    <div>
                                        <h6 className='fwt-bold sss'><span className='for-space'> 1250</span>  &nbsp;  <span className='im'> impressions</span></h6>
                                    </div>
                                    <div>
                                        <button className='btn-my-l ssss'>Apply Now <i className="ri-arrow-right-fill"></i></button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}

export default Related