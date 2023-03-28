import React from "react";

export default function ListChild({ title, content }) {
  return (
    <div>
      <hr />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
// import React, { Component } from "react";

// export default class ListChild extends Component {
//   render() {
//     return (
//       <div>
//         <h2>{this.props.title}</h2>
//         <p>{this.props.content}</p>
//       </div>
//     );
//   }
// }
