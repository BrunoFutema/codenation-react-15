import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  return (
    <div data-testid="feed-route">
      <Stories stories={[]}/>
      <Loading/>
      <Posts posts={[]}/>
    </div>
  );
};

export default FeedRoute;
