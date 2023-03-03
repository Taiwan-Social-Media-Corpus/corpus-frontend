import { IconSettings, IconShieldLock } from '@tabler/icons-react';
import General from './General';
import Security from './Security';
import { Blocks } from '../types';

const blocks: Blocks = [
  {
    content: <General />,
    icon: IconSettings,
    name: '一般',
    description: '查看個人資料',
    query: 'general',
  },
  {
    content: <Security />,
    icon: IconShieldLock,
    name: '帳號安全和登入',
    description: '進步強化您的帳號',
    query: 'security',
  },
];

export default blocks;
