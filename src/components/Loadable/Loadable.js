import React, { Suspense } from 'react';

const DefaultLoader = () => <div>Loading...</div>; // default loader

export default (Component, Loader = DefaultLoader) => (
  <Suspense fallback={Loader}>{Component}</Suspense>
);
