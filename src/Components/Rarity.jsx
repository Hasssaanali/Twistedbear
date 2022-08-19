import React, { Fragment } from 'react'
import { rarity } from '../Data/Data'

export default function Rarity() {
  return (
    <Fragment>
        <section class="rarity">
    <div class="container">
        <h2 id="rarity" class="heading ff-alloy-ink text-center aos-init aos-animate" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="2000"><span class="text-blue">R</span><span class="text-pink">A</span><span class="text-yellow">R</span><span class="text-purple">I</span><span class="text-sky-blue">T</span><span class="text-pink">Y</span></h2>
    </div>

    <div class="container myboxes">
    <div class="d-flex justify-content-center flex-xxl-nowrap flex-wrap">

    {rarity.map((data) => {
          return (
        <div class="pt-4 mx-2 h-100 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1500">
            <div class={data.class}>
                <h3 class="sub-heading ff-odin text-center mb-0">{data.title}</h3>
                <p class="font-sm text-center ff-odin">{data.existence}</p>
                <img class="w-100" src={data.image} alt="" />
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
