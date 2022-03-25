import React from 'react';

export const SideBarMotion = {
  isActive: {
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  isUnActive: {
    x: -486,
    transition: {
      duration: 0.2,
    },
  },
};
export const SideBarCategoryMotion = {
  isActive: {
    translateX: 10,
    color: '#191F28',
    transition: {
      duration: 0.3,
    },
    borderBottom: '1px solid #191F28',
  },
  isUnActive: {
    transition: {
      duration: 0.3,
    },
    borderBottom: '1px solid #fff',
  },
};
export const SideBarCircleMotion = {
  isActive: {
    opacity: 1,
    x: 0,
  },
  isUnActive: {
    x: -20,
    opacity: 0,
  },
};
