import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import {
  ColProps,
  SwitchProps as MantineSwitchProps,
  SelectProps as MantineSelectProps,
  TextInputProps as MantineTextInputProps,
  RadioGroupProps as MantineRadioGroupProps,
  MultiSelectProps as MantineMultiSelectProps,
  NumberInputProps as MantineNumberInputProps,
  CheckboxGroupProps as MantineCheckboxGroupProps,
  SegmentedControlProps as MantineSegmentedControlProps,
} from '@mantine/core';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

// ---------- API ----------

export type HTTPMethods =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS'
  | 'HEAD'
  | 'CONNECT'
  | 'TRACE';

export interface RequestBody {
  word: string;
  media: string;
  cqlEnable: boolean;
  postType: string;
  boards: string[];
  start: string;
  end: string;
  windowSize: string;
  page: number;
  fetchNumber: number;
}

export type Request<T> = {
  url: string;
  method: HTTPMethods;
  payload?: T;
  timeout?: number;
};

export interface Response<ResData = {}> {
  status: 'success' | 'failed';
  data: ResData;
  msg?: string;
}

// ----- API response -----

export type Boards = {
  ptt: string[];
  dcard: string[];
};

export interface BlacklabResponse {
  summary: Summary;
  hits: Hit[];
  docInfos: DocInfos;
}

export interface DocInfos {
  [key: string]: {
    fromInputFile: string[];
    year: string[];
    author: string[];
    media: string[];
    title: string[];
    docId: string[];
    board: string[];
    lengthInTokens: number;
    mayView: boolean;
  };
}

export interface Hit {
  docPid: string;
  start: number;
  end: number;
  left: HitData;
  match: HitData;
  right: HitData;
}

export interface HitData {
  punct: string[];
  pos: string[];
  word: string[];
}

export interface Summary {
  searchParam: SearchParam;
  searchTime: number;
  countTime: number;
  windowFirstResult: number;
  requestedWindowSize: number;
  actualWindowSize: number;
  windowHasPrevious: boolean;
  windowHasNext: boolean;
  stillCounting: boolean;
  numberOfHits: number;
  numberOfHitsRetrieved: number;
  stoppedCountingHits: boolean;
  stoppedRetrievingHits: boolean;
  numberOfDocs: number;
  numberOfDocsRetrieved: number;
  docFields: DocFields;
  metadataFieldDisplayNames: MetadataFieldDisplayNames;
}

export interface DocFields {
  pidField: string;
  titleField: string;
  authorField: string;
  dateField: string;
}

export interface MetadataFieldDisplayNames {
  author: string;
  board: string;
  docId: string;
  fromInputFile: string;
  media: string;
  title: string;
  year: string;
}

export interface SearchParam {
  filter: string;
  first: string;
  indexname: string;
  number: string;
  patt: string;
  wordsaroundhit: string;
}

// -------- mantine --------

export type Option = {
  label: any;
  value: any;
};

export interface Options {
  options: Option[];
}

export type Controlled<T> = { label: string | JSX.Element; name: string } & T;

export type TextInputProps = Controlled<MantineTextInputProps>;
export type NumberInputProps = Controlled<MantineNumberInputProps>;
export type SelectProps = Controlled<
  Omit<MantineSelectProps, 'data'> & {
    options: MantineSelectProps['data'];
  }
>;
export type CheckboxGroupProps = Controlled<Omit<MantineCheckboxGroupProps, 'children'> & Options>;
export type RadioGroupProps = Controlled<Omit<MantineRadioGroupProps, 'children'> & Options>;
export type MultiSelectProps = Controlled<
  Omit<MantineMultiSelectProps, 'data'> & {
    options: MantineMultiSelectProps['data'];
  }
>;
export type SwitchProps = Controlled<MantineSwitchProps>;
export type SegmentedControlProps = Controlled<
  Omit<MantineSegmentedControlProps, 'data'> & {
    options: MantineSegmentedControlProps['data'];
  }
>;

export type ControllerProps =
  | ({ control: 'text-input' } & TextInputProps)
  | ({ control: 'select' } & SelectProps)
  | ({ control: 'checkbox-group' } & CheckboxGroupProps)
  | ({ control: 'radio-group' } & RadioGroupProps)
  | ({ control: 'number-input' } & NumberInputProps)
  | ({ control: 'multi-select' } & MultiSelectProps)
  | ({ control: 'switch' } & SwitchProps)
  | ({ control: 'segmented-control' } & SegmentedControlProps);

export type ControllerPropsWithCol = {
  controllers: (ControllerProps & { col?: ColProps })[];
};

export type SimpleFormControllerProps<FormikContextType> = {
  controllers: (ControllerProps & {
    col?: ColProps;
    after?: ReactNode | ((formikContext: FormikContextType) => ReactNode);
  })[];
};

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

// -------- helpers --------

export type PickAsOrNull<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: T[P] | null;
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// -------- NextJs --------

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type ConcordancePageProps = {
  payload: RequestBody;
};

export type ConcordanceParams = {
  e: string;
  pos: string;
  page: string;
};

export interface Frontmatter {
  title: string;
  date: string;
  slug: string;
  order: number;
}

export type MdxPageProps = {
  post: {
    source: MDXRemoteSerializeResult;
    headings: { depth: number; value: string }[];
  };
  frontMatter: Frontmatter;
  siblings: {
    next: Frontmatter | null;
    prev: Frontmatter | null;
  };
};

export type MdxFolder = 'about' | 'guide';
