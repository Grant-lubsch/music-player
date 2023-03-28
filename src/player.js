import { useEffect, useState } from "react";
import useSound from "use-sound";
import qaka from "../assets/qala.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState({
        min: "",
        sec: ""
    });
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: ""
});

const [seconds, setSeconds] = useState();

const [play, { pause, duration, sound }] = useSound(qala);

useEffect(() => {
    if (duration) {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemian = Math.floor(sec % 60);
        setTime({
            min: min,
            sec: secRemain
        });
    }
}, [isPlaying]);

useEffect(() => {
    const interval = setInterval(() => {
    if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
            min,
            sec
        });
    }
}, 1000);
return () => clearInterval(interval);
}, [sound]);

const playingButton = () => {
    if (isPlaying) {
        pause();
        setIsPlaying(false);
    } else {
        play();
        setIsPlaying(true);
    }
};

return (
    <div className="component">
        <h2>Playing Now</h2>
        <img className="musicCover" src="https://picsum.photos/200/200" />
        <div>
            <h3 className="title">Title Here</h3>
            <p className="subTitle">Artist Here</p>
        </div>
        <div>
            <div className="time">
                <p>
                    {currTime.min}:{currTime.sec}
                </p>
                <p>
                    {time.min}:{time.sec}
                </p>
            </div>
            <input
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            className="timeline"
            onChange={(e) => {
                sound.seek([e.target.value]);
            }}
            />
        </div>
        <div>
            <button className="playButton">
                <IcontContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    
                </IcontContext.Provider>
            </button>
        </div>
    </div>
)