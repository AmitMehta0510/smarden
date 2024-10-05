import React from "react";

const TeamMemberCard = ({ name, description, imageUrl, linkedinUrl }) => {
  return (
    <div className="team-member-card">
      <img src={imageUrl} alt={`${name}`} className="member-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          className="linkedin-icon"
        />
      </a>
    </div>
  );
};

export default TeamMemberCard;
