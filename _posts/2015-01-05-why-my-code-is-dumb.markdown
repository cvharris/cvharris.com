---
layout: post
title: Why My Code Is Dumb
date: '2015-01-05 13:42:47'
---

<div style="text-align: center;"><i>...or, tips I learned from the Space Shuttle</i></div>
___
######What I Know is Wrong
My code is dumb, and not surprisingly so after just three years of self-taught PHP and Javascript development. I have produced a lot of great effort out of those three years, and I have ended up coding <i>good</i>, but not yet <i>great</i>. This didn't trouble me until recently.

My code is dumb because I started writing the code all wrong.  Not knowing any better, my code always fails at some early stage in the game, whether from something I notice or something others notice. Don't get me wrong, I didn't write code that failed to meet the expectations of my clients or product manager, but I met those expectations within such <i>narrow</i> bounds that the code became dumb after awhile.

Evidence that my code is dumb:
<ol>
<li>I'm more worried about the deadline to be reached than the approach to be correct.</li>
<li>Works well only in one intended way, surprisingly well in unintended ways.</li>
<li>Difficult to expand upon or adapt for a similar but as-of-yet unaccounted for purpose.</li>
<li>Hard for others to collaborate on.</li>
<li>Lacks comments, evidence that sometimes even I wasn't sure what was going on.</li>
<li>People will be upset/confused/disinterested because of poor user experience.</li>
</ol>
These are just a few, but there's many more little signs. Everything became clear to me my approach was wrong when I happened upon a simple article posted on Y-Combinator's HackerNews feed:
<blockquote class="twitter-tweet" lang="en"><p>Dumb Ideas in Computer Security (2005) <a href="http://t.co/1mVGeycz6b">http://t.co/1mVGeycz6b</a></p>&mdash; Hacker News (@newsycombinator) <a href="https://twitter.com/newsycombinator/status/551121016140087298">January 2, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
The article explains 6 dumb ideas which were accepted and allowed to fester without being challenged or thought through enough to prevent security breaches. These assumptions from the beginning simply didn't know any better, but continued acceptance of their practices assumed their legitimacy <strong><i>without ever questioning whether such practice deserved such acceptance</i></strong>. It was more than halfway through the article till I found a link to another article, which the author pointed to as a source for critically thinking about the way you approach a project.
<br />
<br />
The article he mentioned was none other than R.P. Feynman's "<a href="http://www.ranum.com/security/computer_security/editorials/dumb/feynman.html" target="_blank">Personal Observations on the Reliability of the Shuttle</a>", one of the more important members of the committee called to review NASA's safety practices after the Challenger disaster in 1986. Now the Space Shuttle is a hugely complex project, but it so successfully won the love and admiration of the public that I happened to gloss over the complexities involved and stick with the finished vision. Upon reading Feynman's article, however, it became clear that <i>practices adopted early on festered and led to poor decision-making which opened holes from which safety issues came through</i>. If something like this can happen on so great a project as the Space Shuttle, when men and women's lives and not to mention millions of dollars are at stake, no wonder it is happening all over my code as well.
<hr />
<h4>What I can Do Better</h4>
Thanks to these two articles I came up with a short, three-bulleted list of things I have been thinking about focusing on for my code but simply never addressed from various excuses. Many of my teammates, friends, and sampled blog posts have mentioned these variably and with greater detail than my own, but I have to affirm them for myself as well as for anyone else out there who unquestionably believes they code <i>just fine</i>.
<blockquote>
<i>"Unless your system was supposed to be hackable then it shouldn't be hackable."</i> - Marcus Ranum, <i><a href="http://www.ranum.com/security/computer_security/editorials/dumb/index.html" target="_blank">The Six Dumbest Ideas in Computer Security</a></i>
</blockquote>

1. Components
2. Testing
3. Scrapping everything and starting over.