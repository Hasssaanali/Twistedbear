import React, { Fragment } from 'react'
import { story, storymob } from '../Data/Data'

export default function Story() {
  return (
    <Fragment>
        <section className="story">
        <div className="container py-lg-5 my-lg-5">
          <div className="row d-none">

            <div className="col-lg-6 col-12">
              <div className="mw-388 mx-auto position-relative pb-5 pt-1 aos-init aos-animate" data-aos="fade" data-aos-delay="200" data-aos-duration="2000">
                <div className="story-bg">
                  <div className='desktop'><img data-aos="fade-right" data-aos-delay="1500" data-aos-duration="2500" className="w-100 story-img aos-init aos-animate" src="/static/media/story-img-1.123849a7fc9248f2042f.png" alt="" /></div>
                  <div className='desktop'><img data-aos="fade-left" data-aos-delay="1500" data-aos-duration="2500" className="w-100 story-img2 aos-init aos-animate" src="/static/media/story-img-2.dfafa6a5c1c00189f27b.png" alt="" /></div>
                  <div className='desktop'><img data-aos="fade-right" data-aos-delay="1500" data-aos-duration="2500" className="w-100 story-img3 aos-init aos-animate" src="/static/media/story-img-3.61bb4de6401b9a234a58.png" alt="" /></div>
                  <div className='desktop'><img data-aos="fade-left" data-aos-delay="1500" data-aos-duration="2500" className="w-100 story-img4 aos-init aos-animate" src="/static/media/story-img-4.2dadc43a08da93fda428.png" alt="" /></div>
                  <div className='desktop'><img data-aos="fade-right" data-aos-delay="1500" data-aos-duration="2500" className="w-100 story-img5 aos-init aos-animate" src="/static/media/story-img-5.9250effde4817ee1f675.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
          <div id="story" className="row justify-content-center position-relative">
            <div className="col-xxl-10 d-flex position-relative story_section d-none d-xl-block">
              <div className="desktop"><img className="story-img aos-init aos-animate" src="img/1.png" alt="" data-aos="fade-up" data-aos-duration="2500" /></div>
              <div className="desktop"><img data-aos="fade-down" data-aos-duration="2500" className="story-img2 aos-init aos-animate" data-aos-delay="100" src="img/2.png" alt="" /></div>
              <div className="desktop"><img data-aos="fade-up" data-aos-duration="2500" data-aos-delay="150" className="story-img3 aos-init aos-animate" src="img/3.png" alt="" /></div>
              <div className="desktop"><img data-aos="fade-down" data-aos-duration="2500" data-aos-delay="200" className="story-img4 aos-init aos-animate" src="img/4.png" alt="" /></div>
              <div className="desktop"><img data-aos="fade-up" data-aos-duration="2500" data-aos-delay="250" className="story-img5 aos-init aos-animate" src="img/5.png" alt="" /></div>
            </div>
            <div><img className="w-100 hero-img mb-4 mb-md-0 d-block d-xl-none aos-init aos-animate" data-aos="fade-up" data-aos-duration="2500" src="/static/media/story-img.5e1fb4bcc492622e301b9e0d298d594a.svg" alt="" /></div>
            <div className="w-100 text-center story-text-box d-xl-block bottom-0 start-0 aos-init aos-animate" data-aos="fade-up " data-aos-duration="2500" data-aos-delay="300">
              <div className="w-50 w-sm-98 mx-auto story-box-bg p-2">
                <h2 className="heading font-xl ff-alloy-ink text-center">
                  <span className="text-blue">S</span><span className="text-pink">t</span><span className="text-yellow">o</span><span className="text-purple">r</span><span className="text-sky-blue">y</span>
                </h2>
                {story.map((data) => {
                    return (
                <span key={data.id}>       
                <p className="ff-odin-light fw-bold font-xs text-center mb-2">{data.content1} </p>
                <p className="ff-odin-light fw-bold font-xs text-center">{data.content2}</p>
                </span>

)
})}


              </div>
            </div>
          </div>
        </div>
      </section>


    </Fragment>
  )
}
