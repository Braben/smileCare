import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const teamMembers = [
  {
    name: 'Dr. John Doe',
    imgSrc:'./Images/doc1.jpeg', // Replace with actual image path
    profile: 'Dr. Allan Marks graduated from the University of Rochester School of Medicine and Dentistry in 1980 and completed residency at Stanford University Medical Center. When he’s not working, he enjoys playing tennis, hiking, and spending time with his wife and their three children'

  },
  {
    name: 'Dr. Jane Smith',
    imgSrc: './Images/doc2.jpeg', // Replace with actual image path
    profile: 'Dr. Allison Lovell completed her residency at Yale in 1988 and then obtained her Board Certification in Internal Medicine. Dr. Lovell has worked with many different people from all walks of life and cares for everyone with compassion and concern'
  },
  {
    name: 'Dr. Sarah Johnson',
    imgSrc: './Images/doc3.jpeg', // Replace with actual image path
    profile: 'Dr. Agrawal completed her residency at Tufts University’s Carney Hospital and completed her internship at University of Alabama. Dr. Agrawal has two young children who keep her entertained and busy when she is not working'
  },
  {
    name: 'Dr. Emily Brown',
    imgSrc: require('./doc5.jpeg'), // Replace with actual image path
    profile:'Dr. Carrie Beaumont attended medical school at the University of North Carolina at Chapel Hill. She completed her residency at Wake Forest University. When not seeing patients or teaching, she enjoys traveling with her husband, and spending time with their miniature dachshund, Ziggy.'
  },
  
];

const TeamSection = () => {
  return (
    <div className="team-section text-center py-5">
      <div className="container">
        <h2 className="mb-4">Meet some of the team.</h2>
        <p className="lead mb-5">
          PlushCare has doctors that are licensed to practice in all 50 states. Collectively, they have seen over 550,000 patients through our platform. Our board-certified physicians average 15 years of experience and have all trained at a top 50 U.S. medical school. Because of this, it’s unsurprising that PlushCare has a 4.9/5 consumer rating.
        </p>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="team-member">
                <img 
                  src={member.imgSrc} 
                  alt={member.name} 
                  className="img-fluid rounded-circle mb-3"
                />
                <h5>{member.name}</h5>
                <p>{member.profile}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

