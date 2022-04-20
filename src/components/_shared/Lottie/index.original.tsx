import Lottie from './components/Lottie';
import LottiePlayer from 'lottie-web';
import useLottie from './hooks/useLottie';
import useLottieInteractivity from './hooks/useLottieInteractivity';

export const Animator: typeof Lottie = Lottie;
export const useAnimator: typeof useLottie = useLottie;

export { LottiePlayer, useLottie, useLottieInteractivity };

export default Lottie;
export * from './types';
