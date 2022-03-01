const initialState = [{skill: 'Java' , num: 1 },{skill: 'OOPS' , num: 2 },{skill: 'JavaScript' , num: 3 },
{skill: 'Java' , num: 4 },{skill: 'OOPS' , num: 5 },{skill: 'JavaScript' , num: 6 },
{skill: 'Java' , num: 7 },{skill: 'OOPS' , num: 8 },{skill: 'JavaScript' , num: 9 }]
const skillReducer=(state=initialState,action)=>{
    if(action.type=="setSkill"){
        return action.payload
    }else{
        return state
    }
}
export default skillReducer;