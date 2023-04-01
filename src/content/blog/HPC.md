---
title: "HPC-first"
description: "What is High Performance Computing?"
pubDate: "2023-04-01"
---

<p>
I have been taking an <abbr title="High Performance Computing">HPC</abbr> course during my master's, so why not write about it?
I will talk about what is High Performance Computing and its use cases
</p>

<h2>
Introduction to HPC
</h2>
In the past microprocessors were speeding in the increase of performance,
increasing an average of 50% per year, In the past years it dropped to 20% increase per yea

That isn't necessary a bad thing, because we have found other ways to increase
performance, Instead of designing and building faster microprocessors we put
_multiple_ processors on a single integrated circuit.

<h5>
But why we need increasing performance?
</h5>
To solve problems, problems such as:

- Decoding the human genome
- Fast and accurate web searches
- More realistic Games
- To automate more jobs (Feels like AI will replace us all soon)

And more complex problems that are still waiting for a solution, take for
example _**climate modeling**_, the study of _**complex molecules**_, _**drug discovery**_,
_**data analysis**_ and _**Energy Research**_.
I will talk briefly about _climate modeling_.

<h4>
Climate Modeling
</h4>

In the interest of better _understand_ climate change, we need far more accurate computer
models, to _gather_ and _understand_ data about interactions between atmosphere,
the oceans, solid land, and the ice caps at the poles. To make detailed studies
of how varied interventions might affect the global climate.

Now that we see the problems, lets talk about the solution, **Parallel Systems**

Up to now, performance increases are due to increasing density of transistors,
but there are inherent problems.

- Smaller Transistors = Faster processors.
- Faster Processors = Increased Power Consumption
- Increased Power Consumption = Increased Heat
- Increased Heat = Unreliable processors

Thus we moved away from single core systems to multicore processors, however
multicores don't help if the programmers aren't aware of them or don't know how to use them,
Serial programs don't benefit from this approach (in most cases).

<h5>
Why we need parallel programs
</h5>

Running multiple instances of a serial program often isn't useful,
it can be done be in a way that benefits the program (Nodejs Clusters and PM2)
However that isn't always the case and some programs cannot be scaled in the same way node does.
Like in games you cannot run multiple instances of a game, what you want is for it
to run faster.

That is why one must **rewrite** serial programs so that they are parallel  
Or write Translation Programs that convert serial ones into parallel.

_Note: This is very difficult to do, and success will be limited._

Also Sometimes the answer is to step back and devise an entirely new algorithm
