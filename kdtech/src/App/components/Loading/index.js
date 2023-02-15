import { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-web';
import animationData from '../../assets/lottie/loading.json';
import { styled } from '@mui/material/styles';
import { FontsApp } from '../../assets/font';

const WrapperLoadingScreen = styled('div')``;
const Image = styled('div')``;
const TitleLoading = styled('div')`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.5px;
`;

export function LoadingFull({title}) {
  const wrapperLottie = useRef(null);
  const [show, setShow] = useState(false)
  useEffect(() => {
    const lottieAction = Lottie.loadAnimation({
      container: wrapperLottie.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData, // the path to the animation json
    });
    lottieAction.play();
    return () => {
      lottieAction.stop();
      lottieAction.destroy()
    };
  }, []);
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return <WrapperLoadingScreen 
    sx={{
      display: 'flex',
      flex: 1,
      height: '95vh',
      justifyContent : 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Image
        sx={{
          width: '20%',
          maxWidth: '500px',
        }} ref={wrapperLottie}/>
      <TitleLoading 
        sx={{
          fontFamily: FontsApp.SourceSansPro
        }}
      >{title}</TitleLoading>
  </WrapperLoadingScreen>;
}