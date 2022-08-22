import React, { Fragment } from 'react'
import { roadmap } from '../Data/Data'





export default function () {
  return (
    <Fragment>
        <section className="roadmap">
        <div className="container">
          <h2 id="roadmap" className="heading ff-alloy-ink text-center py-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="2000"><span className="text-blue">R</span><span className="text-light-yellow">O</span><span className="text-green">A</span><span className="text-yellow">D</span><span className="text-purple">M</span><span className="text-green">A</span><span className="text-sky-blue">P </span></h2>
        </div>

        <div className="container">
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000" className="aos-init aos-animate">

          {roadmap.map((data) => {
          return (
            <div className="row" key={data.id}>
              <div className="col-2 text-center">
                <div className="d-flex flex-column align-items-center">
                  <div><img className="roadmap-img" src="img/r1.png" alt="" /></div>
                  <div>
                    <svg width="2" height="185" viewBox="0 0 2 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect y="19" width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect y="38" width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect y="57" width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect y="77" width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect y="96" width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect y="116" width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect y="116" width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect y="135" width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect y="154" width="2" height="12" rx="1" fill="#502F31"></rect>
                      <rect y="173" width="2" height="12" rx="1" fill="#502F31"></rect>
                    </svg>
                  </div>
                  <div>

                  </div>
                </div>
              </div>


              <div className="col-md-7 pt-4 pt-md-0 col-10">
                <div className={data.class}>
                  <h2 className="small-heading ff-alloy-ink">{data.heading}</h2>
                  <p className="small-para ff-odin">
                    {data.content}
                  </p>
                </div>
              </div>
            </div>
          )})}




            
          </div>

        </div>

      </section>
    </Fragment>
  )
}
