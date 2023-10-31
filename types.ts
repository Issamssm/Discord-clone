import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";
import { Server, Member, Profile } from "@prisma/client"

// تمثل فئة Server خادم TCP.يمكن استخدامه للاستماع إلى الاتصالات الواردة وقبولها.بمجرد قبول اتصال، ستصدر فئة Server حدث connection.

// تمثل فئة Socket مقبس TCP.يمكن استخدامه لإرسال واستقبال البيانات عبر اتصال TCP

export type ServerWithMembersWithProfiles = Server & { 
  members: (Member & { profile: Profile })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};