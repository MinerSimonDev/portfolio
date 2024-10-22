import React, { useRef } from 'react';
import '../styles/Projects.css';
import { motion, useInView } from 'framer-motion';

function Project({ imageSrc, projectName }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: '20vh', opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 50, duration: 2 }}
    >
      <div className="project">
        <img className="project-img" src={imageSrc} alt={projectName} />
        <span className="project-name">{projectName}</span>
      </div>
    </motion.div>
  );
}

export default Project;