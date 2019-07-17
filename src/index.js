import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render () {
        return (
            <h1>My Todo App</h1>
        )
    }
}

class NewTodo extends React.Component {
    input = React.createRef();
    // TODO: Find out how to do this using a normal function, rather than arrow function
    addTodo = event => {
        event.preventDefault();
        console.log(this.input.current.value);
        let newOne = this.input.current.value;
    };

    render () {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input type="text" ref={this.input} />
                    <button type="submit">Add a ToDo</button>
                </form>
            </div>
        )
    }
}

class App extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <NewTodo />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

