import { Fragment } from 'react';

export function TextLines({ lines }: { lines: readonly string[] }) {
  return <>{lines.map((line, index) => <Fragment key={`${line}-${index}`}>{index > 0 && <br />}{line}</Fragment>)}</>;
}
