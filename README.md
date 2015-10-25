# ember-cli-powerbars
These are a set of extensions to HTMLBars similar to `ember-truth-helpers`.

## guide:

*   eq-eq:

     true | false |
    | --- | --- | --- |
    | True | true | false |
    | False | false | true |

*   And-And:

     true | false |
    | --- | --- | --- |
    | True | true | false |
    | False | false | false |

*   Or-Or:

     true | false |
    | --- | --- | --- |
    | True | true | true |
    | False | true | false |

*   Is-Not:

    | True | false |
    | False | true |

## numeric Opps

*   Minus-Minus:

     plus-plus | minus-minus |
    | --- | --- | --- |
    | 1 | 2 | 0 |
    | opp(2, 3) | 5 | -1 |


## Usage
Just install with

    ember install ember-cli-powerbars

## Developing this Addon

* `ember server`
* Visit the dummy app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
