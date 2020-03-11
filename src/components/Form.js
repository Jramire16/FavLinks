import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
        this.state = {
            name: "",
            URL: ""
        }

    }
    urlChange = (event) => {
        this.setState({
            URL: event.target.value,
        })
    }

    updateNameLabel = (event) => {
        this.setState({
            name: event.target.value,
            
        })
    }

    /*handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        
       this.props.addNew(this.state.newLink)
            this.setState({
            newLink: ''
            })
        }*/
            

        onFormSubmit = (event) => {
            // to prevent page reload on form submit
            event.preventDefault();
            console.log(this.state.name)       
            /*
                TODO - Logic for calling props to handle submission and setting state changes
            */
            this.props.handleSubmit(this.state)
        }

        render() {

            return(
                <form onSubmit={this.onFormSubmit}>
                    {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                    <label for="name"> Name </label><br/>
                    <input
                        type="text"
                        value={this.state.favLink}
                        onChange={this.updateNameLabel}
                />

                <button type="submit">Submit</button>
                    <label for="URL"> URL </label>
                    <input
                        type="url"
                        value={this.state.favLink}
                        onChange={this.updateNameLabel}
                />
                <button type="submit">Submit</button>
                </form>
            )
        
        }
    }

    export default Form;
