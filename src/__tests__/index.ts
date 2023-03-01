import utils from '../utils';

// Init grades and weights.
const mastery0 = utils.createMastery('Noob', 0);
const mastery1 = utils.createMastery('Beginner', 2);
const mastery2 = utils.createMastery('Intermediate', 4);
const mastery3 = utils.createMastery('Advanced', 5);

const weight1 = utils.createWeight('Low', 0.25);
const weight2 = utils.createWeight('Medium', 0.5);
const weight3 = utils.createWeight('High', 0.75);
const weight4 = utils.createWeight('Top', 1);

const grade1 = utils.createGrade('Junior', 0);
const grade2 = utils.createGrade('Middle', 1);
const grade3 = utils.createGrade('Senior', 2);

// Create skills
const skill1 = utils.createSkill(
  'JavaScript',
  'JavaScript programming language',
  'Some comment',
);
const skill2 = utils.createSkill(
  'Vue.js',
  'Vue.js front-end framework',
  'Some comment',
);
const skill3 = utils.createSkill(
  'Node.js',
  'Node.js back-end JavaScript runtime environment',
  'Some comment',
);

const skill4 = utils.createSkill('English', 'Level of English', 'Some comment');

// Set weights for skills
const skillConfig1 = utils.createSkillConfig(
  'JavaScript Config',
  skill1,
  weight4,
  [
    utils.createGradeMastery(grade1, mastery1),
    utils.createGradeMastery(grade2, mastery2),
    utils.createGradeMastery(grade3, mastery3),
  ],
);
const skillConfig2 = utils.createSkillConfig('Vue.js Config', skill2, weight2, [
  utils.createGradeMastery(grade1, mastery1),
  utils.createGradeMastery(grade2, mastery2),
  utils.createGradeMastery(grade3, mastery3),
]);
const skillConfig3 = utils.createSkillConfig(
  'Node.js Config',
  skill3,
  weight3,
  [
    utils.createGradeMastery(grade1, mastery1),
    utils.createGradeMastery(grade2, mastery2),
    utils.createGradeMastery(grade3, mastery3),
  ],
);
const skillConfig4 = utils.createSkillConfig(
  'Node.js Config',
  skill4,
  weight3,
  [
    utils.createGradeMastery(grade1, mastery1),
    utils.createGradeMastery(grade2, mastery2),
    utils.createGradeMastery(grade3, mastery3),
  ],
);

// Setup assessment and candidate.
const assessment = utils.createAssessment(
  'JS',
  [grade1, grade2, grade3],
  [weight1, weight2, weight3, weight4],
  [mastery0, mastery1, mastery2, mastery3],
  [skillConfig1, skillConfig2, skillConfig3, skillConfig4],
);

const candidate = utils.createCandidate('John Doe', [assessment]);

// Complete assessment.
const skillMastery1 = utils.createSkillMastery(skill1, mastery3);
const skillMastery2 = utils.createSkillMastery(skill2, mastery2);
const skillMastery3 = utils.createSkillMastery(skill3, mastery3);
const skillMastery4 = utils.createSkillMastery(skill3, mastery3);

candidate.assessment[0].skillMastery = [
  skillMastery1,
  skillMastery2,
  skillMastery3,
  skillMastery4,
];

// Calculate result and get grade.
console.log({
  candidate,
  candidateResult: utils.calculateCandidateAssesmentResults(candidate),
});
