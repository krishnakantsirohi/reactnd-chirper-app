import {getInitialData} from '../utils/api';
import {receiveUsers} from './users';
import {receiveTweets} from './tweets';
import {setAuthedUser} from '../actions/authedUser';
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = 'dan_abramov';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, tweets})=>{
                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }
}