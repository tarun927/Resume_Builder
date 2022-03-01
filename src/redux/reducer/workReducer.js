const initialState = {
    job: "",
    company: "",
    city: "",
    country:"",
    startMonth: "",
    startYear: "",
    endMonth:"",
    endYear:"",
    jobDesc:""
}
const workReducer=(state=initialState,action)=>{
    if(action.type=='setWork'){
        return action.payload
    }else{
        return state
    }
}
export default workReducer;