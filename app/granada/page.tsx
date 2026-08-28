import { redirect } from 'next/navigation';

// Compatibilidad con enlaces antiguos. La sección vive ahora en el catálogo.
export default function GranadaRedirect() {
  redirect('/alojamientos?categoria=Granada%20centro');
}
