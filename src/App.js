import React, { Component } from 'react';
import Modal from './Modal';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Click me
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Hey there!! My name is Fiza Tahreen :)
        </Modal>
      </div>
    );
  }
}
export default App;