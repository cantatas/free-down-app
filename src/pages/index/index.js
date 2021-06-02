
import React from 'react';
import './index.css';

class IndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isHot : true
    }
    this.doDemo = this.doDemo.bind(this)
  }
   doDemo(params) {
    console.log('ddd')
  }
  render(){
    console.log(this)
    return (
      <div onClick={this.doDemo} className="index-page">
        我是index类组件{this.state.isHot ? '1':'222'}
      </div>
    ) 
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
