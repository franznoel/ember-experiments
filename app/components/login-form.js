import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        doLogin() {
            var creds = {
                email: this.get('email'),
                password: this.get('password'),
            };
            this.attrs.onSubmit(creds);
        }
    }
});
