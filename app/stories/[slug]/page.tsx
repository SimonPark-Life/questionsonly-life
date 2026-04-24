'use client';
import { useParams } from 'next/navigation';
import { stories } from '@/lib/stories-data';
import StoryView from '@/components/StoryView';

export default function StoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const idx = stories.findIndex(s => s.slug === slug);

  if (idx === -1) {
    return (
      <div style={{ padding: 48 }}>
        <h1>Story not found</h1>
      </div>
    );
  }

  const story = stories[idx];
  const prev = idx > 0 ? stories[idx - 1] : null;
  const next = idx < stories.length - 1 ? stories[idx + 1] : null;

  return <StoryView story={story} prev={prev} next={next} />;
}