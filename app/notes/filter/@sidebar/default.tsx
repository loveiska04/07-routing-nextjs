import React from 'react';
import Link from 'next/link';

import css from './SidebarNotes.module.css';

const NoteSidebar = async () => {
  const Tags = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

  return (
    <div>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href="/notes/filter/all" className={css.menuLink}>
            All notes
          </Link>
        </li>
        {Tags.map(tag => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteSidebar; 