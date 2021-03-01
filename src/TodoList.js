import React from 'react';
import { connect } from 'react-redux';

// react-redux可以把有状态组件变成无状态组件。

const TodoList = (props)=>{
  let {inputValue,inputChange,clickButton,list} = props;
  return ( 
  <div>
    <div>
      <input 
        value={inputValue} 
        onChange={inputChange} 
      />
      <button onClick={clickButton}>提交</button>
    </div>
    <ul>
      {
        list.map((item,index)=>{
          return (<li key={index}>{item}</li>)
        })
      } 
    </ul>      
  </div> );
}

const stateToProps = (state)=>{
  return {
    inputValue: state.inputValue,
    list:state.list
  }
}

const dispatchToProps = (dispatch)=>{
  return {
    inputChange(e){
      //console.log(e.target.value);
      let action = {
        type:'change_input',
        value:e.target.value
      };
      dispatch(action);
    },

    clickButton(){
      let action = {type:'add_item'};
      dispatch(action);
    }
  }
}

export default connect(stateToProps,dispatchToProps)(TodoList);
//连接器 connect
 //stateToProps,第一个参数是映射props
 //dispatchToProps,第二个参数是映射方法的
//第三个参数是组件

