import { Assessment } from "./Assessment";

export interface Candidate {
    name: string;
    assessments: Assessment[];
}