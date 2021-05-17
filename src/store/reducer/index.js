
const INITIAL_STATE = {
    allUsers:[],
    userEmail:""
}

export default(state=INITIAL_STATE,action) =>{

    switch(action.type){

        case"ALL users":
        // console.log(action.payload)

        return({
            ...state,
            allUsers:action.payload
        })  


        case"userEmail":
        // console.log(action.payload)

        return({
            ...state,
            userEmail:action.payload
        }) 

    }
    return state   

}