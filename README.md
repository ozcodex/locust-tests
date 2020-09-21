Locust Tests
========================================

This project run locust for load tests over the looker looks.

Setup
----------------------------------------
For running it you need to have locust installed

`pip3 install locust`

Also you need to load the access credentials for looker, for this run the
index.js file with node. You must run `npm i` to have it working.

The credentials must be stored on config.json file.

Also the OS limit for open files must be raised, you can do that whit:

` ulimit -Sn 10240 `

Usage
----------------------------------------

To run this project just run locust on a command line:

`locust`

And open the browser on http://localhost:8089/

You must provide the number of users to emulate, the spawning rate and the
host, the host is in the config.json file, but for now I'm using:

`https://leverincdev.api.looker.com/`

If you want to run it distributed, one node must be the master node, this one
will no run tests, but will provide all the connections with the nodes and
the web interface.

Development
----------------------------------------

The main file is locustfile.py, there lies all the core code of the project.


Deployment
----------------------------------------
To be defined.

