import React, {Component} from 'react';
import PropType from 'prop-types'

export class AddDayForm extends Component{
    render() {
        return (
            <form className="add-day">
                <label htmlFor="resort">Resort Name</label>
                <input type="text" id="resort" required/>

                <label htmlFor="date">Date</label>
                <input type="date" id="date" required/>

                <div>
                    <input type="checkbox" id="powder" />
                    <label htmlFor="powder">Powder</label>
                </div>
                <div>
                    <input type="checkbox" id="backcountry"/>
                    <label htmlFor="backcountrys">Backcountry</label>
                </div>

            </form>
        );
    }
}
AddDayForm.propTypes = {
    resort: PropType.string.isRequired,
    date : PropType.string.isRequired,
    powder : PropType.bool.isRequired,
    backcountry: PropType.bool.isRequired
};