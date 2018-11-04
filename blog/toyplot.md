---
title: Toyplot - A Simple Python Plotting Library
slug: toyplot
layout: simple_page
date: 2017-07-12
teaser: My previous attempts at using python for plotting saw me use the massive and widely used library of Matplotlib. I managed to produce some workable plots which I exported to jpeg and used on one of my medium articles. Although extremely customisable and functional I began the search for a plotting library with a nicer API that would export to more web friendly formats such as html and SVG.
---

My previous attempts at using python for plotting saw me use the massive and widely used library of [Matplotlib](https://matplotlib.org). I managed to produce some workable plots which I exported to jpeg and used on one of my [medium articles](https://medium.com/@lukewiwa/the-2020-code-of-points-what-we-might-expect-28afdab4b095). Although extremely customisable and functional I began the search for a plotting library with a nicer API that would export to more web friendly formats such as html and SVG.

After some searching I stumbled upon [toyplot](http://toyplot.readthedocs.io) which I've been quite happy with. I went ahead and updated the plots from my medium article using the library and uploaded the results to where I've mirrored that medium article here [/blog/the_2020_code_predictions]. The format options are various but I decided to export to an html/css/js format and simply copied and pasted into my static site generator.

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

<div align="center" class="toyplot" id="t7c87881ec70f40d4b21526d0ba85bdaf"><svg class="toyplot-canvas-Canvas" height="600.0px" id="ta45422cdca9c4af489be8ba37a4bb82e" preserveAspectRatio="xMidYMid meet" style="background-color:transparent;fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:Helvetica;font-size:12px;opacity:1.0;stroke:rgb(16.1%,15.3%,14.1%);stroke-opacity:1.0;stroke-width:1.0" viewBox="0 0 500.0 600.0" width="500.0px" xmlns="http://www.w3.org/2000/svg" xmlns:toyplot="http://www.sandia.gov/toyplot" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="toyplot-coordinates-Table" id="t933d46c8c7f54eb2bec794034c034bf2"><g transform="translate(250.0,50.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:14.0;font-weight:bold;stroke:none;vertical-align:baseline;white-space:pre" x="-19.446" y="-10.423">Rings</text></g><g transform="translate(130.0,80.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-3.336" y="3.066">1</text></g><g transform="translate(210.0,80.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-3.336" y="3.066">2</text></g><g transform="translate(290.0,80.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-3.336" y="3.066">3</text></g><g transform="translate(370.0,80.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-3.336" y="3.066">4</text></g><g transform="translate(85.0,120.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-8.004" y="3.066">A</text></g><rect height="60.0" style="fill:rgb(17.9%,58.9%,30.4%);fill-opacity:1.0;stroke:none" width="80.0" x="90.0" y="90.0"><title>12.0</title></rect><rect height="60.0" style="fill:rgb(72.8%,89.2%,70.2%);fill-opacity:1.0;stroke:none" width="80.0" x="170.0" y="90.0"><title>5.0</title></rect><rect height="60.0" style="fill:rgb(96.9%,98.8%,96.1%);fill-opacity:1.0;stroke:none" width="80.0" x="250.0" y="90.0"><title>0.0</title></rect><rect height="60.0" style="fill:rgb(85%,94.1%,82.7%);fill-opacity:1.0;stroke:none" width="80.0" x="330.0" y="90.0"><title>3.0</title></rect><g transform="translate(85.0,180.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-8.004" y="3.066">B</text></g><rect height="60.0" style="fill:rgb(31.4%,69.9%,39.4%);fill-opacity:1.0;stroke:none" width="80.0" x="90.0" y="150.0"><title>10.0</title></rect><rect height="60.0" style="fill:rgb(31.4%,69.9%,39.4%);fill-opacity:1.0;stroke:none" width="80.0" x="170.0" y="150.0"><title>10.0</title></rect><rect height="60.0" style="fill:rgb(85%,94.1%,82.7%);fill-opacity:1.0;stroke:none" width="80.0" x="250.0" y="150.0"><title>3.0</title></rect><rect height="60.0" style="fill:rgb(79.4%,91.9%,76.8%);fill-opacity:1.0;stroke:none" width="80.0" x="330.0" y="150.0"><title>4.0</title></rect><g transform="translate(85.0,240.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-8.664" y="3.066">C</text></g><rect height="60.0" style="fill:rgb(57.9%,82.7%,56.5%);fill-opacity:1.0;stroke:none" width="80.0" x="90.0" y="210.0"><title>7.0</title></rect><rect height="60.0" style="fill:rgb(23.4%,64.8%,34.8%);fill-opacity:1.0;stroke:none" width="80.0" x="170.0" y="210.0"><title>11.0</title></rect><rect height="60.0" style="fill:rgb(23.4%,64.8%,34.8%);fill-opacity:1.0;stroke:none" width="80.0" x="250.0" y="210.0"><title>11.0</title></rect><rect height="60.0" style="fill:rgb(57.9%,82.7%,56.5%);fill-opacity:1.0;stroke:none" width="80.0" x="330.0" y="210.0"><title>7.0</title></rect><g transform="translate(85.0,300.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-8.664" y="3.066">D</text></g><rect height="60.0" style="fill:rgb(85%,94.1%,82.7%);fill-opacity:1.0;stroke:none" width="80.0" x="90.0" y="270.0"><title>3.0</title></rect><rect height="60.0" style="fill:rgb(0%,26.7%,10.6%);fill-opacity:1.0;stroke:none" width="80.0" x="170.0" y="270.0"><title>17.0</title></rect><rect height="60.0" style="fill:rgb(17.9%,58.9%,30.4%);fill-opacity:1.0;stroke:none" width="80.0" x="250.0" y="270.0"><title>12.0</title></rect><rect height="60.0" style="fill:rgb(72.8%,89.2%,70.2%);fill-opacity:1.0;stroke:none" width="80.0" x="330.0" y="270.0"><title>5.0</title></rect><g transform="translate(85.0,360.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-8.004" y="3.066">E</text></g><rect height="60.0" style="fill:rgb(93.5%,97.5%,92.2%);fill-opacity:1.0;stroke:none" width="80.0" x="90.0" y="330.0"><title>1.0</title></rect><rect height="60.0" style="fill:rgb(0%,41.8%,16.9%);fill-opacity:1.0;stroke:none" width="80.0" x="170.0" y="330.0"><title>15.0</title></rect><rect height="60.0" style="fill:rgb(79.4%,91.9%,76.8%);fill-opacity:1.0;stroke:none" width="80.0" x="250.0" y="330.0"><title>4.0</title></rect><rect height="60.0" style="fill:rgb(85%,94.1%,82.7%);fill-opacity:1.0;stroke:none" width="80.0" x="330.0" y="330.0"><title>3.0</title></rect><g transform="translate(85.0,420.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-7.332" y="3.066">F</text></g><rect height="60.0" style="fill:rgb(96.9%,98.8%,96.1%);fill-opacity:1.0;stroke:none" width="80.0" x="90.0" y="390.0"><title>0.0</title></rect><rect height="60.0" style="fill:rgb(65.8%,86.2%,63.3%);fill-opacity:1.0;stroke:none" width="80.0" x="170.0" y="390.0"><title>6.0</title></rect><rect height="60.0" style="fill:rgb(90.2%,96.2%,88.3%);fill-opacity:1.0;stroke:none" width="80.0" x="250.0" y="390.0"><title>2.0</title></rect><rect height="60.0" style="fill:rgb(90.2%,96.2%,88.3%);fill-opacity:1.0;stroke:none" width="80.0" x="330.0" y="390.0"><title>2.0</title></rect><g transform="translate(85.0,480.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:normal;stroke:none;vertical-align:baseline;white-space:pre" x="-9.336" y="3.066">G</text></g><rect height="60.0" style="fill:rgb(96.9%,98.8%,96.1%);fill-opacity:1.0;stroke:none" width="80.0" x="90.0" y="450.0"><title>0.0</title></rect><rect height="60.0" style="fill:rgb(96.9%,98.8%,96.1%);fill-opacity:1.0;stroke:none" width="80.0" x="170.0" y="450.0"><title>0.0</title></rect><rect height="60.0" style="fill:rgb(96.9%,98.8%,96.1%);fill-opacity:1.0;stroke:none" width="80.0" x="250.0" y="450.0"><title>0.0</title></rect><rect height="60.0" style="fill:rgb(93.5%,97.5%,92.2%);fill-opacity:1.0;stroke:none" width="80.0" x="330.0" y="450.0"><title>1.0</title></rect><g transform="translate(250.0,60.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:bold;stroke:none;vertical-align:baseline;white-space:pre" x="-43.008" y="3.066">Element Group</text></g><g transform="translate(60.0,300.0)rotate(-90.0)"><text style="fill:rgb(16.1%,15.3%,14.1%);fill-opacity:1.0;font-family:helvetica;font-size:12.0;font-weight:bold;stroke:none;vertical-align:baseline;white-space:pre" x="-16.008" y="3.066">Value</text></g><line style="stroke:rgb(16.1%,15.3%,14.1%);stroke-opacity:1.0;stroke-width:0.5" x1="90.0" x2="410.0" y1="90.0" y2="90.0"></line><line style="stroke:rgb(16.1%,15.3%,14.1%);stroke-opacity:1.0;stroke-width:0.5" x1="90.0" x2="410.0" y1="510.0" y2="510.0"></line><line style="stroke:rgb(16.1%,15.3%,14.1%);stroke-opacity:1.0;stroke-width:0.5" x1="90.0" x2="90.0" y1="90.0" y2="510.0"></line><line style="stroke:rgb(16.1%,15.3%,14.1%);stroke-opacity:1.0;stroke-width:0.5" x1="410.0" x2="410.0" y1="90.0" y2="510.0"></line></g></svg><div class="toyplot-interactive"><ul class="toyplot-mark-popup" onmouseleave="this.style.visibility='hidden'" style="background:rgba(0%,0%,0%,0.75);border:0;border-radius:6px;color:white;cursor:default;list-style:none;margin:0;padding:5px;position:fixed;visibility:hidden">
            <li class="toyplot-mark-popup-title" style="color:lightgray;cursor:default;padding:5px;list-style:none;margin:0"></li>
            <li class="toyplot-mark-popup-save-csv" onmouseout="this.style.color='white';this.style.background='steelblue'" onmouseover="this.style.color='steelblue';this.style.background='white'" style="border-radius:3px;padding:5px;list-style:none;margin:0">
                Save as .csv
            </li>
        </ul><script>
        (function()
        {
          var data_tables = [{"id": "t933d46c8c7f54eb2bec794034c034bf2", "title": "Table Data", "names": [null, null, "Element Group", "Element Group", "Element Group", "Element Group", null, null], "columns": [[null, "Value", "Value", "Value", "Value", "Value", "Value", "Value", null, null], [null, "A", "B", "C", "D", "E", "F", "G", null, null], ["1", 12.0, 10.0, 7.0, 3.0, 1.0, 0.0, 0.0, null, null], ["2", 5.0, 10.0, 11.0, 17.0, 15.0, 6.0, 0.0, null, null], ["3", 0.0, 3.0, 11.0, 12.0, 4.0, 2.0, 0.0, null, null], ["4", 3.0, 4.0, 7.0, 5.0, 3.0, 2.0, 1.0, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null]], "filename": "toyplot"}];

          function save_csv(data_table)
          {
            var uri = "data:text/csv;charset=utf-8,";
            uri += data_table.names.join(",") + "\n";
            for(var i = 0; i != data_table.columns[0].length; ++i)
            {
              for(var j = 0; j != data_table.columns.length; ++j)
              {
                if(j)
                  uri += ",";
                uri += data_table.columns[j][i];
              }
              uri += "\n";
            }
            uri = encodeURI(uri);

            var link = document.createElement("a");
            if(typeof link.download != "undefined")
            {
              link.href = uri;
              link.style = "visibility:hidden";
              link.download = data_table.filename + ".csv";

              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
            else
            {
              window.open(uri);
            }
          }

          function open_popup(data_table)
          {
            return function(e)
            {
              var popup = document.querySelector("#t7c87881ec70f40d4b21526d0ba85bdaf .toyplot-mark-popup");
              popup.querySelector(".toyplot-mark-popup-title").innerHTML = data_table.title;
              popup.querySelector(".toyplot-mark-popup-save-csv").onclick = function() { popup.style.visibility = "hidden"; save_csv(data_table); }
              popup.style.left = (e.clientX - 50) + "px";
              popup.style.top = (e.clientY - 20) + "px";
              popup.style.visibility = "visible";
              e.stopPropagation();
              e.preventDefault();
            }

          }

          for(var i = 0; i != data_tables.length; ++i)
          {
            var data_table = data_tables[i];
            var event_target = document.querySelector("#" + data_table.id);
            event_target.oncontextmenu = open_popup(data_table);
          }
        })();
        </script></div></div>

The full code is available on [Github](https://github.com/lukewiwa/matrix_plots_code_of_points) for anybody interested.