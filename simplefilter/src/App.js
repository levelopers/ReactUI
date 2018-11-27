import React, { Component } from 'react';
import './App.css';
import FetchAPI from './component/fetchAPI'
import Login from './component/project1/Login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchData: []
    }
  }
  handleData = (data) => {
    console.log(data);

    this.setState({
      fetchData: data
    })
  }

  Fetch = () => {
    const dataState = this.state.fetchData
    //setstate in  render
    return (
      <div className="App">
        <FetchAPI requireData={data => this.handleData(data)} />
        <button className="btn btn-danger">test button</button>
        <div >
          {dataState ?
            (dataState.map(stu =>
              <div className="card" key={stu.id}>
                <p>{stu.firstName} {stu.lastName}</p>
              </div>
            ))
            : (
              <div>
                fail
                      </div>
            )}
        </div>
      </div>
    )
  }


render() {
  return (
    <div>
      {/* <this.Fetch /> */}
      <Login />

    </div>
  )
}
}



export default App;
