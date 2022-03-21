import React from 'react';

export const sideBarMenuAnimation = {
  isActive: {
    transiX: 10,
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
  isUnActive: {
    translateY: 0,
    color: '#D1D6DB',
  },
};
export const sideBarMotion = {
  isActive: {
    translateX: 10,
    color: '#191F28',
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
  isUnActive: {
    translateY: 0,
    color: '#D1D6DB',
  },
};
export const circleMotion = {
  isActive: {
    opacity: 1,
    x: 0,
  },
  isUnActive: {
    x: -20,
    opacity: 0,
  },
};
export const sideBarTextMotion = {
  isActive: {
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
    borderBottom: '1px solid black',
  },
  isUnActive: {
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
};
