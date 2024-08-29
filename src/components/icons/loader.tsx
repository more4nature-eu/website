import { HTMLAttributes } from 'react';

export const Loader = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="text-surface m-12 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-grey-800 border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
      {...props}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Loader;
