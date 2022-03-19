const initialState ={
    name:"Stellar James",
    email:"",
    address:"",
    city:"",
    country:"",
    phone:""
}
 const homeReducer =(state=initialState,action)=>{
    if(action.type=="setHome"){
        return action.payload
    }else{
        return state
    }
}
export default homeReducer;