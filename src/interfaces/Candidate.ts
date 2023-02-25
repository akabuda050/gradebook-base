import { Assessment } from ".";

export interface Candidate {
    name: string;
    assessments: Assessment[];
}