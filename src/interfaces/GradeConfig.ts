import { Grade } from "./Grade";
import { Mastery } from "./Mastery";
import { Priority } from "./Priority";

export interface GradeConfig {
    name: string;
    grade: Grade;
    priority: Priority;
    mastery: Mastery;
}