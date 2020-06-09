import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tweet from "./Tweet";
import NewTweets from "./NewTweets";

class TweetPage extends Component{
    render() {
        const {id, replies} = this.props
        return (
            <div>
                <Tweet id={id}/>
                <NewTweets id={id}/>
                {replies.length!==0 && <h3 className='center'>Replies</h3> }
                <ul>
                    {replies.map((replyId)=>(
                        <li key={replyId}>
                            <Tweet id={replyId}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStoreToProps({authedUser, users, tweets}, props) {
    const {id} = props.match.params
    return {
        id,
        replies: !tweets[id] ? [] : tweets[id].replies.sort((a,b,)=>tweets[b].timestamp-tweets[a].timestamp)
    }
}

export default connect(mapStoreToProps)(TweetPage);