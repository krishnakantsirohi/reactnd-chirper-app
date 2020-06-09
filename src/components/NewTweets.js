import React, {Component} from 'react'

class NewTweets extends Component{
    state = {
        text: '',
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
        console.log(text)
        this.setState(()=>({
            text: ''
        }))
    }

    render() {
        const {text} = this.state
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

export default NewTweets