"use client";

import MeetingRoom from "@/components/meeting-room";
import MeetingSetup from "@/components/meeting-setup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import Loader from "@/components/loader";
import React, { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();

  const [isSetupCompleted, setisSetupCompleted] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;
  return (
    <StreamCall call={call}>
      <StreamTheme>
        {!isSetupCompleted ? (
          <MeetingSetup setisSetupCompleted={setisSetupCompleted} />
        ) : (
          <MeetingRoom />
        )}
      </StreamTheme>
    </StreamCall>
  );
};

export default Meeting;
