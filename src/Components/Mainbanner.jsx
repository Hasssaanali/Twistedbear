import React, { Fragment } from 'react'
import { mainsection } from '../Data/Data'

export default function Mainbanner() {
  return (
            <Fragment>
                <section>
                    <div className="container py-sm-5 py-4">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="2000">
                                <h2 className="hero-heading ff-alloy-ink text-center title zoom ">
                                    <span className="text-sky-blue">T</span><span className="text-purple">w</span><span className="text-pink">i</span><span className="text-dark-green">s</span><span className="text-green">t</span><span className="text-purple">e</span><span className="text-sky-blue">d </span>
                                    <br /><span className="text-purple">B</span><span className="text-pink">e</span><span className="text-dark-green">a</span><span className="text-sky-blue">r</span><span className="text-purple">s</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    {mainsection.map((data) => {
                    return (
                        <div className="container py-sm-5 py-4">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 heroimg text-center " data-aos="zoom-in" data-aos-delay="200" data-aos-duration="2000">
                                    <img src={data.bannerimage} width="90%" />
                                </div>
                            </div>
                        </div>
                            )
                        })}
                </section>
            </Fragment>
  )
}
