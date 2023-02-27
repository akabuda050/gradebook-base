import { IAssessment, IGrade } from ".";

export interface ICandidateAssessmentResult {
    assessment: IAssessment;
    score: number;
    grade?: IGrade['name'];
}