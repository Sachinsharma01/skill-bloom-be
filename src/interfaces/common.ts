import { Request } from "express";
import { User } from "./user.interfaces";

export interface IRequest extends Request {
    user?: User;
}