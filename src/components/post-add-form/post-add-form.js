import React, {Component} from "react";

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange =this.onValueChange.bind(this);
    } 

    onValueChange(e) {
        this.setState({
           text: e.target.value 
        })
    }

    onSubmit() {
        this.props.onAdd(this.state.text)
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Изложи свои мысли..."
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                />
                <button
                    type="submit"
                    className="btn btn-info">
                    Добавить
                </button>
            </form>
        )
    }

}