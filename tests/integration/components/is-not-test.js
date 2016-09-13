import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is-not', 'Integration | Component | is not', {
  integration: true
});

var renderAndCheck = (assert, a, b, c) => {

  this.set('a', a);
  //this.set('b', b);
  this.render(hbs`{{and-and a}}`);
  assert.equal(this.$().text().trim(), `${c}`);

};
test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  renderAndCheck(assert, true, false);
  renderAndCheck(assert, false, true);
});
