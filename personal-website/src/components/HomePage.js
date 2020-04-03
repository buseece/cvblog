import React from 'react';
import Interest from './Interest'

class HomePage extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <div className="component-container">
          <section id="about">
            <div className="about-text">
              <div className="about-title">
                Hello!
              </div>
              It's Buse Ece Güldiken
            </div>
          </section>
        </div>
        <Interest />
      </div>
    );
  }
}

export default HomePage;
