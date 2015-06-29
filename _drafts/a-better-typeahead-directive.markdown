---
layout: post
title: A Better Typeahead Directive
---

Recently my team had the need for a typeahead which combined both a select menu and an autocomplete input field. As soon as the field is selected, the entire list shows up for a user to scroll through and view every available option if they're not sure of what they want. Plus, results ought to be grouped, and that grouping should be sortable just like the results can be sorted.

There was no easy solution. Basically, Angular's `select` with an `ng-options` had no input field for filtering results, and plugins that exist already like <a href="">Select 2</a> and <a href="">Angular-UI Bootstrap's Typeahead</a> didn't round out the corners and give a full product. The closest was UI Bootstrap's Typeahead, but it could not group the results and added a ton of watchers for our long result lists.

So we came up with a short list of requirements for what would be a perfect `typeahead` directive.
<ol>
<li>Input field for a user to filter results</li>
<li>onFocus display the entire list to scroll through</li>
<li>Group results with the same <code>group by</code> syntax as <code>ng-options</code></li>
<li>Grouping could be sortable same way with the built-in <code>orderBy</code> filter, to look like <code>orderBy: [-type, +name]</code></li>
<li>Add as little overhead as possible, with 0 watchers added to result items</li>
</ol>
I had to start from scratch, but I needed an idea of what others had tried before. I chose the Ui-Bootstrap's Typeahead as my starting point because they worked with an input field and a simplet `ng-repeat` in order to get their directive going. They used the same basic syntax as Angular's `ng-options` as the expression to parse, but left out notable features like `group by` and `track by`. However, they had the main stuff down, so I started working on our list of needs starting with their stuff.

Our first need, to have an input field that would make filtering the results quick and painless, was already met with in UI Bootstrap's Typeahead. The tricky part was getting the entire unfiltered list to show up onFocus. First there was a governor setting on the min-length of the input in order to build out a result. Though this `typeahead-min-length` could be adjusted by the user the default was 1 and could not be set to 0. But removing this hard stop wasn't enoug because UI-Bootstrap's Typeahead jumps into the input's ng-model parsers, which requires some sort of input to kick it off, even if it's just an empty string. So I added a function called by `ng-focus`:
<pre>
function that I ran
</pre>
The next trick was to get `group by` syntax parsed by the directive. Looking at Angular's `ng-options` I could see how the expression broken up with regex matching and then parsed individually. So the directive's parser function went from this:
<pre>
blah blah blah
</pre>
to this:
<pre>
blah blah blah
</pre>
Now I had a `groupBy` function which I could make use of throughout the directive. Yet this was exactly the trickiest part. Essentially, the 