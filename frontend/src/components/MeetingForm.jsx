import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MeetingFormrum from "./css/MeetingFormcss";

const MeetingForm = () => {
  const navigate = useNavigate();
  const [callId, setCallId] = useState("");
  const [joinCallId, setJoinCallId] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/user/video/create",
        { callId }
      );
      console.log("Video call created successfully!", response.data);
      // Redirect or show a success message as needed
      navigate("/meeting_button");
    } catch (error) {
      console.error("Error creating video call:", error);
    }
  };

  const handleJoinCallSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate("/camera");
      const response = await axios.post(
        "http://localhost:8081/user/video/join/call",
        { joinCallId }
      );
      console.log("Joined video call successfully!", response.data);
      // Redirect or show a success message as needed
    } catch (error) {
      console.error("Error joining video call:", error);
    }
  };

  const handleChange = (e) => {
    setCallId(e.target.value);
  };
  const handleJoinCallChange = (e) => {
    setJoinCallId(e.target.value);
  };

  return (
    <MeetingFormrum>
      <div className="container">
        <div className="create">
          <h1>Create Video Call</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h2>Create Call ID:</h2>
              <input
                type="text"
                id="createCallId"
                name="callId"
                placeholder="Enter ID"
                value={callId}
                onChange={handleChange}
                required
              />
              <div className="buttons-container">
                <button type="submit">Create Call</button>
              </div>
            </div>
          </form>
        </div>
        <div className="join">
          <h1>Join Video Call</h1>
          <form onSubmit={handleJoinCallSubmit}>
            <div className="form-group">
              <h2>Enter Call ID:</h2>
              <input
                type="text"
                id="joinCallId"
                name="joinCallId"
                value={joinCallId}
                onChange={handleJoinCallChange}
                required
              />
              <div className="buttons-container">
                <button type="submit">Join Call</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MeetingFormrum>
  );
};



export default MeetingForm;
