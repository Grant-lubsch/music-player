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
    const interval = setInterval(() =>
    if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
            min,
            sec
        });
    }
}, [sound]);