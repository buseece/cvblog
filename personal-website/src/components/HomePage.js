import React from 'react';
import Interest from './Interest'
import ResumeItem from './ResumeItem'

class HomePage extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="component-container about-background">
          <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 about-text">
                  <div className="about-title">
                    Hello!
                  </div>
                  It's Buse, computer engineer with prior experience in web development and project management.
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="component-container">
          <section id="education" className="pt-5">
            <div className="container">
              <div className="row">
                  <div className="section-title">
                      Education
                  </div>
              </div>
              <ResumeItem time="2015-2019" title="Bachelor of Computer Engineering, BOGAZICI UNIVERSITY" subInfo1="3.53/4.00" subInfo2="Courses:" text="Introduction to OOP, Data Structures & Algorithms, Analysis of Algorithms, Fundamentals of Software Engineering, Principles of Programming Languages, Digital Systems, Introduction to Database, Operating Systems, Computer Organization"/>
              <ResumeItem time="2017-2018/2" title="Bachelor of Computer Science (Erasmus), UTRECHT UNIVERSITY" subInfo2="Courses:" text="Software Testing and Verification, Interaction Technology, Entrepreneurship, Information Security"/>
          </div>
          </section>
        </div>
        <Interest />
      </div>
    );
  }
}

export default HomePage;

/**
 * Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
 * <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
 */