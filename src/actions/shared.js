import {getInitialData} from '../utils/api';
import {receiveUsers} from './users';
import {receiveTweets} from './tweets';
import {setAuthedUser} from '../actions/authedUser';

const AUTHED_ID = 'dan_abramov';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, tweets})=>{
                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(AUTHED_ID));
            })
    }
}