import React, {Component} from 'react'

import './post-add-form.css'
import { render } from 'node-sass'

export default class PostAddForm extends Component {

    constructor(props) {
        super(props)
        this.onValueChange =z
    }

    onValueChange(e) {
        console.log(e.target.value)
    }

    render() {
        const {onAdd} = this.props

        return (
            <form className="bottom-panel d-flex">
                <input 
                    type="text"
                    placeholder={"о чем вы думаете сейчас?"}
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                        Добавить</button>
            </form>
        )
    }

    
}