import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('or-or', 'Integration | Component | or or', {
  integration: true
});

renderAndCheck = (a, b, c) => {

  this.set('a', a);
  this.set('b', b);
  this.render(hbs`{{and-and a b}}`);
  assert.equal(this.$().text().trim(), `${c}`);

};
test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });


  renderAndCheck(true, true, true);
  renderAndCheck(5, 4, false);
  renderAndCheck(5, 5, true);
  renderAndCheck("a", 3, false);
  renderAndCheck("3", 3, false);
});
