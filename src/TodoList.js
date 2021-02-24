import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() { 
    return ( 
    <div>
      <div>
        <input />
        <button>提交</button>
      </div>
      <ul>
        <li>jspang</li>
      </ul>      
    </div> );
  }
}
 

