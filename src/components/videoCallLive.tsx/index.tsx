// src/components/VideoCall.tsx
import React, { useEffect, useRef, useState } from "react";
import Peer, { MediaConnection } from "peerjs";

const VideoCall: React.FC = () => {
  const [peerId, setPeerId] = useState("");
  const [remoteId, setRemoteId] = useState("");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [incomingCall, setIncomingCall] = useState<MediaConnection | null>(null);

  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerRef = useRef<Peer | null>(null);
  const callRef = useRef<MediaConnection | null>(null);

  const audioChunks: Blob[] = [];

  const startRecordingRemoteAudio = (remoteStream: MediaStream) => {

     let mimeType = "";

  if (MediaRecorder.isTypeSupported("audio/webm")) {
    mimeType = "audio/webm";
  } else if (MediaRecorder.isTypeSupported("audio/ogg")) {
    mimeType = "audio/ogg";
  } else {
    console.error("No supported audio MIME type found for MediaRecorder.");
    return;
  }

    const mediaRecorder = new MediaRecorder(remoteStream, { mimeType });

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
        console.log("Captured audio chunk:", event.data);
      }
    };

    mediaRecorder.start(1000);
    console.log("Recording remote audio...");
  };

  useEffect(() => {
    const peer = new Peer();
    peerRef.current = peer;

    peer.on("open", (id) => {
      setPeerId(id);
      console.log("My peer ID is:", id);
    });

    peer.on("call", async (call) => {
      setIncomingCall(call); // Wait for user to accept
    });

    return () => peer.destroy();
  }, []);

  const getMedia = async () => {
    const userStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    setStream(userStream);
    if (localVideoRef.current) localVideoRef.current.srcObject = userStream;
    return userStream;
  };

  const callPeer = async () => {
    const localStream = await getMedia();
    const call = peerRef.current?.call(remoteId, localStream);
    callRef.current = call!;

    call?.on("stream", (remoteStream) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
        startRecordingRemoteAudio(remoteStream);
      }
    });
  };

  const acceptCall = async () => {
    if (!incomingCall) return;
    const localStream = await getMedia();
    incomingCall.answer(localStream);
    callRef.current = incomingCall;

    incomingCall.on("stream", (remoteStream) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
        startRecordingRemoteAudio(remoteStream);
      }
    });

    setIncomingCall(null);
  };

  const rejectCall = () => {
    incomingCall?.close();
    setIncomingCall(null);
  };

  const toggleAudio = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      audioTrack.enabled = !audioEnabled;
      setAudioEnabled(!audioEnabled);
    }
  };

  const toggleVideo = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.enabled = !videoEnabled;
      setVideoEnabled(!videoEnabled);
    }
  };

  const endCall = () => {
    stream?.getTracks().forEach((track) => track.stop());

    if (callRef.current) {
      callRef.current.close();
      callRef.current = null;
    }

    if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;
    if (localVideoRef.current) localVideoRef.current.srcObject = null;

    console.log("Call ended");
  };

  return (
    <div className="flex w-full [@media(max-width:1100px)]:flex-col items-center min-h-[250%] h-full">
      <div className="w-[40%] [@media(max-width:1100px)]:w-[90%] p-5">
        <h2>🎥 1-to-1 Video Chat</h2>
        <p className="bg-gray-400 w-fit p-2 rounded-lg">
          <strong>Your ID:</strong> {peerId}
        </p>

        <div className="flex items-center">
           <input
          type="text"
          value={remoteId}
          onChange={(e) => setRemoteId(e.target.value)}
          placeholder="Enter peer ID to call"
          className="border-2 outline-none rounded-md m-3 p-2 w-[300px]"
        />
        <div onClick={callPeer} className="p-2 bg-blue-800 text-white w-fit h-fit cursor-pointer  rounded-lg">Call</div>
        </div>

       


        <div className="flex items-center gap-4 mt-5">
          <div className="bg-gray-600 p-3 rounded-lg">
            <h4 className="text-white font-bold">Remote</h4>
            <video ref={remoteVideoRef} autoPlay playsInline width={400} />
             <div className="bg-gray-700 p-3 rounded-lg w-fit">
            <h4 className="text-white font-bold">You</h4>
            <video ref={localVideoRef} autoPlay muted playsInline width={100} />
          </div>
          </div>
         
        </div>

        <div className="flex items-center text-black gap-3 mt-4">
          <button onClick={toggleAudio} className="bg-gray-300 p-2 rounded-lg">
            {audioEnabled ? "🔇 Mute Mic" : "🎤 Unmute Mic"}
          </button>
          <button onClick={toggleVideo} className="bg-gray-300 p-2 rounded-lg">
            {videoEnabled ? "📷 Hide Video" : "📸 Show Video"}
          </button>
          <button onClick={endCall} className="bg-red-400  p-2 rounded-lg">
            End Call
          </button>
        </div>

        {incomingCall && (
          <div className="mt-6 bg-yellow-200 p-4 fixed z-100 [@media(max-width:1100px)]:absolute top-0 rounded-md">
            <p className="mb-2 font-bold">📞 Incoming call...</p>
            <div className="flex gap-3">
              <button onClick={acceptCall} className="bg-green-500  px-4 py-2 rounded-md">
                ✅ Accept
              </button>
              <button onClick={rejectCall} className="bg-red-500 px-4 py-2 rounded-md">
                ❌ Reject
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-[50%] [@media(max-width:1100px)]:min-h-[80%] [@media(max-width:1100px)]:w-[80%] h-full min-h-[500px] rounded-lg p-2 flex gap-1  ">
       
        <div className=" w-[50%] bg-gray-300 p-3 text-black overflow-y-scroll max-h-[500px] py-2">
          <p className="text-center font-bold absolute bg-transparent backdrop-blur-lg p-3 rounded-lg">Interviewer's </p>

            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
        </div>
        <div className="w-[50%] bg-gray-600 p-3 text-white overflow-y-scroll">
          <p className="text-center font-bold absolute bg-transparent backdrop-blur-lg p-3 rounded-lg">AI's Response</p>
           <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>
            <p>This is the answer aby ai, generated by gemini ai to perform as an interview assistance</p>

        </div>
      </div>
    </div>
  );
};

export default VideoCall;
