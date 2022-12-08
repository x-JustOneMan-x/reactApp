import PostsContainer from './Posts/posts-container';
import ProfileInfo from './ProfileInfo/profileInfo';

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <PostsContainer store={props.store} />
    </div>
  );
}

export default Profile;