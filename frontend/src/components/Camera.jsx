import React, { useState, useEffect } from 'react';
import './css/Camera.css'
const CameraAccessReact = () => {
    const [isMicOn, setIsMicOn] = useState(true);
    const [stream, setStream] = useState(null);
    const [isCameraOn, setIsCameraOn] = useState(true);

    useEffect(() => {
        const initializeCamera = async () => {
            try {
                const userMediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
                setStream(userMediaStream);
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        initializeCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach((track) => track.stop());
            }
        };
    }, [stream]);
    const toggleCamera = async () => {
        if (isCameraOn) {
            const tracks = document
                .getElementById("cameraView")
                .srcObject?.getTracks();
            tracks && tracks.forEach((track) => track.stop());
            setIsCameraOn(false);
        } else {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });
                document.getElementById("cameraView").srcObject = stream;
                setIsCameraOn(true);
            } catch (error) {
                console.error("Error toggling camera:", error);
            }
        }
    };

    const toggleMic = () => {
        setIsMicOn((prev) => !prev);

        if (stream) {
            const audioTracks = stream.getAudioTracks();
            audioTracks.forEach((track) => {
                track.enabled = isMicOn;
            });
        }
    };

    return (
        <>
            <h1>Camera</h1>
            <div className="container">
                <div id="cameraContainer">
                    <video
                        id="cameraView"
                        width="300"
                        height="200"
                        autoPlay
                        muted
                    ></video>
                </div>
                <button className="Onoff" onClick={toggleCamera}>
                    {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
                </button>
            </div>

        </>
    )

};

export default CameraAccessReact;
