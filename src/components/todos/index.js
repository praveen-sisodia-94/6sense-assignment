import React from 'react';
import Tasks from './tasks';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-70%, -50%)',
        borderRadius: '30px',
        background: '#acc2d4',
        border: '3px solid rgb(113 99 99)'
    }
};

class TODOList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: 'heading',
            showProjectFunctionalities: false,
            initialValues: this.props.todos,
        }
    }

    swapElement(array, indexA, indexB) {
        
             var tmp = array[indexA];
            array[indexA] = array[indexB];
            array[indexB] = tmp;    
        return array;
      }


    componentDidUpdate(prevProps) {
        if (prevProps.todos.length !== this.props.todos.length) {
            this.setState({
                initialValues: this.props.todos
            });
        }
    }

    applyCustomFilter = (e) => {
        let allTodos = this.props.todos;
        let filteredTodo = allTodos.filter(todo => {
            return this.state.selectedFilter === 'description' ?
                todo.description.toString().toLowerCase().includes(e.target.value.toLowerCase()) :
                this.state.selectedFilter === 'time' ?
                    todo.time.toString().toLowerCase().includes(e.target.value.toLowerCase()) :
                    todo.heading.toString().toLowerCase().includes(e.target.value.toLowerCase())
        });
        this.setState({ initialValues: filteredTodo });

    }

    showProjectFunctionalities = () => {
        this.setState({
            showProjectFunctionalities: true
        });
    }

    closeAddPopup = () => {
        this.setState({
            showProjectFunctionalities: false
        });
    }
    setFilterType = (e) => {
        this.setState({ selectedFilter: e.target.value })
    }
    openEditPopup = (e) => {
        this.props.editData(e);
    }

    shiftUp =(index) => {
        if(index !==0) {        // this check is for not rearraging up in case of first element
            this.setState({
                initialValues : this.swapElement(this.state.initialValues , index , index-1)
            });
        }
        
    }
    shiftDown =(index) => {
        if(index !== this.state.initialValues.length -1) {     // this check is for not rearraging down in case of last element
            this.setState({
                initialValues : this.swapElement(this.state.initialValues , index , index+1)
            });
        }
        
    }
    render() {
        return (
            <div>
                <h3>TODO List</h3>
                <div><span><b>Search TODO by :</b>  <select name="seachType" id="filters" onChange={this.setFilterType}>
                    <option value="heading">Heading</option>
                    <option value="description">Description</option>
                    <option value="time">Time</option>
                </select>
                </span>
                    <span className="search-box"><input type="text" placeholder="Enter text here..." onChange={this.applyCustomFilter} />
                    </span>
                </div>
                <div className="dev-info" onClick={this.showProjectFunctionalities}>Click here to view all implemented functionalities</div>

                {this.state.showProjectFunctionalities &&
                    <Modal isOpen={this.state.showProjectFunctionalities} style={customStyles}>
                        <Tasks valueAddedCallback={this.closeAddPopup} />
                    </Modal>}
                <div>
                    {this.state.initialValues.map((todo, index) =>
                        <div className="todoList">
                            <div>
                                <span className="todo-head"><b>{todo.heading}</b>
                                </span>
                                <span className="arrow up" onClick={() => {this.shiftUp(index)}}>
                                </span>
                            </div>
                            <div><b>Description : </b>{todo.description}
                            </div>
                            <div>Time :{todo.time}
                                <span className="arrow down" onClick={() => {this.shiftDown(index)}}>
                                </span> </div>
                            <br />
                            <button onClick={() => this.openEditPopup(todo.id)} className="link-edit">Update me !!</button>

                        </div>)}
                </div>
            </div>
        );
    }

}


export default TODOList;