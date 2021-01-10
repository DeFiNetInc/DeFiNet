import Tweet from "./tweet";

export default function Threader(props) {
    let tweets = props.tweets;
    console.log("Threader has list of " + tweets)
    let threaded = tweets.map((tweet, i) => {        
        return <Tweet user="Leo Guinan" username="@leo_guinan" content={tweet} key={"tweet_" + i} />;
      });
    return <section>
        {threaded}
    </section>
  }