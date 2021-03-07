import { SET_USER, LOGOUT_USER} from '../actions/types';
import auth from '@react-native-firebase/auth';

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

