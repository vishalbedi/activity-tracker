import React, {Component} from 'react';
import PropType from 'prop-types'

export class AddDayForm extends Component{
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e){
        e.preventDefault();
        this.props.onNewDay({
            resort: this.refs.resort.value,
            date: this.refs.date.value,
            powder: this.refs.powder.checked,
            backcountry : this.refs.backcountry.checked
        });
        this.refs.resort.value = "";
        this.refs.date.value = "";
        this.refs.powder.checked = false;
        this.refs.backcountry.checked = false;
    }
    render() {
        const {resort, date, powder, backcountry} = this.props;
        return (
            <form className="add-day" onSubmit={this.submit}>
                <label htmlFor="resort">Resort Name</label>
                <input
                    ref="resort"
                    defaultValue={resort}
                    type="text"
                    id="resort"
                    required/>

                <label htmlFor="date">Date</label>
                <input
                    ref="date"
                    defaultValue={date}
                    type="date"
                    id="date"
                    required/>

                <div>
                    <input
                        ref="powder"
                        defaultChecked={powder}
                        type="checkbox"
                        id="powder" />
                    <label htmlFor="powder">Powder</label>
                </div>
                <div>
                    <input
                        ref="backcountry"
                        defaultValue={backcountry}
                        type="checkbox"
                        id="backcountry"/>
                    <label htmlFor="backcountrys">Backcountry</label>
                </div>
                <button>Add Day</button>
            </form>
        );
    }
}

AddDayForm.defaultProps={
    resort: "Shangri-La",
    date: "2018-04-02",
    powder: true,
    backcountry: false
};
AddDayForm.propTypes = {
    resort: PropType.string.isRequired,
    date : PropType.string.isRequired,
    powder : PropType.bool.isRequired,
    backcountry: PropType.bool.isRequired
};