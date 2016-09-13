import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('and-and', 'Integration | Component | and and', {
    integration: true
});

var renderAndCheck = (a, b, c) => {

    this.set('a', a);
    this.set('b', b);
    this.render(hbs`{{and-and a b}}`);
    assert.equal(this.$().text().trim(), `${c}`);

};

test('it renders', function (assert) {
    // Handle any actions with this.on('myAction', function(val) { ... });
    renderAndCheck(true, true, true);
    renderAndCheck(true, false, false);
    renderAndCheck(true, false, false);
    renderAndCheck(false, true, false);
    renderAndCheck(false, false, false);
});
