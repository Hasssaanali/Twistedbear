import React ,{Fragment}from 'react'
import { slider } from '../Data/Data'

export default function Slider() {
  return (
<Fragment>
<section className="roadmap team">
        <div className="container">
          <h2 id="team" className="heading ff-alloy-ink text-center  mb-5" data-aos="fade-down" data-aos-delay="200" data-aos-duration="2000"><span className="text-purple">T</span><span className="text-yellow">E</span><span className="text-pink">A</span><span className="text-green">M</span></h2>
        </div>

        <div className="container">
          <div className="row">

         
            <div className="slider" data-aos="flip-up" data-aos-delay="200" data-aos-duration="2000">
            {slider.map((data) => {
          return (
              <div className="px-2" style={{ width: "100%" }} key={data.id}>
                <div className={data.class}>
                  <div className="d-flex align-items-center">
                    <img className="w-25" src={data.image} alt="" />
                    <div>
                      <h3 className="sub-heading font-22 ff-odin  ms-3 ms-sm-0 wth1">{data.heading}</h3>
                      <p className="font-sm mb-0 ff-odin wth">{data.title}</p>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
            </div>
           

          </div>
        </div>
      </section>
</Fragment>
  )
}
