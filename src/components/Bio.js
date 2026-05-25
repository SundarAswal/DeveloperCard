// components/Bio.js

function Bio() {

    const bioText = "Full Stack Developer with 5+ years of experience in building scalable web applications using modern front-end and back-end technologies. Skilled in developing user-friendly interfaces and robust APIs, with a strong focus on performance, clean code, and agile development. Passionate about learning new technologies and contributing to open-source projects.";
    const skills = ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML","dot net", "CSS"];
    return (
        <div className="bio-section">
            <h3>About Me</h3>
            <p className="bio-text">{bioText}</p>
            <h3>Skills</h3>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
export default Bio;