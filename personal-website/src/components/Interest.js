import React from 'react';
import InterestCard from './InterestCard'

class Interest extends React.Component {
  
 render() {
    return (
        <div className="component-container">
            <section id="interest" className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            My Interests
                        </div>
                    </div>
                    <div className="row pt-5">
                        <InterestCard imgLink="laptop-coding.png" title="Development" text="Coding makes everything possible! I like Frontend development, because I like creating something that user can see."/>
                        <InterestCard imgLink="cloud.png" title="Cloud Technology" text="It is fascinating to see how the world evolves around the Cloud Technologies!"/>
                        <InterestCard imgLink="freedom.png" title="Entrepreneurship" text="I like the motivation behind the entrepreneurial mindset. Creating something new is indeed hard and requires lots of effort and determination."/>
                        {/*<InterestCard imgLink="paint.png" title="Art" text="I like painting and 'Do It Yourself' concept :)"/>*/}
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default Interest;


