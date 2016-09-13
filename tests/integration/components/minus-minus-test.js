import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('minus-minus', 'Integration | Component | minus minus', {
  integration: true
});

var renderAndCheck = (a, b, c) => {

  this.set('a', a);
  this.set('b', b);
  this.render(hbs`{{and-and a b}}`);
  assert.equal(this.$().text().trim(), `${c}`);

};
test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  renderAndCheck(5, 4, 1);
  renderAndCheck(5, 5, 0);
  renderAndCheck(0, undefined, -1);
});
