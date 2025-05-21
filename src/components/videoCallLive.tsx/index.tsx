

// src/components/VideoCall.tsx
import React, { useEffect, useRef, useState } from "react";
import Peer,{MediaConnection} from "peerjs";

const VideoCall: React.FC = () => {
  const [peerId, setPeerId] = useState("");
  const [remoteId, setRemoteId] = useState("");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerRef = useRef<Peer | null>(null);
  const callRef = useRef<MediaConnection | null>(null);

  useEffect(() => {
    const peer = new Peer(); // uses PeerJS public server
    peerRef.current = peer;

    peer.on("open", (id) => {
      setPeerId(id);
      console.log("My peer ID is:", id);
    });

    peer.on("call", async (call) => {
      const localStream = await getMedia();
      call.answer(localStream);
      callRef.current = call;

      call.on("stream", (remoteStream) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = remoteStream;
        }
      });
    });

    return () => peer.destroy();
  }, []);

  const getMedia = async () => {
    const userStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    setStream(userStream);

    if (localVideoRef.current) {
      localVideoRef.current.srcObject = userStream;
    }

    return userStream;
  };

  const callPeer = async () => {
    const localStream = await getMedia();
    const call = peerRef.current?.call(remoteId, localStream);
    callRef.current = call!;

    call?.on("stream", (remoteStream) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
    });
  };

  const toggleAudio = () => {
    if (stream) {
      stream.getAudioTracks()[0].enabled = !audioEnabled;
      setAudioEnabled(!audioEnabled);
    }
  };

  const toggleVideo = () => {
    if (stream) {
      stream.getVideoTracks()[0].enabled = !videoEnabled;
      setVideoEnabled(!videoEnabled);
    }
  };

  const endCall = () => {
  // Stop all local media tracks
  stream?.getTracks().forEach((track) => track.stop());

  // Close the call connection if it exists
  if (callRef.current) {
    callRef.current.close();
    callRef.current = null;
  }

  // Remove remote video stream
  if (remoteVideoRef.current) {
    remoteVideoRef.current.srcObject = null;
  }

  // Remove local video
  if (localVideoRef.current) {
    localVideoRef.current.srcObject = null;
  }

  console.log("Call ended");
};


  return (
    <div style={{ padding: 20 }}>
      <h2>🎥 1-to-1 Video Chat</h2>
      <p><strong>Your ID:</strong> {peerId}</p>

      <input
        type="text"
        value={remoteId}
        onChange={(e) => setRemoteId(e.target.value)}
        placeholder="Enter peer ID to call"
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button onClick={callPeer} style={{ marginLeft: 10 }}>Call</button>

      <div style={{ display: "flex", marginTop: 20, gap: 20 }}>
        <div>
          <h4>You</h4>
          <video ref={localVideoRef} autoPlay muted playsInline width={300} />
        </div>
        <div>
          <h4>Remote</h4>
          <video ref={remoteVideoRef} autoPlay playsInline width={300} />
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={toggleAudio}>{audioEnabled ? "🔇 Mute Mic" : "🎤 Unmute Mic"}</button>
        <button onClick={toggleVideo} style={{ marginLeft: 10 }}>
          {videoEnabled ? "📷 Hide Video" : "📸 Show Video"}
        </button>
        <button onClick={endCall}>End Call</button>
      </div>
    </div>
  );
};

export default VideoCall;
