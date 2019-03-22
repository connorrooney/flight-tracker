import React, { Component } from 'react';
import ShortInfo from '../ShortInfo/ShortInfo'
import './InfoCard.css';

class InfoCard extends Component {

    speedCalc(mps) {
        let displaySpeed = Math.floor((mps * 2.237));
        return displaySpeed;
    }

    climbCalc(climb) {
        let displayClimb = Math.floor((climb * 3.281));
        return displayClimb;
    }

    altCalc(m) {
        let displayAlt = Math.floor((m * 3.281));
        return displayAlt;
    }

    render() { 
        return (
            <div className="infoCardCont">

                <ShortInfo departure="MCR" arrival="AMS" flightID="EZY3001"/>

                <div className="infoCardTime">
                    <div className="departureTime">
                        <h1>Departed</h1>
                        <h2>{this.props.departureTime}</h2>
                    </div>

                    <div className="arrivalTime">
                        <h1>Arrival</h1>
                        <h2>{this.props.arrivalTime}</h2>
                    </div>
                </div>

                <div className="infoCardMovement">
                    <div className="flightSpeed">
                        <h1>Speed</h1>
                        <h2>{this.speedCalc(216)}<sub>mph</sub></h2>
                    </div>

                    <div className="flightAlt">
                        <h1>Altitude</h1>
                        <h2>{this.altCalc(3962)}<sub>ft</sub></h2>
                    </div>
                </div>

                <div className="infoCardTrack">
                    <div className="trackString">
                        <h1>Track</h1>
                        <h2>{this.props.track}º</h2>
                    </div>

                    <div className="trackGraphicCont">
                    <i className="fas fa-plane trackIcon"></i>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default InfoCard;