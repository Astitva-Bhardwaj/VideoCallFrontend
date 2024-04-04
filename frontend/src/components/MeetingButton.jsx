import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MeetingButton = () => {
    const navigate = useNavigate();
    const [cameraAccess, setCameraAccess] = useState('');
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);

    useEffect(() => {
        const initializeMediaDevices = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                setCameraAccess('true');
                setIsCameraOn(true);
                setIsMicOn(true);
                console.log('Camera and microphone access granted:', stream);
            } catch (error) {
                console.error('Error accessing camera and microphone:', error);
                setCameraAccess('false');
            }
        };

        initializeMediaDevices();

        return () => {
            // Clean up media streams
            // Note: This will stop the camera and microphone when the component unmounts
            const tracks = document.getElementById('cameraView').srcObject?.getTracks();
            tracks && tracks.forEach(track => track.stop());
        };
    }, []);

    const toggleCamera = async () => {
        if (isCameraOn) {
            const tracks = document.getElementById('cameraView').srcObject?.getTracks();
            tracks && tracks.forEach(track => track.stop());
            setIsCameraOn(false);
        } else {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                document.getElementById('cameraView').srcObject = stream;
                setIsCameraOn(true);
            } catch (error) {
                console.error('Error toggling camera:', error);
            }
        }
    };

    const toggleMic = () => {
        const tracks = document.getElementById('cameraView').srcObject?.getAudioTracks();
        tracks && tracks.forEach(track => {
            track.enabled = !track.enabled;
        });
        setIsMicOn(prevState => !prevState);
    };

    const handleJoinNow = async (e) => {
        e.preventDefault();
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setCameraAccess('true');
            console.log('Camera access granted:', stream);
            navigate('/camera');
            const response = await axios.post('http://localhost:8081/user/video/join?cameraAccess=true', { cameraAccess: 'true' });
            console.log(response.data);
        } catch (error) {
            console.error('Error accessing camera or joining video call:', error);
            setCameraAccess('false');
        }
    };

    const handlePresent = async (e) => {
        e.preventDefault();
        setCameraAccess('false');

        try {
            // Update the value of the hidden input dynamically to "true"
            const screenPresentInput = document.getElementById('screenPresentInput');
            if (screenPresentInput) {
                screenPresentInput.value = 'true'; // Set the value to "true"
                console.log('screenPresent value:', screenPresentInput.value); 
            }
            navigate('/screen_sharing');
            // Submit the form programmatically here or use axios to send the data
            await axios.post('http://localhost:8081/user/video/present', { screenPresent: 'true' });
            console.log('Screen presentation request sent successfully');
        } catch (error) {
            console.error('Error sending screen presentation request:', error);
            // Handle error gracefully, such as displaying an error message to the user
        }
    };
    return (
        <div className="container">
            <h1>Meeting Page</h1>
            <div id="cameraContainer">
                <video id="cameraView" width="300" height="200" autoPlay muted></video>
            </div>
            <div className="buttons-container">
                <button onClick={toggleCamera}>{isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}</button>
                <button onClick={toggleMic}>{isMicOn ? 'Mute Mic' : 'Unmute Mic'}</button>
                <form id="joinNowForm" onSubmit={handleJoinNow}>
                    <input type="hidden" id="cameraAccessInput" name="cameraAccess" value={cameraAccess} />
                    <button type="submit" id="joinNowBtn" name="joinNow" value="Join Now">Join Now</button>
                </form>
                <form id="presentForm" onSubmit={handlePresent}>
                    <input type="hidden" id="screenPresentInput" name="screenPresent" value="false" />
                    <button type="submit" id="presentBtn" name="present" value="Present">Present</button>
                </form>
            </div>
        </div>
    );
};

export default MeetingButton;

