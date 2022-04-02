import React from 'react';

export const SideBarAnimation = {
  isActive: {
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
  isUnActive: {
    x: -486,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};
export const SideBarCategoryAnimation = {
  isActive: {
    translateX: 10,
    color: '#191F28',
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
    borderBottom: '1px solid #191F28',
  },
  isUnActive: {
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
};
export const SideBarCircleAnimation = {
  isActive: {
    opacity: 1,
    x: 0,
  },
  isUnActive: {
    x: -20,
    opacity: 0,
  },
};
export const hoverMotion = {
  isActive: {
    translateY: -10,
    color: '#191F28',
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
    borderBottom: '1px solid #000',
  },
  isUnActive: {
    translateY: 0,
    color: '#D1D6DB',
    borderBottom: '1px solid #fff',
  },
};
export const circleMotion = {
  isActive: {
    opacity: 1,
    y: 0,
  },
  isUnActive: {
    y: -20,
    opacity: 0,
  },
};
