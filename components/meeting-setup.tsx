"use client";

import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { FC, useEffect, useState } from "react";
import { Button } from "./ui/button";

interface Props {
  setisSetupCompleted: (value: boolean) => void;
}

const MeetingSetup: FC<Props> = ({ setisSetupCompleted }) => {
  const [isMicCamToogleOn, setIsMicCamToogleOn] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error("usecall must be used within StreamCall component");
  }

  useEffect(() => {
    if (isMicCamToogleOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToogleOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white ">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-2 font-medium">
        <label className="flex items-center text-white justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToogleOn}
            onChange={(e) => setIsMicCamToogleOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-2 py-2.5"
        onClick={() => {
          call.join();

          setisSetupCompleted(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
