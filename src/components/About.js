import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer'; // Placeholder for loading state
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa'; // Correct import for icons

const About = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Vivek5501');
        const data = await response.json();
        setUserInfo(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <Shimmer />;

  const projects = [
    {
      title: 'Food Court',
      url: 'https://github.com/Vivek5501/HungryHub',
      technologies: 'React.js, Tailwind CSS, JavaScript',
      description: 'Developed a Food App using Swiggy Live API with dynamic UI and real-time data retrieval.'
    },
   
    
  ];

  const contactLinks = [
    {
      href: 'https://github.com/Vivek5501',
      icon: <FaGithub className="text-2xl" />,
      text: 'GitHub',
      color: 'bg-black'
    },
    {
      href: 'https://www.linkedin.com/in/vivek-thakur-59a70418a/',
      icon: <FaLinkedin className="text-2xl" />,
      text: 'LinkedIn',
      color: 'bg-blue-500'
    },
    {
      href: 'https://leetcode.com/u/Vivek_1027/',
      icon: <FaGlobe className="text-2xl" />,
      text: 'LeetCode',
      color: 'bg-yellow-400'
    },
    
  ];

  return (
    <div className="about bg-pastelMint min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* About Me Card */}
      <div className="card bg-white p-8 rounded-xl shadow-lg mb-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center border border-pink-300 transition-transform transform hover:scale-105">
        <img
          src={userInfo?.avatar_url || 'https://via.placeholder.com/150'}
          alt={userInfo?.name || 'Profile'}
          className="w-32 h-32 object-cover rounded-full shadow-md border-4 border-pink-400"
        />
        <div className="ml-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">{userInfo?.name || 'Loading...'}</h2>
          <p className="text-gray-600 mt-1">{userInfo?.location || 'Loading...'}</p>
          <p className="text-gray-700 mt-4">{userInfo?.bio || 'Loading...'}</p>
        </div>
      </div>

  {/* Projects Section */}
<div className="projects-container max-w-4xl mx-auto mb-12">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Projects</h2>
  <div className="flex gap-6 overflow-x-auto">
    {projects.map((project, index) => (
      <div key={index} className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-full max-w-xs flex-shrink-0">
        <h3 className="text-2xl font-semibold text-pink-600 mb-2">
          <a href={project.url} className="hover:text-pink-800" target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="text-gray-700"><strong>Technologies:</strong> {project.technologies}</p>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </div>
    ))}
  </div>
</div>



      {/* Contact Info Section */}
      <div className="contact-info max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`flex items-center justify-center px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 ${link.color} text-white w-32`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              <span className="ml-2 text-lg font-medium">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;