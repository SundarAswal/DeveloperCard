// components/PersonalInfo.js

function PersonalInfo() {

    const name = "Sundar Aswal";
    const role = "Full Stack Developer";
    const location = "New Delhi, India";
    const email = "sundar.aswal@example.com";

    return (
        <div className="personal-info">
          <h2 className="name">{name} </h2>
          <p className="role">{role}</p>
          <p className="location">{location}</p>
          <p className="email">{email}</p>
        </div>
    );
}
export default PersonalInfo;