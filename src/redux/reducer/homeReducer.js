const initialState ={
    name:"",
    email:"",
    address:"",
    city:"",
    country:"",
    phone:"",
    isLogin:0
}
 const homeReducer =(state=initialState,action)=>{
    if(action.type=="setHome"){
        return action.payload
    }else{
        return state
    }
}
export default homeReducer;