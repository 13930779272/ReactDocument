import React, { Component } from 'react';
class MyFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let {hash} = this.props
    return (
      <footer className="footer">
        <span className="todo-count">
        <strong>{this.props.num}</strong>
          <span>条未选中</span>
          </span>
          <ul 
              className="filters"
          >
              <li>
                  <a 
                      href="#/all" 
                      className={hash==='/all'?'selected':''}
                      onClick={() => {this.props.rehash("/all")}}
                  >全部</a>
              </li>
              <li>
                  <a 
                      href="#/unchecked" 
                      onClick={() => {this.props.rehash("/unchecked")}}
                      className={hash==='/unchecked'?'selected':''}
                  >未选中</a>
              </li>
              <li>
                  <a 
                      href="#/checked"
                      className={hash==='/checked'?'selected':''}
                      onClick={() => {this.props.rehash("/checked")}}
                  >已选中</a>
              </li>
          </ul>
      </footer>
    );
  }
}
 
export default MyFooter;