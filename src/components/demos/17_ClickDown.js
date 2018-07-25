import React, { Component } from "react";

class ClickDown extends Component {
  state = {};
  render() {
    return (
      <div>
        <a
          href={"/download/1c63715d-c9c4-4a7d-99e6-aa69809f1ce3.pdf"}
          // download="深入react技术栈.pdf"
        >
          深入react技术栈.pdf
        </a>
        <img src={"/download/it/u=4135158290,2541209692&fm=27&gp=0.jpg"} />
        <a
          href={"/download/1c63715d-c9c4-4a7d-99e6-aa69809f1ce3.pdf"}
          download="深入react技术栈.pdf"
        >
          点我下载
        </a>
      </div>
    );
  }
}

export default ClickDown;
