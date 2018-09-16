import React from 'react';
import '../stylesheets/ui.scss';
import {MdTerrain} from 'react-icons/md';;
import {FaCalendarAlt} from "react-icons/fa";
import {TiWeatherSnow} from 'react-icons/ti';

import {SkiDayRow} from './SkiDayRow';
import Link from "react-router-dom/es/Link";


export class SkiDayList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const filteredDays =  (!this.props.filter ||
            !this.props.filter.match(/powder|backcountry/)) ?
            this.props.days :
            this.props.days.filter(day=>day[this.props.filter]);
        return (
            <div className="ski-day-list">
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Resort</th>
                        <th>Powder</th>
                        <th>Backcountry</th>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Link to="/list-days">All Days</Link>
                            <Link to="/list-days/powder">Powder Days</Link>
                            <Link to="/list-days/backcountry">Backcountry Days</Link>
                        </td>
                    </tr>
                    </thead>

                    <tbody>
                    {filteredDays.map((day, i) =>
                        <SkiDayRow key={i}
                                   {...day} />
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

SkiDayList.propTypes = {
    days: function (props) {
        if(!Array.isArray(props.days)){
            return new Error(
                "SkiDayList should be an array"
            )
        }else if(!props.days.length){
            return new Error(
                "Should not be null"
            )
        }else {
            return null;
        }
    }
};