import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MeetingFormrum from "./css/MeetingFormcss";

const MeetingForm = () => {
  return (
    <MeetingFormrum>
      <div className="container">
        <div className="create">
          <h1>Create Video Call</h1>
          <form onSubmit={() => {}}>
            <div className="form-group">
              <label className="lable" htmlFor="createCallId">
                Create Call ID:
              </label>
              <input
                type="text"
                id="createCallId"
                name="callId"
                required
                placeholder="Enter ID"
              />
              <div className="buttons-container">
                <button>Create Call</button>
                <button>Join Call</button>
              </div>
              <input type="submit" value="Create Call" />
            </div>
          </form>
        </div>
        <div className="join">
          <h1>Join Video Call</h1>
          <form onSubmit={() => {}}>
            <div className="form-group">
              <label className="lable" htmlFor="joinCallId">
                Enter Call ID:
              </label>

              <input
                type="text"
                id="joinCallId"
                name="joinCallId"
                required
                placeholder="Enter ID"
              />
              <input type="submit" value="Join Call" />
            </div>
          </form>
        </div>
      </div>
    </MeetingFormrum>
  );
};

// const MeetingForm = () => {
//     const navigate = useNavigate();
//     const [callId, setCallId] = useState('');
//     const [joinCallId, setJoinCallId] = useState('');
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8081/user/video/create', { callId });
//             console.log('Video call created successfully!', response.data);
//             // Redirect or show a success message as needed
//             navigate('/meeting_button');
//         } catch (error) {
//             console.error('Error creating video call:', error);
//         }
//     };

//     const handleJoinCallSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             navigate('/camera');
//             // Send a POST request to join the video call
//             const response = await axios.post('http://localhost:8081/user/video/join/call', { joinCallId });
//             console.log('Joined video call successfully!', response.data);
//             // Redirect or show a success message as needed
//         } catch (error) {
//             console.error('Error joining video call:', error);
//         }
//     };

//     const handleChange = (e) => {
//         setCallId(e.target.value);
//     };
//     const handleJoinCallChange = (e) => {
//         setJoinCallId(e.target.value);
//     };

//     return (
// <div className="container">
//     <h1>Create Video Call</h1>
//     <form onSubmit={handleSubmit}>
//         <div className="form-group">
//             <label htmlFor="createCallId">Call ID:</label>
//             <input type="text" id="createCallId" name="callId" value={callId} onChange={handleChange} required />
//         </div>
//         <input type="submit" value="Create Call" />
//     </form>
//     <h1>Join Video Call</h1>
//     <form onSubmit={handleJoinCallSubmit}>
//         <div className="form-group">
//             <label htmlFor="joinCallId">Enter Call ID:</label>
//             <input type="text" id="joinCallId" name="joinCallId" value={joinCallId} onChange={handleJoinCallChange} required />
//         </div>
//         <input type="submit" value="Join Call" />
//     </form>
// </div>
//     );
// };

export default MeetingForm;
