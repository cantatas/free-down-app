

import React from 'react';
import './index.scss';

class Nav extends React.Component{

  render(){
    return (
      <div className="nav-component">
        <div className="nav-group">
          <div className="nav-title">
            开发指南
          </div>
          <div className="nav-item">
            <a onClick={(e) => this.gotoTitle('introduce',e)} href="#introduce">介绍</a>
          </div>
          <div className="nav-item">
            <a onClick={(e) => this.gotoTitle('quickstart',e)} href="#quickstart">快速上手</a>
          </div>
        </div>


        <div className="nav-group">
          <div className="nav-title">
            主题配置
          </div>
          <div className="nav-item">
            <a href="">样式</a>
          </div>
          <div className="nav-item">
            <a href="">颜色</a>
          </div>
        </div>

        <div className="nav-group">
          <div className="nav-title">
            下载链接配置
          </div>
          <div className="nav-item">
            <a href="">Android</a>
          </div>
          <div className="nav-item">
            <a href="">iOS</a>
          </div>
        </div>

      </div>
    ) 
  }

  state = {

  }

  gotoTitle = (id,e) => {
    
    e.preventDefault();
  }

}


export default Nav;
