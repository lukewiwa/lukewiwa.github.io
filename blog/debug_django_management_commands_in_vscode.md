---
title: Debug Django Management Commands In VSCode
date: 2024-04-29
tags: blog
layout: layouts/Blog.tsx
---

Adding break points to a django management command in Visual Studio Code is one of those tasks that I’ve been wanting to achieve for a while but never really got around to investigating. I generally fell back on print statements which has been _Good Enough_.

<!--more-->

VSCode does give you some helpful templates for debugging commands when setting them up. It already has a pretty workable Django server solution but nothing specifically in the way of management commands. However the entry for [“Python File With Arguments”](https://code.visualstudio.com/docs/python/debugging#_set-configuration-options) looked interesting and that seemed like a good stepping stone into what I wanted.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python Debugger: Current File with Arguments",
      "type": "debugpy",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal",
      "args": "${command:pickArgs}"
    }
  ]
}
```

This is pretty close. What we want to do is tweak the program entry so that it follows the standard `./manage.py <filename> [args]` format that Django requires. For the arguments we can keep the args entry in the configuration as is. The tricky part is getting the currently open file without the extension. VSCode already has this as a predefined variable for this `${fileBasenameNoExtension}`. So with this we can put together a debug configuration that should allow us to add breakpoints to a management command and run that file with all the niceties of VSCode debugging. Here’s the full configuration.


```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python Debugger: Django Management Command",
      "type": "debugpy",
      "request": "launch",
      // Make sure the path to `manage.py` is correct for your project
      "program": "${workspaceFolder}/backend/manage.py ${fileBasenameNoExtension}",
      "console": "integratedTerminal",
      "args": "${command:pickArgs}"
    }
  ]
}
```

This way we can set break points inside a management command file and run the currently open file from the debugging options. You’ll also have options to add arbitrary arguments too.
