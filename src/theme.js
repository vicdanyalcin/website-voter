import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  .site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
  }
  .ant-menu.ant-menu-dark {
    background: #F34E24;
    color:white;
  }
  .ant-layout-header {
    height: 74px;
    padding: 0 50px;
    color: rgba(0,0,0,0.85);
    line-height: 64px;
    background: white;
  }
  #components-layout-demo-fixed .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.2);
  }
  .site-layout .site-layout-background {
    background: #fff;
  }
  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
  .header-fixed {
    h4 {
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
`