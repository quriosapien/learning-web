# For Course Creators ONLY

## HTML Forms

### Tests

* Assert that file `index.html` exists
* Assert that file starts with `<!DOCTYPE html>`
* Assert that file contains exactly one `html` tag
* Assert that the `html` tag contains exactly one tag of `head` and `body`
* Assert that `head` tag contains these
  * `<meta charset="UTF-8">`
  * `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  * `title` tag with some title
  * `style` tag with external file reference
  * no `script` tag
* Assert that `body` element contains
  * one `form` element
  * `form` element contains
    * attribute `action` with value `https://www.google.com/search`
    * attribute `method` with value `GET`
    * `input` tag with attributes `name=query`
    * `button` with attribute `type=submit` // TODO - is this required ??

### Meta

* Create tests in jest for everything in `"Tests"`
