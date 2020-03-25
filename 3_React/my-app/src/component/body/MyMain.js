import React, { Component } from 'react';
import List from './List'
class MyMain extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    // console.log(this.props.ary)
    const {ary,pchecked,premoveList,retxt} = this.props;
    let list = null;
    if(ary.length){
      list = ary.map(item => {
        return (
          <List {...{
            key:item.id,
            txt:item.txt,
            checked:item.checked,
            pchecked,
            id:item.id,
            premoveList,
            retxt
          }} />
        )
      })
    }
    
    return (
      <section className="main">
          <input className="toggle-all" type="checkbox" />
          <ul className="todo-list">
              {list}
          </ul>
      </section>
    );
  }
}
 
export default MyMain;