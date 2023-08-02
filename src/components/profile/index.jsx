import React from "react";
import "./profile.style.css";
import Bio from "./bio";
import Skills from "./skills";
import Links from "./links";

class Profile extends React.Component {
  me = {
    name: "Sadaf Al Arabi",
    title: "Fullstack developer, Software Engineer, Gamer",
    skillA: "Java",
    skillB: "Python",
    skillC: "JavaScript",
  };
  render() {
    return (
      <div className="Container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <Links />
      </div>
    );
  }
}

export default Profile;
