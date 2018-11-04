---
title: Toyplot - A Simple Python Plotting Library
slug: toyplot
layout: simple_page
date: 2017-07-12
teaser: My previous attempts at using python for plotting saw me use the massive and widely used library of Matplotlib. I managed to produce some workable plots which I exported to jpeg and used on one of my medium articles. Although extremely customisable and functional I began the search for a plotting library with a nicer API that would export to more web friendly formats such as html and SVG.
---

My previous attempts at using python for plotting saw me use the massive and widely used library of [Matplotlib](https://matplotlib.org). I managed to produce some workable plots which I exported to jpeg and used on one of my [medium articles](https://medium.com/@lukewiwa/the-2020-code-of-points-what-we-might-expect-28afdab4b095). Although extremely customisable and functional I began the search for a plotting library with a nicer API that would export to more web friendly formats such as html and SVG.

After some searching I stumbled upon [toyplot](http://toyplot.readthedocs.io) which I've been quite happy with. I went ahead and updated the plots from my medium article using the library and uploaded the results to where I've mirrored that medium article [here](/blog/the_2020_code_predictions). The format options are various but I decided to export to an html/css/js format and simply copied and pasted into my static site generator.

The API is quite straight forward, it boils down to a single `Canvas` object which you can then add different attributes to. It's a nice way to block together the things you want. It doesn't seem to have hard opinions about what plot you are building to begin with which for me is nice as it generalises my code across different graph types. You tend to always begin the same way. Here's a quick snippet of the heat map plots I produced with it.

```python
import pandas as pd
import toyplot
import toyplot.html

# initialise a pandas dataframe of the code of points
with open(csv, 'r') as f:
    data = pd.read_csv(f)

# Produce heat map matrix. I chose Rings
app_name = 'Rings'
matrix = pd.crosstab(
    data[data.app==app_name].value,
    data.eg,
)

# Some variables to make the plot pretty
domain_min = matrix.values.min()
domain_max = matrix.values.max()
tlocator=toyplot.locator.Explicit(labels=list(matrix))
llocator=toyplot.locator.Explicit(labels=list(matrix.index))
width = 500
height = 600
label = app_name
tlabel = "Element Group"
llabel = "Value"
colormap = toyplot.color.brewer.map(
    "Greens",
    reverse=True,
    domain_min=domain_min,
    domain_max=domain_max,
)

# initialise the Canvas object with variables above
app_canvas, app_table = toyplot.matrix(
    (matrix, colormap),
    tlocator=tlocator,
    llocator=llocator,
    width=width,
    height=height,
    label=label,
    tlabel=tlabel,
    llabel=llabel,
)

# Clean up the Canvas, give it a name and render in html
app_table.body.grid.hlines[[0,-1],...] = "single"
app_table.body.grid.vlines[...,[0,-1]] = "single"
plot_name = "{}.html".format(app_name)
toyplot.html.render(
    app_canvas,
    plot_name,
)
```
The output is a rather nice looking plot based on html, css and javascript. The result is below.

![cool graph](/graphs/Parallel&#32;Bars.svg)

The full code is available on [Github](https://github.com/lukewiwa/matrix_plots_code_of_points) for anybody interested.