import Ember from 'ember';

export function externalLink(params/*, hash*/) {
    var lowEnd = 0;
    var highEnd = params[0];
    if (params.length == 2) {
        lowEnd = params[0];
        highEnd = params[1];
    }
    var list = [];
    for (var i = lowEnd; i < highEnd; i++) {
        list.push(i);
    }
    return list;
}

export default Ember.Helper.helper(externalLink);
