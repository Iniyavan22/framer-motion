import { ReactNode, useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";


export default function AnimateOnView({children}:{children:ReactNode}) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  
  useEffect(() => {
     if (isInView) {
       animate(scope.current, { opacity: 1 })
     }
  })
  
  return (
    <div ref={scope}>
      {children}
    </div>
  )
}