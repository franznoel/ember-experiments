import Ember from 'ember';

export default Ember.Controller.extend({
    people: [
        { name: "Jack" },
        { name: "Johanna" },
        { name: "Aaron" },
        { name: "Zeus" },
        { name: "Franz" },
        { name: "Paul" },
        { name: "Diane" },
    ],
    actions: {
        showInfo(name) {
            var personalInfo = document.querySelector('#personal-information');
            personalInfo.innerHTML = name;
            console.log('clicked data',name);
        }
    }
});
