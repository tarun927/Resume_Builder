const initialState={
    color:'1',
    fontSize:2,
    layout:1,
    fontStyle:1
   
}
const finalReducer = (state=initialState,action) => {
     if(action.type == "UPDATE"){
         return action.payload
     }else{
         return state;
     }
}
export default finalReducer