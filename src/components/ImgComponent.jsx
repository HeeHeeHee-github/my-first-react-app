// 클래스형 컴포넌트
import React, { Component } from "react";

class ImgComponent extends Component {
  render() {
    return <img src="/ato.jpg" width="500" alt="강아지" />;
  }
}

// 함수형 컴포넌트
// import puppy from "../images/puppy.png";

// function ImgComponent() {
//   return <img src={puppy} width="300" alt="강아지" />;
// }

export default ImgComponent;
