import { useBoolean } from 'ahooks';
import icons from '@/data/icons';

export default () => {
  const [nav, { toggle }] = useBoolean(false);

  return {
    icons,
    nav,
    toggle,
  };
};
