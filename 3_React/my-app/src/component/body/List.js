import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onoff:false,
      esc:false
    }
  }
  render() {
    // console.log(this.props)
    const {txt,checked} = this.props
    let {onoff} = this.state
    let sclass = checked?'completed':''
    if(onoff){
      sclass += ' editing'
    }
    return (
      <li className={sclass}>
          <div className="view">
              <input className="toggle" type="checkbox" checked={checked} onChange={this.changechecked} />
              <label onDoubleClick={this.db}>{txt}</label>
              <button className="destroy" onClick={this.remove}></button>
          </div>
          <input 
              className="edit"
              ref="edit"
              onBlur={this.blur}
              onKeyUp={this.keyup}
          />
      </li>
    );
  }
  changechecked=() => {
    const {pchecked,id} = this.props
    pchecked(id)
  }
  remove = () => {
    const {id,premoveList} = this.props
    console.log(id)
    premoveList(id)
  }
  db = (ev) => {
    this.setState({onoff:!this.state.onoff},() => {
      // console.log(ev.tatget)
      this.refs.edit.value = this.props.txt
      console.dir(this.refs.edit)
      this.refs.edit.select()
    })
  }
  blur = () => {
    const {esc} = this.state
    if(esc){
      this.setState({esc:false})
      return
    }
    const {retxt,id,txt} = this.props
    let newVal = this.refs.edit.value.trim()
    // 优化内容不变时不会触发
    if(newVal && newVal !== txt){
      retxt(id,newVal)
    }
    this.setState({onoff:false})
  }
  keyup = (ev) => {
    if(ev.keyCode === 27){
      this.setState({onoff:false,esc:true})
    }
  }
}
 
export default List;