type LinkIconProps = {
  className?: string;
};

export function ExternalLinkIcon({ className = 'link-icon' }: LinkIconProps) {
  return <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M5 11 11 5M6 5h5v5" />
  </svg>;
}

export function ArrowDownIcon({ className = 'link-icon' }: LinkIconProps) {
  return <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M8 3v9M4.5 8.5 8 12l3.5-3.5" />
  </svg>;
}
