import React, {Component} from 'react';

export class AutoCompleteComponent extends Component{
    constructor(props) {
        super(props);
    }

    get value(){
        return this.refs.inputResort.value;
    }

    set value(inputValue){
        this.refs.inputResort.value = inputValue;
    }
    render() {
        return (
            <div className="autocomplete">
                <input
                    ref="inputResort"
                    list="list-resorts"
                    type="text" />
                <datalist id="list-resorts">
                    {this.props.options.map(
                        (opt, i) => <option className="suggestions" key={i}>{opt}</option>
                    )}
                </datalist>
            </div>
        );
    }
}