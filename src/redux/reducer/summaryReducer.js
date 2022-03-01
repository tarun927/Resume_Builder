const initialState=''
const summaryReducer=(state=initialState,action)=>{
    if(action.type=="SETSUMMARY"){
        return action.payload
    }else{
        return state
    }
}
export default summaryReducer;