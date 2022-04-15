import React, {useState, useCallback, useEffect} from 'react';
import Mobile from './mobile';
import Desktop from './desktop';


export default function ProjectCard({props}) {
    // https://stackoverflow.com/questions/70190292/how-to-use-window-matchmedia-in-next-js-with-style-components-theme
    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);
      
        const updateTarget = useCallback((e) => {
          if (e.matches) {
            setTargetReached(true);
          } else {
            setTargetReached(false);
          }
        }, []);
      
        useEffect(() => {
          if (typeof window !== 'undefined') {
            const media = window.matchMedia(`(max-width:${width}px)`);
            media.addListener(updateTarget);
      
            if (media.matches) {
              setTargetReached(true);
            }
      
            return () => media.removeListener(updateTarget);
          }
        }, []);
      
        return targetReached;
    };

    const matches = useMediaQuery(1280);
    

    return matches? (<Mobile props={props}></Mobile>) :
    (<Desktop props={props}></Desktop>)
}
