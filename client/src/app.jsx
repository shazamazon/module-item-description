import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    axios.get('/item')
    .then((response) => {
      this.setState({
        magic: response.data,
      }, () => console.log(this.state.magic))
    })
  }

  render() {
    return (
      <div>Hello from React!</div>
    )
  }

}



ReactDOM.render(<App />, document.getElementById("app"));