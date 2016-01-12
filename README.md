River
=====

This is a fork of the *Default* theme that ships with the [Mailpile](https://mailpile.is) email client re-done as a single page app. The interface & interactions of Mailpile's theme were originaly designed by me [Brennan Novak](https://brennannovak.com) and engineered by the whole team. I started this repo because Mailpile's ["back-end has been playing catch up to the user interface for a while"](https://www.mailpile.is/blog/2015-03-06_Beta_Rejected.html) and I wanted to keep experimenting / developing things in the secure email space while [@BjarniRunar](https://github.com/bjarnirunar) works on stabilizing the backend.

The goal here is create an **interface** for the email / messaging client of ~~my~~ *your* dreams. Thus, I would love to see (and will actively encourage) community around this effort. I hope to find others as inspired as I am to build experimental and interesting email / messaging tools. Come join me :D

### Ideas

My current goal is to make all the data plumbing of this theme work explicitely with the Mailpile API but be architected as a lightweight single page app. Potential directions this repo might evolve once that's achieved are:

- A standalone theme that is installable in Mailpile core
- A Chrome or Firefox OS app
- Packaged in a native mobile wrapper for Android or iOS
- A starter theme for your own Mailpile theme
- Small JS modules that can be re-used in Mailpile core

Another idea is to engineer the code as per a non client specific "spec" like this [Offline First Dreamcode](https://gist.github.com/gr2m/5463552) made by [@gr2m](https://github.com/gr2m). If that was done and  other interesting ideas could become possible:

- Interop with other (non-Mailpile) email backends
- Integration with chat protocols like IRC & Jabber
- Provide a web based interface for [Pond](https://pond.imperialviolet.org) or other secure messaging backends
- You can also read these [notes and ideas](IDEAS.md) that expand on those points

This is currently *just* an experiment and in no way a commitment / promise of things to come!

*WARNING: This repo is suuuuuuper rough and nowhere near anything anyone should even bother looking at. Seriously, don't waste your time reading any further. These notes are mostly for me as I experiment :P*


### Install Requirements

The requirements your system will need in order to build & run River are

- [Node.js & NPM](https://nodejs.org)
- [Bower](http://bower.io)
- [Browserify](http://browserify.org)


## Installing The App

Clone the River repository and change into the directory.

```
git clone https://github.com/bnvk/River
cd River
```

Then install the server side & front-end dependencies.

```
npm install && bower install
```


Compile the JS portion of the app using Browserify by typing the following


```
browserify app/main.js -o app/bundle.js
```

You should be able to run the app now by typing

```
node server.js
```

## Configuring Mailpile

Mailpile currently will not serve the REST API via a JS request coming from a different domain / port due to [cross-origin request](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) so as a temporary hack I've added the following snippet to `mailpile/httpd.py` file

```
self.send_header('Access-Control-Allow-Credentials', 'true');
self.send_header('Access-Control-Allow-Origin', 'http://localhost:8888')
self.send_header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
self.send_header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
```

*Depending on how River is further developed / built this will need to be given some thought*

## Contributing

Please read through the [contributing guidelines](CONTRIBUTING.md). Included are
directions for ideas, opening issues, coding standards, and notes on design and development.

Editor preferences are available in the [editor config](.editorconfig) for easy
use in common text editors. Read more and download plugins at
<http://editorconfig.org>.


## Developing

If you'll be developing the JS of the app, you will want to run **Watchify** instead of Browserify as it automatically rebuilds if any of the source files change. You might need to [install Watchify](https://www.npmjs.com/package/watchify)


```
watchify app/main.js -o app/bundle.js
```

## TODO

- [ ] Implement build system for the LESS / CSS of the app (currently missing)
- [ ] Maybe migrate to using Bootstrap instead of my homebrewed CSS framework
- [ ] Fix build & watch to use Grunt or Gulp
- [ ] Fix the Browserify loading of template files
- [ ] Implement JS unit testing coverage
- [ ] Finish porting over and implementing basic Sidebar & Search view
- [ ] Implement plugins and interactivity on Search view (tooltips, keybindings, drag & drop)
- [ ] Implement Tag views
- [ ] Implement Contact views
