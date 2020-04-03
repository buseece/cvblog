import React from 'react';
import ResumeItem from './ResumeItem'

class NotFound extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="about-background header-part">
            <div className="component-container container" id="coming-next">
                <h2 className="section-heading">404 NOT FOUND</h2>
                <p>
                  Navigate to the <a href={"/"}>main page</a>
                </p>
            </div>
        </div>
      </div>
    );
  }
}

export default NotFound;

/**
 * Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
 * <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
 */