'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  from?: 'bottom' | 'left' | 'right' | 'top';
  delay?: number;
  duration?: number;
  once?: boolean;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  hiddenLeft: {
    opacity: 0,
    x: -50,
  },
  visibleLeft: {
    opacity: 1,
    x: 0,
  },
  hiddenRight: {
    opacity: 0,
    x: 50,
  },
  visibleRight: {
    opacity: 1,
    x: 0,
  },
  hiddenTop: {
    opacity: 0,
    y: -50,
  },
  visibleTop: {
    opacity: 1,
    y: 0,
  },
};

export function AnimateIn({
  children,
  className,
  from = 'bottom',
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimateInProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  useEffect(() => {
    if (inView) {
      controls.start(from === 'bottom' ? 'visible' : 
                    from === 'left' ? 'visibleLeft' : 
                    from === 'right' ? 'visibleRight' : 'visibleTop');
    }
  }, [controls, inView, from]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={from === 'bottom' ? 'hidden' : 
              from === 'left' ? 'hiddenLeft' : 
              from === 'right' ? 'hiddenRight' : 'hiddenTop'}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
}: Omit<AnimateInProps, 'from' | 'once'>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}