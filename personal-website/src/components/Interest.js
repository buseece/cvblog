import React from 'react';

class Interest extends React.Component {
  
 render() {
    return (
        <div className="component-container">
            <section id="interest" className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            INTERESTS
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-4 mb-4 grid-margin dark-text">
                            <div className="card h-100" >
                                <div className="card-body text-left" >
                                    <div className="card-body-text">
                                        <div className="card-logo pb-4">
                                            <img style={{height:"60px"}} src={process.env.PUBLIC_URL + "laptop-coding.png"} alt=""/>
                                        </div>
                                        <h5>Development</h5>
                                        <p className="card-text">Coding makes everything possible! I like Frontend development, because I like creating something that user can see.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 grid-margin dark-text">
                            <div className="card h-100" >
                                <div className="card-body text-left" >
                                    <div className="card-body-text">
                                        <div className="card-logo pb-4">
                                            <img style={{height:"60px"}} src={process.env.PUBLIC_URL + "laptop-coding.png"} alt=""/>
                                        </div>
                                        <h5>Cloud Technology</h5>
                                        <p className="card-text">It is fascinating to see how the world evolves around the Cloud Technologies!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 grid-margin dark-text">
                            <div className="card h-100" >
                                <div className="card-body text-left" >
                                    <div className="card-body-text">
                                        <div className="card-logo pb-4">
                                            <img style={{height:"60px"}} src={process.env.PUBLIC_URL + "laptop-coding.png"} alt=""/>
                                        </div>
                                        <h5>Entrepreneurship</h5>
                                        <p className="card-text">I like the motivation behind the entrepreneurial mindset. Creating something new is indeed hard and requires lots of effort and determination.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default Interest;


