import React, { FC } from 'react';
import '../styles/TimeLineItem.css';

export interface Props {
  title: string;
  date: string;
  description: string;
  link?: string;
}

const TimelineItem: FC<Props> = ({ title, date, description, link }: Props) => {
  return (
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
          <span className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>{date}</span>
        </div>
        <h1 className='text-lg font-semibold text-white ml-1'>{title}</h1>
        <p className='mb-4 p-3 ml-2 text-base font-normal text-lavender'>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Company site
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
      </div>
    </div>
  );
};

export default TimelineItem;