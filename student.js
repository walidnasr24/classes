import Human from './human.js';
class student extends Human{
name="walid";
skills=["kawarji", "serveur", "php"]
}
const me =new student();
me.getJob("web developer");
me.learnNewSkill("react");
me.forgetSkill("react");
me.leaveJob();