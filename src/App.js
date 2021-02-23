import React from 'react';
import './App.css';
import TODOList from './components/todos/index';
import AddTODO from './components/todos/addTODO';
import Modal from 'react-modal';
import companyLogo from '../src/resources/6senselogo.jpg';
import Constants from './helper/constants';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false,
      mode: 'add',
      selectedTodo: {},
      todos: [
        {
          'id': 1,
          'heading': 'First Todo',
          'description': 'This is your first TODO description.',
          'time': '10AM'
        },
        {
          'id': 2,
          'heading': 'Second Todo',
          'description': 'This is your second TODO description.',
          'time': '11AM'
        },
        {
          'id': 3,
          'heading': 'Third Todo',
          'description': 'This is your third TODO description.',
          'time': '12PM'
        },
        {
          'id': 4,
          'heading': 'Forth Todo',
          'description': 'This is your forth TODO description.',
          'time': '1PM'
        }
      ]
    }
  }


  addTodo = (todo, mode) => {

    if (mode === 'edit') {
      this.state.todos.forEach(function (obj) {
        if (obj.id === todo.id) {
          obj.heading = todo.heading;
          obj.description = todo.description;
          obj.time = todo.time;
        }
      });

      this.setState();
    }
    else {
      this.state.todos.push(todo);
      this.setState();

    }
  }
  openAddPopup = () => {
    this.setState({
      showAdd: true
    });
  }

  openEditPopup = (id) => {

    let selectedTodo = this.state.todos.filter(todo => {
      return todo.id === id
    });

    this.setState({
      selectedTodo: selectedTodo[0],
      mode: 'edit',
      showAdd: true
    });
  }



  closeAddPopup = () => {
    this.setState({
      showAdd: false,
      showPopup: false
    });
  }


  render() {
    return (
      <div className="App">
        <div className="dev-info"><b>{Constants.DEVELOPER_INFO}</b><br /><a href="https://www.linkedin.com/in/praveentcs/">View Profile</a></div>
        <div>
          <img className="App-logo" src={companyLogo} alt={Constants.__LOGO} />
          <div>
            <button className="link" onClick={this.openAddPopup}>{Constants.ADD_BUTTON_TEXT}</button>

          </div>
        </div>
        {this.state.showAdd &&
          <Modal isOpen={this.state.showAdd} style={customStyles}>
            <AddTODO mode={this.state.mode} preFilledValuesForEdit={this.state.selectedTodo} addTodo={(todo, mode) => this.addTodo(todo, mode)} valueAddedCallback={this.closeAddPopup} />
          </Modal>}
        {/* <button className="link" onClick={this.openAddPopup}><u>Add New TODO</u></button> */}
        {/* {this.state.showAdd && <AddTODO addTodo = {(todo) => this.addTodo(todo)} valueAddedCallback={this.closeAddPopup} />} */}
        <TODOList editData={(id) => this.openEditPopup(id)} todos={this.state.todos} />
      </div>
    );
  }
}
export default App;
