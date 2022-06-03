
import './App.scss';
import axios from 'axios';
import React from 'react';

class App extends React.Component{
  state = {
    listUser: [ ]
  }

  async componentDidMount(){
    let res = await axios.get('https://reqres.in/api/users?page=2');
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : []
    })
    console.log('data', res)
  }

  render(){
    let { listUser } = this.state;
    return(
      <div>
        {listUser && listUser.map((item,key) =>(
          <div key={key}>
            <span>{item.email}</span>
            <span>{item.first_name}</span>
            <span>{item.last_name}</span>
            <img src={item.avatar} alt='img' />
          </div>
        ))}
        
      </div>
    )
  }
}

export default App;
