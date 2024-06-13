"use client";
import React from "react";
import { Button } from "./ui/button";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
  const router = useRouter();
  const calls = useCall();
  const { useLocalParticipant } = useCallStateHooks();

  const localParticipant = useLocalParticipant();

  const isMeetingOnwer =
    localParticipant && calls?.state.createdBy && calls.state.createdBy.id;

  if (!isMeetingOnwer) return null;

  const closeCallEveryOne = async () => {
    await calls.endCall();

    router.push("/");
  };

  return (
    <Button
      className="bg-red-500 hover:shadow-2xl hover:shadow-red-500"
      onClick={() => closeCallEveryOne()}
    >
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
