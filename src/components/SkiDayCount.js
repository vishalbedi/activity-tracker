import React from 'react';
import PropTypes from 'prop-types'
import '../stylesheets/ui.scss';

import { MdTerrain } from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";
import {FaCalendarAlt} from "react-icons/fa";

export class SkiDayCount extends React.Component {
    constructor(props) {
        super(props);
    }

    static percentTODecimal(decimal){
        return (Math.round(decimal * 10000)/100 + '%');
    }

    static calculateGoalProgress(total, goal){
        return SkiDayCount.percentTODecimal(total/goal);
    }

    render() {
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                    <FaCalendarAlt/>
                    <span> days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder}</span>
                    <TiWeatherSnow/>
                    <span>  days</span>
                </div>
                <div className="backcountry-days">
                    <span>{this.props.backcountry}</span>
                    <MdTerrain/>
                    <span>hiking day</span>
                </div>
                <div>
                    <span>
                        {SkiDayCount.calculateGoalProgress(this.props.total, this.props.goal)}
                    </span>
                </div>
            </div>
        );
    }
}

SkiDayCount.defaultProps = {
    total:50,
    goal:80,
    backcountry:12,
    powder:38
};

SkiDayCount.propTypes = {
    total: PropTypes.number,
    goal:PropTypes.number,
    backcountry:PropTypes.number,
    powder:PropTypes.number
};