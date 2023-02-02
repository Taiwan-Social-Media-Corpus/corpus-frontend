import {
  IconApi,
  IconHome,
  IconUser,
  IconSocial,
  IconServer,
  IconDashboard,
  IconInfoCircle,
  IconReportSearch,
} from '@tabler/icons';
import Route from '@config/routes';
import { NextRouter } from 'next/router';
import { SpotlightAction } from '@mantine/spotlight';

function createActions(hasSession: boolean, router: NextRouter) {
  const actions: SpotlightAction[] = [
    {
      title: 'Home',
      description: 'Get to home page',
      onTrigger: () => router.push(Route.home),
      icon: <IconHome size={18} />,
    },
    {
      title: 'Corpus',
      description: 'Corpus',
      onTrigger: () => router.push(Route.corpus.root),
      icon: <IconReportSearch size={18} />,
    },
    {
      title: 'Dashboard',
      description: 'Get full information about current system status',
      onTrigger: () => router.push(hasSession ? Route.dashboard.account : Route.login),
      icon: <IconDashboard size={18} />,
    },
    {
      title: 'About - Introduction',
      description: 'This is abobut page',
      onTrigger: () => router.push(Route.about.intro),
      icon: <IconInfoCircle size={18} />,
      keywords: ['documentation'],
    },
    {
      title: 'About - Taiwan Social Media',
      description: 'Taiwan Social Media',
      onTrigger: () => router.push(Route.about.media),
      icon: <IconSocial size={18} />,
      keywords: ['documentation'],
    },
    {
      title: 'About - Blacklab',
      description: 'Blacklab',
      onTrigger: () => router.push(Route.about.blacklab),
      icon: <IconServer size={18} />,
      keywords: ['documentation'],
    },
  ];

  if (hasSession) {
    return [
      ...actions,
      {
        title: 'Account Settings',
        description: 'Account Settings',
        onTrigger: () => router.push(Route.dashboard.account),
        icon: <IconUser size={18} />,
        keywords: ['dashboard'],
      },
      {
        title: 'API Token',
        description: 'API Token',
        onTrigger: () => router.push(Route.dashboard.token),
        icon: <IconApi size={18} />,
        keywords: ['dashboard'],
      },
    ];
  }

  return actions;
}

export default createActions;
