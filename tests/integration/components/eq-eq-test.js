import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eq-eq', 'Integration | Component | eq eq', {
  integration: true
});

var renderAndCheck = (assert, a, b, c) => {

  this.set('a', a);
  this.set('b', b);
  this.render(hbs`{{and-and a b}}`);
  assert.equal(this.$().text().trim(), `${c}`);

};
test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });


  renderAndCheck(assert, true, true, true);
  renderAndCheck(assert, 5, 4, false);
  renderAndCheck(assert, 5, 5, true);
  renderAndCheck(assert, "a", 3, false);
  renderAndCheck(assert, "3", 3, false);
});
