import React from 'react';

class Interest extends React.Component {
  
 render() {
    return (
        <div className="col-lg-4 mb-4 grid-margin dark-text">
            <div className="card h-100" >
                <div className="card-body text-left" >
                    <div className="card-body-text">
                        <div className="card-logo pb-4">
                            <img style={{height:"60px"}} src={process.env.PUBLIC_URL + this.props.imgLink} alt=""/>
                        </div>
                        <h5>{this.props.title}</h5>
                        <p className="card-text">
                            {this.props.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Interest;


