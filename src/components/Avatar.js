// components/Avatar.js
import profileImg from "./IMG_20210327_170852_361.jpg";

function Avatar() {
    return (
        <div className="avatar-container">
            <img src={profileImg} alt="Profile" className="avatar-image" />
            <div className="avatar-border"> 
            </div>
        </div>
    );
}
export default Avatar;