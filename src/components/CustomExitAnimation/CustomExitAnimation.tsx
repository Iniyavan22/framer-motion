import { useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";

export default function CustomExitAnimation() {
  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()
  
  useEffect(() => {
     if (isPresent) {
       const enterAnimation = async () => {
         await animate(scope.current, { opacity: 1 })
         await animate("li", { opacity: 1, x: 0 })
       }
       enterAnimation()

     } else {
       const exitAnimation = async () => {
         await animate("li", { opacity: 0, x: -100 })
         await animate(scope.current, { opacity: 0 })
         safeToRemove()
       }
       
       exitAnimation()
     }
  })
  
  return (
    <ul ref={scope}>
      <li />
      <li />
      <li />
    </ul>
  )
}