import React from 'react';
import '../stylesheets/ui.scss'
import {MdTerrain} from 'react-icons/md';;
import {FaCalendarAlt} from "react-icons/fa";
import {TiWeatherSnow} from 'react-icons/ti';
import PropTypes from "prop-types";

export class SkiDayRow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.date.getMonth() + 1}/{this.props.date.getDay()}/
                    {this.props.date.getFullYear()}
                </td>
                <td>
                    {this.props.resort}
                </td>
                <td>
                    {(this.props.powder)? <TiWeatherSnow/>: null}
                </td>
                <td>
                    {(this.props.backcountry) ? <MdTerrain/> : null}
                </td>
            </tr>
        );
    }
}

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
};