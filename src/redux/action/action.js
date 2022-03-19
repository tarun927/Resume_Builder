export const namechange=(x)=>{
    return{
        type:"setname",
        payload:x
    }
}

export const homeChange=(obj)=>{
    return{
        type :"setHome",
        payload: obj
    }
}

export const workChange=(obj)=>{
    return{
        type:"setWork",
        payload:obj
    }
}

export const eduChange =(obj)=>{
    return{
        type:"setEdu",
        payload:obj
    }
}

export const skillChange=(obj)=>{
    return{
        type:"setSkill",
        payload:obj
    }
}

export const summaryChange=(str)=>{
    return{
        type:"SETSUMMARY",
        payload:str
    }
}

export const finalChange=(obj)=>{
    return{
        type:"UPDATE",
        payload:obj
    }
}

export const tempChange=(x)=>{
    return{
        type:"CHANGETEMP",
        payload:x
    }
}

export const userChange=(obj)=>{
    return{
        type:"CHANGEUSER",
        payload:obj
    }
}
