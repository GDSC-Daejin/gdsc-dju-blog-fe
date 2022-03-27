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
