import Ember from 'ember';

function eqeq(params/*, hash*/) {
  return params[0]==params[1];
}

export default Ember.Helper.helper(eqeq);
