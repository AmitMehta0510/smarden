// AboutUs.js
import React from "react";
import { teamMembers } from "../utils/MockData"; // Import the team data array
import TeamMemberCard from "./TeamMemberCard";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>Our Home Automation Systems Team</h2>
      <div className="team-member-container">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            imageUrl={member.imageUrl}
            name={member.name}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
