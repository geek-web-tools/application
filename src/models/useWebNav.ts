import Nav from '@/data/web-nav';
import { useMemo, useState } from 'react';

export default () => {
  const [search, setSearch] = useState<string>('');
  const originalList = useMemo(() => Nav, []);

  const getNavList = useMemo(() => {
    return (
      originalList
        .map((item) => {
          const children = item.children.filter(
            (child) => child.title.indexOf(search) > -1 || child.desc.indexOf(search) > -1,
          );
          if (children.length > 0) {
            return {
              ...item,
              children,
            };
          }
          return undefined;
        })
        .filter((item) => !!item) || []
    );
  }, [originalList, search]);

  return {
    search,
    setSearch,
    getNavList,
  };
};
