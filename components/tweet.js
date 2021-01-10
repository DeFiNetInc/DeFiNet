
export default function Tweet(props) {
    return <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48"> 
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{props.user}</p>
                            <p className="subtitle is-6">{props.username}</p>
                        </div>
                    </div>

                    <div className="content">
                        {props.content}                  
                        <br />
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
}