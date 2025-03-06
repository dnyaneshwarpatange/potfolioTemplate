import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python',
    'AWS', 'Docker', 'GraphQL', 'MongoDB'
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div>
            <p className="text-gray-300 mb-6">
              I'm a passionate developer with X years of experience in building web applications.
              I love creating beautiful and functional user interfaces that provide great user experiences.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through blog posts.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-800 p-3 rounded-lg text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;