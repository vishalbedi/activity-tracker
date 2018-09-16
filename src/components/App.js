import React from 'react';
import {Component} from 'react';
import {SkiDayList} from './SkiDayList';
import {SkiDayCount} from './SkiDayCount';
import {AddDayForm} from "./AddDayForm";
import {Menu} from "./Menu";

export class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            allSkiDays: [
                {
                    resort: "Shangri-La",
                    date: new Date("1/2/2018"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Sunny-Valley",
                    date: new Date("2/2/2018"),
                    powder: false,
                    backcountry: true
                },
                {
                    resort: "La-Marla",
                    date: new Date("3/2/2018"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Bristol-Mountain",
                    date: new Date("3/2/2018"),
                    powder: true,
                    backcountry: false
                }
            ]
        }
    }

    countDays(filter){
        return this.state.allSkiDays
            .filter((day) => (filter) ? day[filter] : day).length;
    }
    render() {

        return (
            <div className="app">
                <Menu/>
                {(this.props.location.pathname === "/") ?
                    <SkiDayCount total={this.countDays()}
                                 powder={this.countDays("powder")}
                                 backcountry={this.countDays("backcountry")}
                    /> :
                    (this.props.location.pathname === "/add-day") ?
                        <AddDayForm/> :
                        <SkiDayList days={this.state.allSkiDays} filter={this.props.match.params.filter}/>
                }
            </div>
        );
    }
}