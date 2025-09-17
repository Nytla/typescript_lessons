"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class with properties and methods
class User {
    skills;
    constructor(param) {
        this.skills = param;
    }
    ;
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
            console.log(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
            console.log(skillOrSkills);
        }
    }
}
new User([]).addSkill('WebDev');
new User([]).addSkill(['HR', 'Python', 'TS', 'PHP']);
function run(distance) {
    if (typeof distance == 'number') {
        return 777;
    }
    else {
        return 'This is string';
    }
}
;
// Init
console.log(run(543));
//# sourceMappingURL=dz_5.js.map