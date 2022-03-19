let islog = localStorage.getItem('isLogin')==null? 0:1 ;
let docId = localStorage.getItem('doc_id')==null? "":localStorage.getItem('doc_id') ;
let emailL = localStorage.getItem('email')==null? "":localStorage.getItem('email') ;
let nameL = localStorage.getItem('name')==null? "":localStorage.getItem('name') ;
const initialState={
    isLogin:islog,
    doc_id:docId,
    email:emailL,
    name:nameL
}

const userReducer=(state=initialState,action)=>{
    if(action.type=="CHANGEUSER"){
        return action.payload
    }else{
        return state
    }
}
export default userReducer;