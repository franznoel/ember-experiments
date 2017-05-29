export function initialize(app/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  app.inject('route','firebase','service:firebase');
}

export default {
  name: 'firebase',
  initialize
};
