import React, {Component} from 'react'
import {connect} from 'react-redux';
import {handleAddTweet} from '../actions/tweets'
import {Redirect} from 'react-router-dom'

class NewTweets extends Component{
    state = {
        text: '',
        toHome:false,
    }

    handleChange = (e) => {
        const text = e.target.value
        this.setState(()=>({
            text: text,
        }))
    }

    handleSubmit = (e) => {
         e.preventDefault()
        const {text} = this.state
        const {dispatch, id} = this.props
        dispatch(handleAddTweet(text, id))
        this.setState(()=>({
            text: '',
            toHome: id?false:true,
        }))
    }

    render() {
        const {text, toHome} = this.state

        if (toHome===true){
            return <Redirect to='/'/>
        }

        const tweetleft = 280 - text.length
        return(
            <div>
                <h3 className='new-tweet'>Compose new tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                    placeholder="What's happening?"
                    value={text}
                    onChange={this.handleChange}
                    className='textarea'
                    />
                    {tweetleft <= 100 && (<div className='tweet-length'>
                        {tweetleft}
                    </div> )}
                    <button
                        type='submit'
                        className='btn'
                        disabled={text===''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweets)