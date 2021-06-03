
import React from 'react';
import './index.css';

class IndexPage extends React.Component{
  state = {

  }
  render(){
    return (
      <div onClick={this.goto} className="index-page">
      </div>
    ) 
  }
  goto = () => {
    
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
