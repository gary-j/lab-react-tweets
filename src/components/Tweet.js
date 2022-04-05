import Message from './Message';
import ProfileImage from './ProfileImage';
import TimeStamp from './Timestamp';
import User from './User';
import Action from './Actions';

function Tweet(props) {
  console.log(props, 'props')
  return (
    <div className="tweet">
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}

      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span> */}
          <User name={props.tweet.user.name}/>
          <User handle={props.tweet.user.handle}/>

          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
          <TimeStamp timestamp={props.tweet.timestamp}/>
        </div>

        {/* <p className="message">
          {props.tweet.message}
        </p> */}
        <Message message={props.tweet.message}/>

        {/* <div className="actions"> */}
          {/* Font Awesome icons */}
          {/* <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div> */}

        <Action/>
        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
