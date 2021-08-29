export const editUserReducer = (state={},action) => {

    switch(action.type){
        case 'EDIT_USER_REQUEST' : return{
            editloading : true,
            ...state
        }
        case 'EDIT_USER_SUCCESS' : return{
            editloading:false,
            editsuccess:true,
            user : action.payload
        }
        case 'EDIT_USER_FAILED' : return{
            editerror : action.payload,
            editloading:false
        }
        default : return state
    }

}