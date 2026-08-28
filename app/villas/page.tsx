import { redirect } from 'next/navigation';

// Compatibilidad con enlaces antiguos. La categoría se llama ahora Casas rurales.
export default function VillasRedirect() {
  redirect('/alojamientos?categoria=Casas%20rurales');
}
