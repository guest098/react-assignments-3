import React, { useState } from "react";
import './ProfileList.css'
const getLastMessage=(lastseenDate)=>{
  if(!lastseenDate){
    return '';
  }
  const currentime=new Date();
  const timeDifference=currentime-new Date(lastseenDate);
  const hoursDifference=Math.floor(timeDifference/(1000*60*60));
  const daysDifference=Math.floor(hoursDifference/24);
  if(hoursDifference<1){
    return 'Last seen just now';
  }
  else if(hoursDifference<24){
    return `Last seen ${hoursDifference} hours ago`;
  }
  else if(daysDifference<7){
    return `Last seen ${daysDifference} days ago`;
  }
  else{
    return 'Last seen several days ago';
  }
};
const ProfileCard=({profile})=>{
  const [isStared,setIsStared]=useState(false);
  const handClick=()=>{
    if(profile.id===2){
      setIsStared(!isStared);
    }
  }
  return (
    <div className="card">
      <div className="profile-image">
        <img src={profile.image} alt={profile.name}/>
        {profile.id===2 && (
          <div className={`star-below-image ${isStared ? "gold":""}`} onClick={handClick}>★</div>)}
      </div>
      <h3>{profile.profession}</h3>
      <p className="rate">{profile.rate}</p>
      <div className="profile-info">
        <div className="profile-details">
        <p className="name">{profile.name}, {profile.age}</p>
          <p className="location">
            <span className="location-icon">
              <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
            </span>
            {profile.location}
          </p>
          <p className="description">{profile.description}</p>
          <div className="skills">
            <h4>Skills</h4>
            <ul>            
              {profile.skills.map((skill,index)=>{
                 return <li key={index}>{skill}</li>
            })}
            </ul>
          </div>
        </div>
        <div className="buttons">
          <button className="btn-outline">VIEW CV</button><br/>
          <button className="btn-primary">MAKE OFFER</button>
         </div>
         <div className="status">
          {profile.status==="Online"?(<h3 className="onlinetext"><span className="online">●&nbsp;</span>Online</h3>):(<span className="offline">{getLastMessage(profile.lastseen)}</span>)}
         </div>
      </div>
    </div>
  );
}
const ProfileList=({profiles})=>{
  return (
    <div className="profile-list">
      {profiles.map(profile=>(
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};
export default ProfileList;