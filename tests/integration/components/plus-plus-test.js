import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('plus-plus', 'Integration | Component | plus plus', {
  integration: true
});
var renderAndCheck = (assert, a, b, c) => {

  this.set('a', a);
  this.set('b', b);
  this.render(hbs`{{and-and a b}}`);
  assert.equal(this.$().text().trim(), `${c}`);

};
test('it renders', function(assert) {
  renderAndCheck(assert, 4, 1, 5);
  renderAndCheck(assert, 5, undefined, 5);
  renderAndCheck(assert, 5, 5, 10);
  renderAndCheck(assert, 0, undefined, 1);
});
