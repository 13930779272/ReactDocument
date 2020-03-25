import React, { Component } from 'react';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount(){
    const {location:{search}} = this.props;
    if(search === '?to=public'){
        console.log('请求接口1')
    }else if(search === '?to=about'){
        console.log('请求接口2')
    }else{
        console.log('不请求');
    }
}
  render() { 
    return (
      <div>Home</div>
    );
  }
}
 
export default Home;