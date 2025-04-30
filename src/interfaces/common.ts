import { Request } from "express";
import { User } from "./user";

export interface IRequest extends Request {
    user?: User;
}