
import React from 'react';
import './index.scss';

class IndexPage extends React.Component{
  state = {

  }
  render(){
    return (
      <div onClick={this.goto} className="index-page">
        我是index函数组件 <span>11</span>
      </div>
    ) 
  }
  goto = () => {
    console.log('11 ----------------> ',11223)
  }
}

// function IndexPage() {
//   return (
//     <div className="index-page">
//       我是index函数组件
//     </div>
//   );
// }

export default IndexPage;
