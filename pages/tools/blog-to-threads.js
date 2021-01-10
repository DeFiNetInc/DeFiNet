import Form from "../../components/form";
import Threader from "../../components/threader";
import React, { Component } from "react";
import Tweet from "../../components/tweet";
class BlogToThread extends Component {
  constructor(props){
    super(props);
    this.state = {
      formValue: "Type your blog here",
      tweets: ['sample tweet content']
    }
    this.handleFormChange = this.handleFormChange.bind(this);
  }
 

  parseTextIntoThread(textToParse) {
    let tweets = []
    console.log("Parsing text of length " + textToParse.length)
    let contentArray = textToParse.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    console.log("Content array of length " + contentArray.length)
    let tweet_string = ''
    contentArray.forEach(function (content) {
        // console.log(content)
        if (tweet_string.length + content.length < 270) {
            tweet_string += content
        } else {
            tweet_string += '(' + (tweets.length + 1) + '/)'
            tweets.push(tweet_string)
            tweet_string = content
        }

    });
    console.log("First tweet: " + tweets[0])
    

    return tweets;
    

  }

  handleFormChange(event) {
    let formContent = event.target.value;
    let tweets = this.parseTextIntoThread(formContent);
    this.setState({
      formValue: formContent,
      tweets: tweets
    })
  }

  render() {
  return <section className="container">
          <h1 className="title">Blog to Twitter Thread</h1>
          <div className="columns">
            <div className="column">
              <Form formValue={this.state.formValue} onFormChange={this.handleFormChange}/>
            </div>
            <div className="column">
              <Threader tweets={this.state.tweets}/>
            </div>
          </div>
        </section>
  }
}

export default BlogToThread;

    