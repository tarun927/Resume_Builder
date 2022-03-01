const initialState = 'Stellar James';
const namereducer = (state = initialState ,action)=>{
    if(action.type=="setname"){
        return action.payload;
    }else{
        return state;
    }
    
}
export default namereducer;