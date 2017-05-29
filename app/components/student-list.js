import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        removeComponent() {
            this.attrs.onRemove();
        },

        resetComponent() {
            this.attrs.onReset();
        }
    }
});
