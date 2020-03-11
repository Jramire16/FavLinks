import React from 'react';
import Table from './Table';
import Form from './Form';
import { render } from 'react-dom';
// import Table from './Table';
// import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = {
            favLinks: [],
            filter: ''

        }
       /* this.handleSubmit = this.handleSubmit.bind(this)
        this.removeCharacter = this.removeCharacter.bind(this)*/
        // this.removeLink = this.removeLink.bind(this)
        // this.favLink = this.favLink.bind(this)

    }
    
    favLink(event) {
        this.props.favLink(this.state.favLink)
        this.setState({
            newLink: ''
        })
    }

    removeCharacter = function(index) {
        
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */ 
       this.props.favLink(this.state.favLinks)
       this.setState((state) => ({
           favLinks: state.favLinks.filter((value, i) => i !== index)
       }))
       

    }
    // removeLink: function([favLinks]) {
    //     favLinks = [];  
    //     favLinks.filter(index, 1);
    //     this.setState({favLinks});

    // }
    // removeLink = favLink => {
    //     this.favLink(this.state.favLinks)
    //     this.setState((state) => ({
    //         favLinks.filter
    //     }))
    // }
    
    // removeLink = favLink => {
    //     this.favLink.map(this.state.favLinks)
    //     this.setState((state) => ({
    //         favLinks: state.favLinks.splice((row, i) => i !== favLink)
    //     }))
    // }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState((state) => ({
        favLinks: state.favLinks.concat([favLink])
    }))
}

    

    render() {
        
        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                    <Table linkData={this.state.favLinks} removeLink={this.state.removeCharacter}/>
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                    <Form handleSubmit={this.handleSubmit}/>
            </div>
            
        );
    }
}



export default LinkContainer;