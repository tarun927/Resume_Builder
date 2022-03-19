const initialState=1
const templateReducer=(state=initialState,action)=>{
     if(action.type=="CHANGETEMP"){
        return action.payload
     }else{
         return state
     }
}
export default templateReducer