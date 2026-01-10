'use client';
import { useState } from 'react';

export default function ProjectCard({ title, description, href, image = '/projects/placeholder-1.svg' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120;
  const isLongText = description.length > maxLength;
  const displayText = isExpanded ? description : description.substring(0, maxLength);
  
  return (
    <div className="card flex flex-col md:flex-row gap-4 items-start h-full">
      <img src={image} alt={title} className="w-full md:w-40 h-28 object-cover rounded flex-shrink-0" />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold gradient-text">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-3">{displayText}{isLongText && !isExpanded && '...'}</p>
          {isLongText && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sky-600 text-sm mt-1 hover:underline"
            >
              {isExpanded ? 'See less' : 'See more'}
            </button>
          )}
        </div>
        {href && <a className="text-sky-600 mt-3 inline-flex items-center gap-2" href={href} target="_blank" rel="noopener noreferrer">View project <span aria-hidden>→</span></a>}
      </div>
    </div>
  )
}
