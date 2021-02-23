import React from 'react';

class AddTODO  extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.preFilledValuesForEdit && this.props.preFilledValuesForEdit.id ? this.props.preFilledValuesForEdit.id : '',
            heading:  this.props.preFilledValuesForEdit && this.props.preFilledValuesForEdit.heading ? this.props.preFilledValuesForEdit.heading : '',
            description:  this.props.preFilledValuesForEdit && this.props.preFilledValuesForEdit.description ? this.props.preFilledValuesForEdit.description : '',
            time:  this.props.preFilledValuesForEdit && this.props.preFilledValuesForEdit.time ? this.props.preFilledValuesForEdit.time : ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state,this.props.mode);
            this.props.valueAddedCallback();
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    closeCallback = (e) => {
        this.props.valueAddedCallback();
    }
    
    render() {
        return (
            <div>
                <h3>{this.props.mode==='add' ?'Add TODO' : 'Edit TODO'}</h3>

                <form className="form-main" onSubmit={this.handleSubmit} >
                    <input className="inputs" type='number' required name="id" placeholder='id' value={this.state.id} onChange={this.handleInputChange} />
                    <br />
                    <input className="inputs" type='text' required name="heading" placeholder='Heading' value={this.state.heading} onChange={this.handleInputChange} />
                    <br />
                    <input className="inputs" type='text' required name="description" placeholder='Description' value={this.state.description} onChange={this.handleInputChange} />
                    <br />
                    <input className="inputs" type='text' required name="time" placeholder='Time' value={this.state.time} onChange={this.handleInputChange} />
                    <br />
                    <br/>
                    <div className="btns">
                        <input type="submit" value="Save" />
                        <input className="cancel-button" type="button" onClick={this.closeCallback} value="Cancel" />
                    </div>
                </form>
            </div>
        );
    }

}

export default AddTODO;