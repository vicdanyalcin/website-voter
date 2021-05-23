import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  .site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
  }

  .ant-menu.ant-menu-dark {
    background: #F34E24;
    color: white;
  }

  .ant-layout-header {
    height: 74px;
    padding: 0 50px;
    color: rgba(0, 0, 0, 0.85);
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

  .ant-message-notice-content {
    color: #2BB555;
    background-color: #D4FFD1;
    border-style: solid;
    border-color: #2BB555;
    border-width: 0.5px;
    border-radius: 4px;
    font-size: 16px;

  }

  .ant-modal-header {
    padding: 16px 24px;
    background: rgba(0, 0, 0, 0.85);
    color: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
  }

  .ant-modal-title {
    margin: 0;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word;
  }

  .ant-btn {
    color: #fff;
    background: rgba(0, 0, 0, 0.85);
    border-color: rgba(0, 0, 0, 0.85);
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    border-radius: 40px;
    font-weight: 600;
  }

  .ant-btn-primary {
    color: #fff;
    background: rgba(0, 0, 0, 0.85);
    border-color: rgba(0, 0, 0, 0.85);
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    border-radius: 40px;
    font-weight: 600;


  }

  .ant-btn-primary:hover {
    color: #fff;
    background: rgba(99, 88, 88, 0.7);
    border-color: rgba(0, 0, 0, 0.85);
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    border-radius: 40px;
    font-weight: 600;


  }

  .ant-btn-text {
    color: gray;
    background: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  .ant-modal-footer {
    padding: 10px 16px;
    text-align: center;
    background: transparent;
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 2px 2px;
  }

  .ant-modal-close-x {
    display: block;
    width: 56px;
    height: 56px;
    font-size: 16px;
    font-style: normal;
    line-height: 56px;
    text-align: center;
    text-transform: none;
    text-rendering: auto;
    color: white;
  }

  .ant-list-item .ant-list-item-extra {
    margin-right: 10px;
  }

  .ant-list-lg .ant-list-item {
    padding: 12px 0;
  }
  .delete-btn {
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    position:absolute;
    right:0;
    top: 20%;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .ant-list-item-no-flex :hover {
    cursor:pointer;
  }

  .ant-list-item  {
    position: relative;
  }
  .ant-list-item.ant-list-item-no-flex :hover .delete-btn, .ant-list-item.ant-list-item-no-flex:hover .delete-btn{     opacity: 1;
  ; }



`