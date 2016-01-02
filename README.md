![Powerbars!](webassets/powerbars.jpg?raw=true "Optional Title")
These are a set of extensions to HTMLBars similar to `ember-truth-helpers`.

## guide:

###eq-eq:
######Example:
Suppose `a = 4`, `b = 4`, `c = 4`.

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
Suppose `a = 4`, `b = 4`, `c = 4`.

```hbs
{{eq-eq a b}} {{! evaluates to true }}
{{eq-eq a c}} {{! evaluates to false }}
```

 |`true` | `false` |
| --- | --- | --- |
| `true` | `true` | `false` |
| `false` | `false` | `false` |

###Or-Or:

######Example:
Suppose `a = 4`, `b = 4`, `c = 4`.

```hbs
{{eq-eq a b}} {{! evaluates to true }}
{{eq-eq a c}} {{! evaluates to false }}
```

 | `true` | `false` |
| --- | --- | --- |
| `true` | `true` | `true` |
| `false` | `true` | `false` |

###Is-Not:
######Example:
Suppose `a = 4`, `b = 4`, `c = 4`.

```hbs
{{eq-eq a b}} {{! evaluates to true }}
{{eq-eq a c}} {{! evaluates to false }}
```

| `true` | `false` |
| --- | --- | 
| `false` | `true` |

## Numeric Opperations

### ++, -- :

######Example:
Suppose `a = 4`, `b = 4`, `c = 4`.

```hbs
{{eq-eq a b}} {{! evaluates to true }}
{{eq-eq a c}} {{! evaluates to false }}
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
