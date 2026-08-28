'use client';

import { useMemo, useState } from 'react';
import { categories, type CatalogItem, type Category } from '@/data/properties';
import { PropertyCard } from './PropertyCard';
import { PropertyGroupCard } from './PropertyGroupCard';

type Filter = 'Todos' | Category;

export function PropertyCatalog({ items, initialFilter = 'Todos' }: { items: CatalogItem[]; initialFilter?: string }) {
  const safeInitial = categories.includes(initialFilter as Filter) ? initialFilter as Filter : 'Todos';
  const [active, setActive] = useState<Filter>(safeInitial);
  const visible = useMemo(() => active === 'Todos' ? items : items.filter((item) => item.category === active), [active, items]);

  return <>
    <div className="filter-bar" aria-label="Filtrar alojamientos">
      {categories.map((category) => <button
        type="button"
        className={active === category ? 'active' : ''}
        aria-pressed={active === category}
        onClick={() => setActive(category)}
        key={category}
      >{category}</button>)}
    </div>
    <div className="catalog-summary" aria-live="polite">
      <p><strong>{visible.length}</strong> {visible.length === 1 ? 'resultado' : 'resultados'}</p>
      <span>Las colecciones abren una página con todas sus unidades</span>
    </div>
    <div className="catalog-grid catalog-transition" key={active}>
      {visible.map((item, index) => item.kind === 'group'
        ? <PropertyGroupCard group={item} index={index} key={item.slug} />
        : <PropertyCard property={item} index={index} key={item.slug} />)}
    </div>
  </>;
}
