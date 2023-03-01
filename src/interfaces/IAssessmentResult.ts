import { IAssessment, IGrade } from '.';

export interface IAssessmentResult {
  assessment: IAssessment;
  grade: IGrade;
  score: number;
}
