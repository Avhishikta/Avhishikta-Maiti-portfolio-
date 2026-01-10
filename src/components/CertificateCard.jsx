'use client';
import { useState } from 'react';

export default function CertificateCard({
  title,
  issuer,
  date,
  description,
  image,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;
  const isLongText = description.length > maxLength;
  const displayText = isExpanded ? description : description.substring(0, maxLength);
  
  return (
    <article className="card flex gap-4 items-start h-full">
      <img src={image} alt={title} className="w-28 h-20 rounded flex-shrink-0" />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-xs text-slate-500">
            {issuer} • {date}
          </p>
          <p className="text-sm mt-2">{displayText}{isLongText && !isExpanded && '...'}</p>
          {isLongText && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sky-600 text-xs mt-1 hover:underline"
            >
              {isExpanded ? 'See less' : 'See more'}
            </button>
          )}
        </div>
        <a
          href={image}
          className="mt-2 inline-block text-sky-600 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          View certificate
        </a>
      </div>
    </article>
  )
}
