import Tweet from "./tweet";
import TitleTweet from "./title-tweet";

export default function Threader(props) {
    let tweets = props.tweets;
    let titleTweet = <TitleTweet user="Leo Guinan" username="@leo_guinan" title={props.title} key={"title_tweet"} />;

    console.log("Threader has list of " + tweets)
    let threaded = tweets.map((tweet, i) => {        
        return <Tweet user="Leo Guinan" username="@leo_guinan" content={tweet} key={"tweet_" + i} />;
      });
    return <section>
        {titleTweet}
        {threaded}
    </section>
  }