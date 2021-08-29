import axios from "axios";

export const editUserAction = (editeduser) => async (dispatch,getdata) => {

    console.log("Inside Action",editeduser)

    dispatch({type : 'EDIT_USER_REQUEST'});

    try {
        console.log("Inside Post")
        const response = await axios.post('/api/users/edituser',{editeduser});
        console.log(response);
        dispatch({type : 'EDIT_USER_SUCCESS',payload:response.data})

        const currentUser = getdata().editUserReducer.user;
        localStorage.setItem('currentUser',JSON.stringify(currentUser));
        // window.location.href='/details'

    } catch (error) {
        
        dispatch({type : 'EDIT_USER_FAILED' , payload : error});

    }

}