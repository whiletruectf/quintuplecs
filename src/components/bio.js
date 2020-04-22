import React from "react"

const Bio = ({imageSrc, bio, name}) => (
  <div className="bio">
    <h2>{name}</h2>
    <img src={imageSrc} alt={`${name}'s avatar`} />
    <p>{bio}</p>
  </div>
)

export default Bio
