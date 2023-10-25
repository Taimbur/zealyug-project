import React from 'react'
import '../styles/Home.css'
import water from '../assets/img/water.png'
import user from '../assets/img/sahil.png'
import Related from './Related'
const Home = () => {
  return (
    <div className='container  m-home  '>
      <div className="row">
        <div className="col-8 m-bar main-cards">
          <div className="d-flex ">
            <span className='alert alert-warning notfi' >Female Candidate Preferred </span>&nbsp;<span className='alert alert-danger notfi'>Urgent Hiring</span> </div>
          <div className="card " style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">
                <div className="t-h">

                  <div>
                    <img src={water} alt="waterlogo" className='water-img' />
                    <h6 className='heading'>Product Designer</h6>
                    <p className='sub-heading'>GrameenPhone</p>
                    <p className='fw-bold mini-heading'>Posted on 24 Oct 2023</p>
                    <p>
                      <span><i className="ri-save-line fs-2"></i></span>
                      <button className='btn-my'>Apply Now <i className="ri-arrow-right-fill"></i></button>
                    </p>
                  </div>

                  <div>

                    <p>
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lightning sub-heading" viewBox="0 0 16 16">
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                      </svg></span> &nbsp;
                      <span>  <i className="ri-more-line sub-heaing"></i> </span>
                    </p>
                    <p>
                      <span className="sub-heading">Delhi India</span> <br />
                      <span className="mini-heading">10 days remaing</span>
                    </p>

                  </div>
                </div>
              </h5>
              <div className="card-text">

                {/* usercard */}

                <div className="card mb-3 " style={{ width: "80%" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={user} alt="user" className='water-img' />

                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className=" card-title sub-heading ">Sahil Khan</h5>
                        <p className="card-text  mini-heading " >HR manager | FullStack Developer &nbsp; <span><input type="text" placeholder='Message' className='user-input' /></span></p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* deparments sec */}

                <div className='container text-center'>
                  <div className="row">
                    <div className="col">
                      <p className="mini-heading">Department:</p>
                      <p className="sub-heading-home">IT Development</p>
                    </div>
                    <div className="col">
                      <p className="mini-heading">Job Role:</p>
                      <p className="sub-heading-home">Programmer</p>                    </div>
                    <div className="col">
                      <p className="mini-heading">work type:</p>
                      <p className="sub-heading-home">onsite</p>                    </div>
                    <div className="col">
                      <p className="mini-heading">salary:</p>
                      <p className="sub-heading-home">25,000/Month</p>

                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="mini-heading">job type:</p>
                      <p className="sub-heading-home">full time</p>
                    </div>
                    <div className="col">
                      <p className="mini-heading">work location:</p>
                      <p className="sub-heading-home">delhi india</p>                    </div>
                    <div className="col">
                      <p className="mini-heading">education:</p>
                      <p className="sub-heading-home">masters</p>                    </div>
                    <div className="col">
                      <p className="mini-heading">start date:</p>
                      <p className="sub-heading-home">immediate</p>

                    </div>
                  </div>
                </div>
                {/* job desc  */}
                <div className="mt-5  mr-none">
                  <h4 className="heading">
                    job description<span><i className="ri-pen-nib-line fs-2  "></i></span>
                  </h4>
                  <p className="sub-heading">
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
                        <p>                      participate in regular design reviews and other team wide design efforts; create and contribute to a great design team culture.
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
                {/* qualifications and skill sec  */}
                <div className="mt-5 mr-none">
                  <h4 className="heading">
                    qualifications and skills &nbsp;<span><i className="ri-book-line"></i></span>
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

                      <p className='art'> portfolio of UX design work.</p>                    </li>

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
                  </ul>
                </div>

                {/* qualifications preferred sec  */}
                <div className="mt-5  mr-none">
                  <h4 className="heading">
                    preferred qualification and skills &nbsp;<span><i className="ri-user-voice-line"></i></span>
                  </h4>

                  <ol className='p-heading mx-5 li-side' type='1'  >

                    <li>
                      <article className='art'>
                        <p>
                          experience designing for health-realted products (software and /or hardware).

                        </p>
                      </article >
                    </li>
                    <li>
                      <article className='art'>
                        <p>
                          experience designing for wearable devices.

                        </p>
                      </article >
                    </li>
                    <li>
                      <p className='art'>                      experience with prototyping.
                      </p>
                    </li>
                    <li>
                      <article className='art'>
                        <p>                      self-motivated and able to prioritize and manage and meet critical project milestones and deadlines.
                        </p>
                      </article>
                    </li>
                    <li>
                      <article className='art'>
                        <p>                      excellent interpersonal,communication,negotiation and collaborate skills.
                        </p>
                      </article>
                    </li>
                  </ol>
                </div>
                <div className="a-c">
                  <h4 className="heading">
                    about company
                  </h4>
                  {/* company usercard */}

                  <div className="card mb-3 about-card " style={{ width: "100%" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={water} alt="user" className='water-img' />

                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className=" card-title sub-heading l-b3 ">grameenphone ltd</h5>
                          <p className="card-text  mini-heading l-b" >telecommunications 6,2451 employees &nbsp; <span className='text-primary'> Actively Hiring</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span ><button className="btn btn-outline-primary  border rounded-5 mini-heading l-b2">view page</button></span></p>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <Related  />
        </div>
      </div>
    </div>
  )
}

export default Home