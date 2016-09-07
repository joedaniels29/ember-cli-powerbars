![Powerbars!](webassets/powerbars.jpg?raw=true "Optional Title")
These are a set of extensions to HTMLBars similar to `ember-truth-helpers`.

## guide:

###eq-eq:
######Example:
Suppose `a = 4`, `b = 4`, `c = 5`.

```hbs
{{eq-eq a b}} {{! evaluates to true }}
{{eq-eq a c}} {{! evaluates to false }}
```

 |  a = `true` | b = `false` |
| --- | --- | --- |
| `true` | `true` | `false` |
| `false` | `false` | `true` |

###And-And:

######Example:
Suppose `a = 4`, `b = null`, `c = 5`.

```hbs
{{and-and a b}} {{! evaluates to 4}}
{{and-and b c}} {{! evaluates to c }}
```

###Or-Or:

######Example:
Suppose `a = 4`, `b = null`, `c = 5`.

```hbs
{{eq-eq a c}} {{! evaluates to 5}}
{{eq-eq a c}} {{! evaluates to null }}
```

###Is-Not:
######Example:
Suppose `a = 4`, `b = null`, `c = 5`.

```hbs
{{is-not a}} {{! evaluates to false }}
{{is-not b}} {{! evaluates to true }}
```

| `true` | `false` |
| --- | --- | 
| `false` | `true` |

## Numeric Opperations

### ++, -- :

######Example:
Suppose `a = 4`, `b = 4`, `c = 5`.

```hbs
{{plus-plus a}} {{! evaluates to 5 }}
{{plus-plus a c}} {{! evaluates to  9 }}
```

  | plus-plus | minus-minus |
| --- | --- | --- |
| 1 | 2 | 0 |
| opp(2, 3) | 5 | -1 |


## Usage
Just install with

    ember install ember-cli-powerbars

## Developing this Addon

* `ember server`
* Visit the dummy app at http://localhost:4200.
* Ember it up. 



## Running Tests

* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
