import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import YouTubeVideo from './components/you-tube/youtube'
import YoutubeEmbed from './components/embeded/youtube-embeded';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [isScriptLoaded, setScriptLoaded] = useState(false)
  let loaded = false;
  useEffect(() => {
    console.log(isScriptLoaded, '   ', !window.YT);
    setScriptLoaded(false)

    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      // window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      // console.log(firstScriptTag.parentNode);
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      loaded = true
      setScriptLoaded(true)
    } else { // If script is already there, load the video directly
      // this.loadVideo();
      loaded = true;
      setScriptLoaded(true)

    }
  }, [])
  return (
    <div className="main" >
      <YouTubeVideo isScriptLoaded={isScriptLoaded && loaded} id='Q80x-ESEuNc' />
      <YouTubeVideo isScriptLoaded={isScriptLoaded && loaded} id='gcTJ26di1jo' />
      {/* <YoutubeEmbed embedId='Q80x-ESEuNc' /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
