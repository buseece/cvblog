import React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <footer>
          <div className="footer-copyright text-center py-3">
            <div className="footer-line">
              Developed by <a href="https://www.linkedin.com/in/buseeceguldiken/"> Buse Ece Güldiken </a>
            </div>
            <div className="footer-line">
              <a href="https://github.com/buseece/cvblog">
                <i class="fa fa-github"></i>
                View on Github
              </a>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;

