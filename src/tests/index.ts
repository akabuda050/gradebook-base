import utils from "./utils";

// Example
const mastery0 = utils.createMastery("Noob", 0);
const mastery1 = utils.createMastery("Beginner", 1);
const mastery2 = utils.createMastery("Intermediate", 2);
const mastery3 = utils.createMastery("Advanced", 3);

const priority1 = utils.createPriority("Low", 1);
const priority2 = utils.createPriority("Medium", 2);
const priority3 = utils.createPriority("High", 3);

const grade1 = utils.createGrade("Junior");
const grade2 = utils.createGrade("Middle");
const grade3 = utils.createGrade("Senior");

const skill1 = utils.createSkill("JavaScript", "JavaScript programming language", "Some comment");
const skill2 = utils.createSkill("Vue.js", "Vue.js front-end framework", "Some comment");
const skill3 = utils.createSkill("Node.js", "Node.js back-end JavaScript runtime environment", "Some comment");

const group1 = utils.createSkillConfigGroup("JS Skill Config Group 1", [
    utils.createSkillConfig('JS Skill Config Group 1 Skill 1 Config', skill1, [
        utils.createGradeConfig(grade1, priority1, mastery0),
        utils.createGradeConfig(grade2, priority1, mastery1),
        utils.createGradeConfig(grade3, priority1, mastery2),
    ]),
    utils.createSkillConfig('JS Skill Config Group 1 Skill 2 Config', skill2, [
        utils.createGradeConfig(grade1, priority1, mastery1),
        utils.createGradeConfig(grade2, priority1, mastery1),
        utils.createGradeConfig(grade3, priority1, mastery2),
    ]),
    utils.createSkillConfig('JS Skill Config Group 1 Skill 3 Config', skill3, [
        utils.createGradeConfig(grade1, priority1, mastery0),
        utils.createGradeConfig(grade2, priority1, mastery3),
        utils.createGradeConfig(grade3, priority1, mastery3),
    ]),
]);

const skillMasteryGroup1 = utils.createSkillMasteryGroup('JS Skill Mastery Group 1', [
    utils.createSkillMastery('JS Skill Mastery Group 1', skill1, mastery0),
    utils.createSkillMastery('JS Skill Mastery Group 1', skill2, mastery1),
    utils.createSkillMastery('JS Skill Mastery Group 1', skill3, mastery3),
])

const candidate = utils.createCandidate('John Doe', [
    utils.createAssessment(
        'JS',
        [
            group1,
        ],
        [
            skillMasteryGroup1,
        ]
    )
]);