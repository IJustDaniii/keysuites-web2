import type { ReviewNote } from '@/data/properties';
import { REVIEW_MODE } from '@/data/config';

export function ReviewNotice({ note }: { note: ReviewNote }) {
  if (!REVIEW_MODE) return null;
  return <div className={`review-notice ${note.kind}`}><span>{note.kind === 'warning' ? '!' : 'i'}</span><div><strong>{note.title}</strong><p>{note.detail}</p></div></div>;
}

export function PendingPhoto({ compact = false }: { compact?: boolean }) {
  return <div className={`photo-placeholder ${compact ? 'compact' : ''}`} aria-label={REVIEW_MODE ? 'Fotografía pendiente' : 'Imagen de marca OKEY SUITES'}>
    <div className="placeholder-mark"><i /><i /></div>
    {REVIEW_MODE
      ? <p>Fotografía pendiente<br /><small>Material original por incorporar</small></p>
      : <p className="public-placeholder">OKEY SUITES</p>}
  </div>;
}
