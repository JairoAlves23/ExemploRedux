const INITIAL_STATE = {
    name:"",
    idade:''
}

export default (state=INITIAL_STATE,action) => {    
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, name:action.payload }        
        default:
            return {...state}
    }
}