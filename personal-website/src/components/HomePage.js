import React from 'react';
import Interest from './Interest'

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
        <Interest />
      </div>
    );
  }
}

export default HomePage;
