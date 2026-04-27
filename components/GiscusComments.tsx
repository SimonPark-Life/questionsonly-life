'use client';
import { useEffect, useRef } from 'react';

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'SimonPark-Life/questionsonly-life');
    script.setAttribute('data-repo-id', 'R_kgDOSHpXFg');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOSHpXFs4C7yW5');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    ref.current.appendChild(script);
  }, []);

  return (
    <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--rule)' }}>
      <div style={{
        fontFamily: 'var(--serif)',
        fontStyle: 'italic',
        fontSize: '1.1rem',
        marginBottom: 20,
        color: 'var(--ink)',
      }}>
        댓글 · Comments
      </div>
      <div ref={ref} />
    </div>
  );
}