import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  MotionConfig,
} from "framer-motion";

export default function AnimatePresent(isVisible: boolean) {
  return (
    //MotionConfig --> allow user to toggle animations for better accessibility
    //LazyMotion --> Reduce Bundle size by importing slimmer package which increase performance
    //AnimatePresence --> Ensures the Exit animations are smooth
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <AnimatePresence>
          {isVisible ? (
            <m.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></m.div>
          ) : null}
        </AnimatePresence>
      </LazyMotion>  
    </MotionConfig>
  );
}
