import dynamic from 'next/dynamic';
import { memo, useState } from 'react';
import { useRouter } from 'next/router';
import Loader from '@components/common/ui/Loader';
import useConcordance from '@services/corpus/concordance/get';
import { ConcordanceParams, ConcordancePageProps } from 'types/corpus';

const Table = dynamic(() => import('./Table'));
const ErrorCQL = dynamic(() => import('./Error'));
const NoResult = dynamic(() => import('./NoResult'));
const HelperButtons = dynamic(() => import('./Buttons'));
const Pagination = dynamic(() => import('./Pagination'));

function ConcordancePage(props: ConcordancePageProps) {
  const { payload } = props;
  const router = useRouter();
  const { pos } = router.query as ConcordanceParams;
  const [showPos, setShowPos] = useState(pos === 'true');
  const { concordance, isLoading, isError, mutate } = useConcordance(payload);

  if (isLoading) return <Loader />;

  if (isError || !concordance || concordance.msg === 'internal server error') {
    router.push('/500', { pathname: router.pathname });
    return null;
  }

  if (concordance.msg === 'no hit') return <NoResult />;
  if (concordance.status === 'failed') return <ErrorCQL message={concordance.msg} />;

  const { data } = concordance;

  return (
    <>
      <HelperButtons
        showPos={showPos}
        setShowPos={setShowPos}
        numberofHits={data.summary.numberOfHits}
      />
      <Table data={data} showPos={showPos} />
      <Pagination
        numberOfHits={data.summary.numberOfHits}
        fetchNumber={payload.fetchNumber}
        mutate={mutate}
      />
    </>
  );
}

export default memo(ConcordancePage);
