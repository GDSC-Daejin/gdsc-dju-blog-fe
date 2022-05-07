import React from 'react';

export const SideBarAnimation = {
  isActive: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  isUnActive: {
    x: -486,
    transition: {
      duration: 0.3,
    },
  },
};
export const SideBarCategoryAnimation = {
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
export const SideBarGrayBoxAnimation = {
  isActive: {
    display: 'block',
    opacity: 0.6,
    transition: {
      duration: 0.3,
    },
  },
  isUnActive: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const PostCategoryAnimation = {
  isActive: {
    translateY: -5,
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
export const PostCircleAnimation = {
  isActive: {
    opacity: 1,
    y: 0,
  },
  isUnActive: {
    y: -20,
    opacity: 0,
  },
};
export const listAnimate = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};
const width =
  window.innerWidth < 1200
    ? (window.innerWidth - (window.innerWidth - 20)) / 2
    : (window.innerWidth - 1200) / 2 + 40;
export const blogCardAnimate = {
  start: {
    opacity: 0,
    x: '50%',
  },
  end: {
    x: `${width}px`,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};
