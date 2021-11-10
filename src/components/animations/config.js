import Loading from '../../assets/lotties/loading.json'
import ErrorAnimation from '../../assets/lotties/error.json'

// loading animation to do config //
export const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



// loading error animation config //
export const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: ErrorAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};




