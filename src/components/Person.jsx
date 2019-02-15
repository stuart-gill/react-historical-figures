import React from "react";
import PropTypes from "prop-types";


class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullBioShown: false
        }
        this.handleClick = this.handleClick.bind(this);
    }




    handleClick() {
        if (this.state.fullBioShown) {
            this.setState({ fullBioShown: false });
        }
        else {
            this.setState({ fullBioShown: true });
        }

        console.log(this.state);
    }






    render() {



        let currentlyVisibleContent = null;
        if (this.state.fullBioShown == false) {
            currentlyVisibleContent =
            <div className="card">
                <img src={this.props.img} />
                <div>
                    <h2><b>{this.props.name}</b></h2>
                    <p>Years alive: {this.props.years[0]}-{this.props.years[1]}</p>
                    <p>Died at age: {this.props.years[1] - this.props.years[0]}</p>
                    <p onClick={this.handleClick}>Bio: {this.props.bio}</p>
                    
                </div>
            </div>
        } else {
            currentlyVisibleContent =
                <div className="card">
                    <img src={this.props.img} />
                    <div>
                        <h2><b>{this.props.name}</b></h2>
                        <p>Years alive: {this.props.years[0]}-{this.props.years[1]}</p>
                        <p>Died at age: {this.props.years[1] - this.props.years[0]}</p>
                        <p onClick={this.handleClick}>Bio: {this.props.bio}</p>
                        <p>Full Bio:</p>
                        <p>{this.props.fullbio}</p>
                    </div>
                </div>
        }

        return (
            <div>
                <style global jsx>
                    {`
        
                  .card{
                      text-align: center;
                      margin-left: 30px;
                      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                      transition: 0.3s;
                      width: 40%;
                  }      

                  .card:hover {
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                  }
                 
                  img {
                      border: 2px solid darkgrey;
                      max-width: 10vh;
                      max-height: 15vh; 
                      border-radius: 5px 5px 0 0;
                  }
                `}
                </style>
                {currentlyVisibleContent}
            </div>
        );










    }
}



Person.propTypes = {
    name: PropTypes.string.isRequired,
    years: PropTypes.arrayOf(Number).isRequired,
    bio: PropTypes.string.isRequired,
    fullbio: PropTypes.string.isRequired,
    img: PropTypes.string
};

export default Person;
