import Ember from 'ember';

export function externalLink(params/*, hash*/) {
  return !params[0];
}

export default Ember.Helper.helper(externalLink);
