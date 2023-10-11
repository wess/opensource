import React, {Suspense} from 'react';

const Page = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <div>Hello world</div>
  </Suspense>
);

export default Page;