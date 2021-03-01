const defaultState = {
  inputValue : 'hello jspang',
  list:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action)=>{
  //console.log(state,action); // 结合log看懂action传过来了
  if (action.type==='change_input'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type==='add_item'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  return state;
}

//react-redux
