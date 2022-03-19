const initialState = [{skill: '' , num: 1 }]
const skillReducer=(state=initialState,action)=>{
    if(action.type=="setSkill"){
        return action.payload
    }else{
        return state
    }
}
export default skillReducer;