import React, { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/TimeLineItem.css';

export interface Props {
  title: string;
  date: string;
  description: string;
  link?: string;
  linkName: string;
}

const TimelineItem: FC<Props> = ({ title, date, description, link, linkName }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ x: '-10vw', opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 50, duration: 1.5 }}
    >
      <div className="timeLineItem">
        <div className="timeLineItem-left">
          <div className="timeLineItem-icon">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              height="10"
              width="10"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
        </div>
        <div className="timeLineItem-right">
          <div className="timeLineItem-right-container-1">
            <span className='mb-1 text-xs font-bold leading-none text-gray-400 dark:text-gray-500'>{date}</span>
          </div>
          <h1 className='text-lg font-semibold italic text-white ml-1'>{title}</h1>
          <p className='mb-4 p-3 ml-2 text-base font-normal text-lavender'>{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:color-white hover:text-custom-blue ease-in-out duration-200 hover:text-blue-700 focus:bg-gray-100 focus:text-blue-700 focus:z-10 focus:outline-none focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:text-white dark:focus:ring-gray-700"
            >
              {linkName}
              <svg
                className="ml-2 w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;