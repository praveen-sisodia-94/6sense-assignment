import React from 'react';

class Tasks extends React.Component {

    closeCallback = () => {
        this.props.valueAddedCallback();
    }

    render() {
        return (
            <div>
                <h3> Following required functionalities are handled : </h3>

                <ol>
                    <li>Show Todo List</li>
                    <li>Add New Todo task</li>
                    <li><b>Re-ordering todos by arrow up and down buttons</b></li>
                </ol>

                <h4>Additional functionalities added : </h4>
                <ol>
                    <li>Search Functionality</li>
                    <li><b>Customized search </b>[User can filter out the records depending upon different properties <br />(heading,description,time) by choosing it from dropdown. ]</li>
                    <li>Project's self description through this current popup</li>
                    <li>Edit todo</li>
                    <li>6sense logo</li>

                </ol>

                <input className="cancel-button" type="button" onClick={this.closeCallback} value="Close" />            </div>
        );
    }

}

export default Tasks;