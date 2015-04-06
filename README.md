# LoLManager

An awesome simuation for lol


![alt tag](https://raw.githubusercontent.com/Gollwu/LoLManager/master/assets/doge.jpg "Doge")


## Production environment

### Installation

This module is installed via npm:

``` bash
$ npm install
$ cp config.js.dist config.js
```

Change the values in the config.js file to adapt it for your system.

### launch the application :

``` bash
$ node src/app.js
```

## Developement tools

After the `npm install` command, you can build development elements :
```
$ gulp install-dev
```

The following tools are available :
```
$ gulp apidoc       # Create a documentation of the REST API in the doc/ folder
$ gulp watch        # Watch for changes and rebuild the front app
$ gulp serve        # Launch the application and reload it when a file change. Rebuild the front app too
$ gulp test         # Run the unit tests. Please use it
$ gulp watch-test   # Watch for change and reload the test
$ gulp fixtures     # Reload the fixtures (database schema and its content)
```

After running the test, a code coverage reports is available in reports/


## Developpers

Development of LoLManager

by Gollwu, Zigglick, Nhacsam, Hycariss, Sqatx and Sowerdski
