import useSWR from 'swr';
import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { Media } from 'types/corpus';

type ResponseType = Response<Media> | null;

const fetchMedia = (url: string): Promise<ResponseType> => request({ url, method: 'GET' });

const useMedia = () => {
  const { data, error } = useSWR<Media>(API.V1.corpus.media.external);

  return { media: data, isMediaLoading: !error && !data, mediaError: error };
};

export { useMedia, fetchMedia };
