import NewsList from '@/containers/events-news/news/list';

import Wrapper from '@/components/ui/wrapper';

export default function News() {
  return (
    <div className="bg-grey-800">
      <Wrapper className="space-y-16">
        <h4 className="text-3xl text-white">News</h4>
        <NewsList />
      </Wrapper>
    </div>
  );
}
