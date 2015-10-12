import Ember from 'ember';
import ENV from 'frontend/config/environment';

export function externalLink(params/*, hash*/) {
  return !params[0];
}

export default Ember.Helper.helper(externalLink);
