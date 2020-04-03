import React from 'react';

class ResumeItem extends React.Component {
  
 render() {
    return (
            <div className="row pt-2"> 
                <div><img style={{height:"60px"}} src={process.env.PUBLIC_URL + this.props.imgLink} alt="logo"/></div>
                <div className="col-lg-8 mb-2 dark-text">
                    <span className="time">{this.props.time}</span>
                    <h6 className="resume-item-title" style={{fontWeight:"600"}}>{this.props.title}</h6>
                    {this.props.subInfo1 ? 
                        <p style={{fontWeight:"600"}}>{this.props.subInfo1}</p> 
                    : ""}
                    <p>
                        {this.props.subInfo2 ? 
                            <span style={{fontWeight:"600"}}>{this.props.subInfo2}</span>
                        : ""}
                        {this.props.text}
                    </p>
                </div>
            </div>

    );
  }
}

export default ResumeItem;


