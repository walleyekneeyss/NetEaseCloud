import React, { lazy } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// import Discover from '@/views/discover';
// import Download from '@/views/download';
// import Mine from '@/views/mine';
// import Focus from '@/views/focus';

const Discover = React.lazy(() => import('@/views/discover'));
const Mine = lazy(() => import('@/views/mine'));
const Download = lazy(() => import('@/views/download'));
const Focus = lazy(() => import('@/views/focus'));
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'));
const Song = lazy(() => import('@/views/discover/c-views/songs'));
const Album = lazy(() => import('@/views/discover/c-views/album'));
const Artist = lazy(() => import('@/views/discover/c-views//artist'));
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'));
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'));
// const navigate = useNavigate();
// navigate('/discover');
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/songs',
        element: <Song />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  }
];

export default routes;
