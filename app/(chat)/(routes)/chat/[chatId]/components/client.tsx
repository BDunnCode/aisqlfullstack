"use client";

import { useCompletion } from "ai/react";
import { useState } from "react";
import { Companion, Message } from "@prisma/client";
import { useRouter } from "next/navigation";

import { ChatHeader } from "@/components/chat-header";


interface ChatClientProps {
  companion: Companion & {
      messages: Message[];
      _count: {
        messages: number;
      };
    };
  };

export const ChatClient = ({
  companion
}: ChatClientProps) => {
  const router = useRouter();
  const [messages, setMessages] = useState<any[]>(companion.messages);

  const {
    input, 
    isLoading,
    handleInputChange,
    handleSubmit,
    setInput,
  } = useCompletion({
    api: `/api/chat/${companion.id}`,
    onFinish(completion) {

    },
  });

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
    </div>
  )
}