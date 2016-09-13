import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('and-and', 'Integration | Component | and and', {
    integration: true
});

var renderAndCheck = (assert, a, b, c) => {

    this.set('a', a);
    this.set('b', b);
    this.render(hbs`{{and-and a b}}`);
    assert.equal(this.$().text().trim(), `${c}`);

};

test('it renders', function (assert) {
    // Handle any actions with this.on('myAction', function(val) { ... });
    renderAndCheck(assert, true, true, true);
    renderAndCheck(assert, true, false, false);
    renderAndCheck(assert, true, false, false);
    renderAndCheck(assert, false, true, false);
    renderAndCheck(assert, false, false, false);
});
