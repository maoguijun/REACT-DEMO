import React, { Component } from "react";

class ClickDown extends Component {
  state = {};
  render() {
    return (
      <a
        // href={
        //   "http://localhost/download/1c63715d-c9c4-4a7d-99e6-aa69809f1ce3.pdf"
        // }
        href={"http://www.baidu.com"}
        download="深入react技术栈.pdf"
      >
        点我下载
      </a>
    );
  }
}

export default ClickDown;
