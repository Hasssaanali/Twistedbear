import React, { Fragment, useEffect, useState } from 'react'
import { accordion } from '../Data/Data'

export default function Accordion(passingdata) {
    let [number, setnumber] = useState(0)
    const [questiondata, setddata] = useState(passingdata.passingdata)
  
    return (
        <Fragment>
            <section className="roadmap faq">
                <div className="container">
                    <h2 id="faq" className="heading ff-alloy-ink text-center py-5 aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" data-aos-duration="200"><span className="text-yellow">F</span><span className="text-blue">A</span><span className="text-purple">Q</span></h2>
                </div>
                <div className="container">
                    {questiondata.map((data) => {

                        return (
                            <div className="tab" key={data.id}>
                                <input type="checkbox" id={data.id} />
                                <label className="tab-label" htmlFor={data.id} > {`Q${++number}. ` + data.question} </label>
                                <div className="tab-content">
                                    {data.answer}
                                </div>

                            </div>
                        )
                    })}
                    <div className="tabs" data-aos="fade-up" data-aos-delay="200" data-aos-duration="200">
                    </div>
                </div>
            </section>

        </Fragment >
    )
}
