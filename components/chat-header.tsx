"use client";

import { Companion, Message } from "@prisma/client";
import { ChevronLeft, MessagesSquare } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { BotAvatar } from "@/components/bot-avatar";

interface ChatHeaderProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
};

export const ChatHeader = ({
  companion
}: ChatHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex w-full justify-between items-center 
    border-b border-primary/10 pb-4">
      <div className="flex gap-x-2 items-center">
        <Button onClick={() => router.back()} size="icon" variant="ghost">
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <BotAvatar src={companion.src} />
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-2">
            <p>
              {companion.name}
            </p>
            <div className="flex items-center text-xs
            text-muted-foreground">
              <MessagesSquare className="w-3 h-3 mr-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}