import axios from "axios";

export const editUser = (editeduser) => async dispatch => {

    dispatch({type : 'EDIT_USER_REQUEST'});

    try {
        
        const response = await axios.put('/api/users/edituser',{editeduser});
        console.log(response);
        dispatch({type : 'EDIT_USER_SUCCESS'})
        window.location.href='/details'

    } catch (error) {
        
        dispatch({type : 'EDIT_USER_FAILED' , payload : error});

    }

}