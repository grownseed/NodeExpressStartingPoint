NodeJS (0.8.x) / ExpressJS (3.0.x) Starting Point
====================================================

This is a starting point for a NodeJS/Express project that aims at keeping the file structure relatively tidy.

Previous versions:
* [NodeJS (0.6.x) / ExpressJS (2.5.x)](https://github.com/grownseed/NodeExpressStartingPoint/tree/v0.1.0)

Usage
-----

**Client-side**

 - As with any Express project, all images, client-side JS and CSS are to go in their respective folders under ``/public``.
 - A ``normalize.css`` file has already been added to the template to quickly start from a "clean" CSS point (thanks to [necolas](https://github.com/necolas)).

**Server-side**

 - ``app.js`` is responsible for starting the application, declaring any application-wide requirements and passing these to the router ``boot.js``.
 - ``boot.js`` uses ``fs`` to list all the possible routes from the ``/routes`` folder, then run these routes through ``vm``.
 - A file ``config.sample.js`` has been provided as a starting point and should be copied as ``config.js`` (and left ignored in ``.gitignore`` for security reasons). It should contain any configuration parameters that may be platform specific and/or sensitive.
 - The ``/views`` folder works exactly as expected with Express, ``layout.jade`` for your main layout, and then however many ``.jade`` files you need for your routes. A notifications area has been added by default to facilitate exposing your flash messages to the client.
 - Any files within ``/routes`` work as routes normally work in Express. There is no particular rule but the idea is to create a new file for each general piece of functionality (think controller in MVC).

Some Notes
----------

If you'd like to expose any variables to your routes, don't forget to pass them to ``boot`` as a parameter (``require('./boot')(app, config, fs/* other variables here */);`` in ``app.js`` and update ``boot.js`` accordingly)

If you're using a database you could create a ``/models`` folder at the root, and to avoid having to pass a whole list of models to ``boot``, I suggest using something along the lines of ``var models = {};`` in ``app.js`` and adding all your models to that hash, e.g. ``models.user = require('./models/host.js');``. You can then use ``models.user.find()`` in your routes.

Get This Running
----------------

Simply clone this repo, navigate into it and run ``npm install -d``. That's it!