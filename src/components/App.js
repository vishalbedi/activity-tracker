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
                    resort: "Sunny-Valley",
                    date: "2018-3-2",
                    powder: false,
                    backcountry: true
                },
                {
                    resort: "La-Marla",
                    date: "2018-5-2",
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Bristol-Mountain",
                    date: "2018-6-3",
                    powder: true,
                    backcountry: false
                }
            ]
        };

        this.addDay = this.addDay.bind(this);
    }
    addDay(newDay){
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        })
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
                        <AddDayForm onNewDay={this.addDay}/> :
                        <SkiDayList days={this.state.allSkiDays} filter={this.props.match.params.filter}/>
                }
            </div>
        );
    }
}