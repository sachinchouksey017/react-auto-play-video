// import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// import classes from 'styles/YouTubeVideo.module.css';

const YouTubeVideo = (props) => {
    let player;
    useEffect(() => {
        console.log(props.isScriptLoaded);
        if (props.isScriptLoaded) {
            // setTimeout(() => {
                loadVideo()

            // }, 1000);
            // loadVideo()

        }
    }, [props.isScriptLoaded])
    const loadVideo = () => {
        const { id } = props;
        // let id = 'Q80x-ESEuNc'
        // the Player object is created uniquely based on the id in props
        player = new window.YT.Player(`youtube-player-${id}`, {
            videoId: id,
            events: {
                onReady: onPlayerReady,
            },
            // playerVars: {
            //     autoplay: 0
            // },
            autoplay: 1,
        });
    };

    const onPlayerReady = event => {
        console.log("video loaded");
        event.target.mute();
        event.target.playVideo();
    };
    const playVideo = () => {
        player.playVideo()
    }
    const stopVideo = () => {
        player.stopVideo()

    }
    const pauseVideo = () => {
        player.pauseVideo()
    }

    return (
        <div >
            <div id={`youtube-player-${props.id}`} />
            <button onClick={playVideo}>play</button>
            <button onClick={pauseVideo}>pause</button>
            <button onClick={stopVideo}>stop</button>

        </div>
    );
}



// class YouTubeVideo extends React.PureComponent {
//     //   static propTypes = {
//     //     id: PropTypes.string.isRequired,
//     //   };
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }
//     componentDidMount = () => {
//         // On mount, check to see if the API script is already loaded
//         // console.log(window.YT);

//         // if (!window.YT) { // If not, load the script asynchronously
//         //     const tag = document.createElement('script');
//         //     tag.src = 'https://www.youtube.com/iframe_api';

//         //     // onYouTubeIframeAPIReady will load the video after the script is loaded
//         //     // window.onYouTubeIframeAPIReady = this.loadVideo;

//         //     const firstScriptTag = document.getElementsByTagName('script')[0];
//         //     // console.log(firstScriptTag.parentNode);
//         //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//         // } else { // If script is already there, load the video directly
//         //     // this.loadVideo();
//         // }


//     };

//     loadVideo = () => {
//         const { id } = this.props;
//         // let id = 'Q80x-ESEuNc'
//         // the Player object is created uniquely based on the id in props
//         this.player = new window.YT.Player(`youtube-player-${id}`, {
//             videoId: id,
//             events: {
//                 onReady: this.onPlayerReady,
//             },
//             // playerVars: {
//             //     autoplay: 0
//             // },
//             autoplay: 1,
//         });
//         console.log(this.player);
//     };

//     onPlayerReady = event => {
//         console.log("video loaded");
//         event.target.mute();
//         event.target.playVideo();
//     };
//     playVideo = () => {
//         this.player.playVideo()
//     }
//     stopVideo = () => {
//         this.player.stopVideo()

//     }
//     pauseVideo = () => {
//         this.player.pauseVideo()
//     }

//     static getDerivedStateFromProps(nextProps, prevState) {
//         if (nextProps.isScriptLoaded !== prevState.isScriptLoaded && nextProps.isScriptLoaded) {
//             console.log(nextProps);
//             this.loadVideo()
//         }
//         return null;
//     }
//     render = () => {
//         const { id } = this.props;
//         return (
//             <div >
//                 <div id={`youtube-player-${id}`} />
//                 <button onClick={this.playVideo}>play</button>
//                 <button onClick={this.pauseVideo}>pause</button>
//                 <button onClick={this.stopVideo}>stop</button>

//             </div>
//         );
//     };
// }

export default YouTubeVideo;