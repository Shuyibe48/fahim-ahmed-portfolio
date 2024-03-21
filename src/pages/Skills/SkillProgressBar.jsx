import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SkillProgressBar = ({ skill, level, isInView }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ width: `${level}%` });
    } else {
      controls.start({ width: '0%' });
    }
  }, [controls, isInView, level]);

  return (
    <div className="mb-4 text-white">
      <h3 className="text-lg font-semibold">{skill}</h3>
      <div className="relative h-8 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ width: '0%' }}
          animate={controls}
        >
          {isInView && (
            <motion.span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
              {level}%
            </motion.span>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillProgressBar