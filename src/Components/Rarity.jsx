import React, { Fragment } from 'react'
import { rarity } from '../Data/Data'

export default function Rarity() {
  return (
    <Fragment>
        <section className="rarity">
    <div className="container">
        <h2 id="rarity" className="heading ff-alloy-ink text-center aos-init aos-animate" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="2000"><span className="text-blue">R</span><span className="text-pink">A</span><span className="text-yellow">R</span><span className="text-purple">I</span><span className="text-sky-blue">T</span><span className="text-pink">Y</span></h2>
    </div>

    <div className="container myboxes">
    <div className="d-flex justify-content-center flex-xxl-nowrap flex-wrap">

    {rarity.map((data) => {
          return (
        <div className="pt-4 mx-2 h-100 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1500"  key={data.id}>
            <div className={data.class}>
                <h3 className="sub-heading ff-odin text-center mb-0">{data.title}</h3>
                <p className="font-sm text-center ff-odin">{data.existence}</p>
                <img className="w-100" src={data.image} alt="" />
            </div>
        </div>
        )
    })}
        

    </div>
</div>
</section>


    </Fragment>
  )
}
