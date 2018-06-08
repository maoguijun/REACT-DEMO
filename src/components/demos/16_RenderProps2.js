import React, { Component } from "react";
// import Keypress from 'react-keypress'

class RenderProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue:"<a href='https://www.baidu.com'>百度</a>",
      html:''
    };
  }
  renderfun = () => {
    const {html} = this.state
    let mom = document.getElementById('mom')
    if (mom) {
      mom.innerHTML = html
    }
    return (
      <div style={{ fontSize: 30, color: "#e0301e", fontWeight: 400 }} id='mom'>
        {'这个是用render方法渲染出来的'}
      </div>
    )
  }
  render() {
    const { textareaValue } = this.state;
    return (
      // 这个还记得是什么吗？
      <React.Fragment>
        <textarea
          value={textareaValue}
          cols={100}
          rows={5}
          // onKeyPress={Keypress('ctrl enter',() => this.setState({html:textareaValue}))}
          onChange={e => this.setState({textareaValue:e.target.value})}
        >
        </textarea>
        <button onClick={() => this.setState({html:textareaValue})}>
          {"添加render"}
        </button>
        <Text render={this.renderfun} />
      </React.Fragment>
    );
  }
}

const Text = props => {
  if (props.render) {
    return props.render();
  }
};

export default RenderProps;
