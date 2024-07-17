import { Document } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export interface UserPayload {
  name: string;
  email: string;
}
