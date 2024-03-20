# CONTRIBUTING

Contributions are very welcome! :pray:

Fork the repo, do your things and create a pull request to **develop** branch. And check that all the tests are green :)

## Adding new faces

If you want to add a new face, the place to do it is at the **customs** javascript object at **src/faces.js** under the **custom** property.
Inside the **custom** property you can create another property, e.g. if you want to have a bundle of faces under the same description.
Also do not repeat any name, but the linter will show this issue.

e.g.

```javascript
const customs = {
    custom: {
        cthulhu: [ '^(;,;)^' ],
        facepalm: [ '(P,\')', '(p,\')' ],
        horns_heavy: [ '\\m/,' ],
        question: [ '(p_-)', '(-_q)' ],
        star: [ '☆' ],
        my_awesome_new_text_faces: {
            thinking_something: [ '^?' ],
            spiral_child: [ '^@' ]
        }
    }
};
```

or just:

```javascript
const customs = {
    custom: {
        cthulhu: [ '^(;,;)^' ],
        facepalm: [ '(P,\')', '(p,\')' ],
        horns_heavy: [ '\\m/,' ],
        question: [ '(p_-)', '(-_q)' ],
        star: [ '☆' ],
        thinking_something: [ '^?' ],
        spiral_child: [ '^@' ]
    }
};
```

The reason to add the new faces at **customs** object is to maintain the wikipedia's faces as is right now at the **canonical** object.

After adding a new faces, please update the number of faces at tests on [TOTAL_FACES](https://github.com/carvilsi/facetxt/blob/d9b08f9d4b3b23446c5fd78f3293501861a15016/tests/main.test.js#L6) constant.

## Adding or updating a functionality

Please open an issue with your idea and we'll discuss together ;) 

