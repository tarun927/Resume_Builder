const initialState = {
    school:"",
    city:"",
    country:"",
    degree:"",
    eduMonth:"",
    eduYear:""
}
const eduReducer = (state=initialState,action)=>{
    if(action.type=="setEdu"){
        return action.payload
    }else{
        return state
    }
}
export default eduReducer;