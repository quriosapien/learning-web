# List Rendering

## Steps

1. Clear the values already in `DOM`.
2. `Iterate` through the list, `create element` for each value in the list, add `id, class, attributes, event-listeners` etc appropriately.
3. Append the new element to its parent.
4. Vola! You are done.

## Observations

* Rendring elements from an iteratable list (ex. Array) involves writing so many code in JavaScript.
* Some of these codes can be reused, but it depends highly on the person writing the functions. I wrote `createElement` with 3 arguments, `payload, success, fail`.
  * Now someone else might want to create it with a list of arguments like `parent, type, id, classList, attributes, children, event listeners, errorInCreation`.
You see, there's no standard when the same things are written again and again.
* When the list is updated, all the elements corresponding to the list needs to be re-rendered and updated into `DOM`. Now this is quite a heavy process.
  * Take for example, we want to render a list of live-chat messages on an app like `YouTube`. The scale we are talking here is about tens of thousands of messages. Or your `Twitter` feed, which has hunderds of tweets that will be re-rendered again and again.
  * This causes so much burden on the browser to do the same task repeatedly. Although your browser won't be bored of doing it again and again, yet this probably won't result in the best of user experience. With browsers, where we are not aware of how much resource is available to it, we want to use least amount of resources and let the browser be free to listen to user actions like `click` or `mouseover` or `keypressed` or any of the numerours things available.
* List Rendering in this way is too much of a programming logic. We used JavaScript all the time to do things that otherwise could have been abstracted away.
