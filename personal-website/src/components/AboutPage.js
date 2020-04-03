import React from 'react';
import ResumeItem from './ResumeItem'

class AboutPage extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="about-background header-part">
        </div>
        <div className="component-container">
          <section id="education" className="pt-5 text-left">
            <div className="container mb-2">
              <div className="row mb-4">
                  <div className="section-title">
                      Education
                  </div>
              </div>
              <ResumeItem time="2015-2019" imgLink="/edu.png" title="Bachelor of Computer Engineering, BOGAZICI UNIVERSITY" subInfo1="3.53/4.00" subInfo2="Courses:" text="Introduction to OOP, Data Structures & Algorithms, Analysis of Algorithms, Fundamentals of Software Engineering, Principles of Programming Languages, Digital Systems, Introduction to Database, Operating Systems, Computer Organization"/>
              <ResumeItem time="2017-2018/2" imgLink="/edu.png" title="Bachelor of Computer Science (Erasmus), UTRECHT UNIVERSITY" subInfo2="Courses:" text="Software Testing and Verification, Interaction Technology, Entrepreneurship, Information Security"/>
          </div>
          </section>
        </div>
        <div className="component-container">
          <section id="experience" className="pt-5 text-left">
            <div className="container">
              <div className="row mb-4">
                  <div className="section-title">
                      Experience
                  </div>
              </div>
              <ResumeItem time="04/2020-Present" imgLink="/hard-work.png" title="Associate Cloud Technical Solutions Engineer" subInfo1="Google, Ireland" text=""/>
              <ResumeItem time="10/2019-03/2020" imgLink="/hard-work.png" title="Digital CVM Solutions Pega Developer" subInfo1="Vodafone, Turkey" text="Decision architect in a cross-functional team, using Pega to design and develop the solution logic. Contributing to Customer Value Management by offering customer specific propositions."/>
              <ResumeItem time="02/2019-08/2019" imgLink="/hard-work.png" title="JavaScript Developer Intern" subInfo1="Insider, Turkey" text="Worked with account managers to implement company specific solutions. Used JavaScript, jQuery, HTML & CSS for product customizations and feature optimizations."/>
              <ResumeItem time="07/2018-09/2018" imgLink="/hard-work.png" title="Student Researcher" subInfo1="The von Karman Institute, Belgium" text="Implemented a module to read customized terrain profile for open source software WRF Implemented Mars Solar Time Calculator using JavaScript"/>
              <ResumeItem time="05/2017-09/2017" imgLink="/hard-work.png" title="Information Systems Intern" subInfo1="Reckitt Benckiser, Turkey" text="Took part in Business software projects, reported bugs found in the system, taking part in communication with software development companies"/>

          </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AboutPage;

/**
 * Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
 * <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
 */