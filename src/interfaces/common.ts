import { Request } from "express";
import { User } from "./user";
import { Course } from "./course";

export interface IRequest extends Request {
    user?: User;
    course?: Course
}