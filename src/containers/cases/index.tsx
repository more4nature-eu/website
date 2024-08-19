'use client';

import CaseStudyList from '@/containers/cases/list';

// TODO: Is there a better/native way to achieve this?
//       First I want this component to take the full height and width of the parent

// TODO: I also want this component to have a transparent background, but because the white is
// already present for the sidebar, which component should be responsible for the styles here?
//    Fucking hell this is hard

export default function CaseStudies() {
  return (
    <div className="h-full w-full">
      <CaseStudyList />
    </div>
  );
}
