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

const grade1 = utils.createGrade('Junior');
const grade2 = utils.createGrade('Middle');
const grade3 = utils.createGrade('Senior');

// Create skills
const skill1 = utils.createSkill(
  'JavaScript',
  'JavaScript programming language',
  'Some comment'
);
const skill2 = utils.createSkill(
  'Vue.js',
  'Vue.js front-end framework',
  'Some comment'
);
const skill3 = utils.createSkill(
  'Node.js',
  'Node.js back-end JavaScript runtime environment',
  'Some comment'
);

const skill4 = utils.createSkill('English', 'Level of English', 'Some comment');

// Set weights and other settings for skills
const skillConfig1 = utils.createSkillConfig(
  'JavaScript Config',
  skill1,
  weight4,
  [
    utils.createGradeMastery(grade1, mastery1),
    utils.createGradeMastery(grade2, mastery2),
    utils.createGradeMastery(grade3, mastery3),
  ]
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
  ]
);
const skillConfig4 = utils.createSkillConfig(
  'Node.js Config',
  skill4,
  weight3,
  [
    utils.createGradeMastery(grade1, mastery1),
    utils.createGradeMastery(grade2, mastery2),
    utils.createGradeMastery(grade3, mastery3),
  ]
);

const skillMaster1 = utils.createSkillMastery(
  'Skill Mastery 1',
  skill1,
  mastery3
);
const skillMaster2 = utils.createSkillMastery(
  'Skill Mastery 2',
  skill2,
  mastery2
);
const skillMaster3 = utils.createSkillMastery(
  'Skill Mastery 3',
  skill3,
  mastery3
);
const skillMaster4 = utils.createSkillMastery(
  'Skill Mastery 4',
  skill3,
  mastery3
);

const candidate = utils.createCandidate('John Doe', [
  utils.createAssessment(
    'JS',
    [grade1, grade2, grade3],
    [skillConfig1, skillConfig2, skillConfig3, skillConfig4],
    [skillMaster1, skillMaster2, skillMaster3, skillMaster4]
  ),
]);

console.log({
  candidate,
  results: utils.calculateCandidateAssesmentResults(candidate),
});
