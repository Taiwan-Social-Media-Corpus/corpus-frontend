import Slugger from 'github-slugger';
import { MdxPageProps } from 'types/mdx';
import { IconList } from '@tabler/icons-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Text, ScrollArea, useMantineTheme } from '@mantine/core';
import getActiveElement from './utils';
import useStyles from './TableOfContents.styles';

type TableOfContentsProps = {
  headings: MdxPageProps['post']['headings'];
};

function TableOfContents(props: TableOfContentsProps) {
  const { headings } = props;
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const slugger = new Slugger();
  const [active, setActive] = useState(0);
  const filteredHeadings = headings.filter((heading) => heading.depth > 1);
  const slugs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    slugger.reset();
    slugs.current = filteredHeadings.map(
      (heading) => document.getElementById(slugger.slug(heading.value)) as HTMLDivElement
    );
  }, [headings, filteredHeadings]);

  const handleScroll = () => {
    setTimeout(() => {
      setActive(getActiveElement(slugs.current.map((d) => d?.getBoundingClientRect() || 1)));
    }, 20);
  };

  useEffect(() => {
    setTimeout(() => {
      setActive(getActiveElement(slugs.current.map((d) => d?.getBoundingClientRect() || 1)));
    }, 20);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slugger, slugs.current, active, headings, filteredHeadings]);

  if (filteredHeadings.length === 0) {
    return null;
  }

  const items = useMemo(
    () =>
      filteredHeadings.map((heading, index) => {
        if (heading.value === '參考資料' || heading.value === 'References') {
          return null;
        }
        const slug = slugger.slug(heading.value);
        return (
          <Text<'a'>
            key={`${slug}-${index}`}
            component="a"
            size="sm"
            className={cx(classes.link, { [classes.linkActive]: active === index })}
            href={`#${slug}`}
            sx={{ paddingLeft: (heading.depth - 1) * theme.spacing.lg }}
            onClick={async (event) => {
              event.preventDefault();
              document.querySelector(`#${CSS.escape(slug)}`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }}
          >
            {heading.value}
          </Text>
        );
      }),
    [filteredHeadings]
  );

  return (
    <nav className={cx(classes.wrapper)}>
      <div className={classes.inner}>
        <div>
          <div className={classes.header}>
            <IconList size={20} stroke={1.5} />
            <Text className={classes.title}>Table of contents</Text>
          </div>
          <ScrollArea.Autosize maxHeight="calc(100vh - 140px)" type="scroll" offsetScrollbars>
            <div className={classes.items}>{items}</div>
          </ScrollArea.Autosize>
        </div>
      </div>
    </nav>
  );
}

export default TableOfContents;
