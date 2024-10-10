import React from "react";
import ProfileList from './components/ProfileList';
import logo from './images/image1.png';
import logo1 from './images/image2.jpg';
const profileData=[
  {
    id:1,
    image:logo1,
    name:'Jeffrey Abrams',
    age:51,
    profession:'Film Director, Producer',
    rate:'€14/hour',
    location:'New York, United States',
    description:'Abrams was born in New York City and raised in Los Angeles.',
    skills:['Directing','Screenwriting','Producing'],
    status:'Online',
    lastseen:null
  },
  {
    id:2,
    image:logo,
    name:'Baltasar Kormakur',
    age:52,
    profession:'Actor, Film Director',
    rate:'€9/hour',
    location:'Reykjavik, Iceland',
    description:'Icelandic actor, theater and film director, and film producer.',
    skills:['Acting','Film Direction','Producing'],
    status:'Offline',
    lastseen:new Date(Date.now()-48*60*60*1000)
  }
];
function App(){
  return (
    <div className="App">
      <ProfileList profiles={profileData}/>
    </div>
  );
}
export default App;