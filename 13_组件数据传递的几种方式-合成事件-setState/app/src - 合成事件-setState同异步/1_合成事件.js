import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <button onClick={(ev) => {
          /*
					 * REACT中的事件是合成事件 我们直接打印ev是看不到想要的东西的，所以ev.persist()就能看到想看的东西了，但是我们用的时候直接打印是课打印出来的
					 * 底层源码上是基于事件委托把所有的事件进行代理的（跨平台、跨终端） =>事件对象也是自己额外单独处理了
					 */
          ev.persist()
          console.log(ev)
          console.log(ev.target)
        }}>按钮</button>
      </div>
    );
  }
}



ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
