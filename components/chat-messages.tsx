"use client";

import { Companion } from "@prisma/client";

interface ChatMessagesProps {
  messages: any[];
  isLoading: boolean;
  companion: Companion;
};

export const ChatMessages = () => {
  return (
    <div>
      ChatMessages
    </div>
  )
}