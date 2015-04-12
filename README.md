River
=====

This is a slight variation of the "Default" theme that ships with the [Mailpile](https://mailpile.is) email client re-done in more of a single page-ish HTML5 app.

The goal here is create the **interface** for the email / messaging client of ~~my~~ *your* dreams. Thus, I would love to see (and will actively encourage) a community around this effort. I hope this community is as inspired as I am to build an experimental and interesting email / messaging client. I started this project due to the fact that Mailpile's ["back-end has been playing catch up to the user interface for a while"](https://www.mailpile.is/blog/2015-03-06_Beta_Rejected.html), and I want to keep experimenting / developing things in the secure email space while Bjarni works on stabilizing the backend of Mailpile.

My immediate number one goal is make all the data plumbing (with the Mailpile API) work purely in the front-end and lay the groundwork to do UI experiments. Potential directions this repo might evolve towards are:

 - Package this in a native mobile wrapper for Android or iOS
 - A starter theme for your own Mailpile theme
 - Interop with other (non-Mailpile) email backends
 - Integration with chat protocols like IRC & Jabber

This is currently *just* an experiment and in no way a commitment / promise of things to come!

*WARNING: This repo is suuuuuuper rough and nowhere near anything anyone should even bother looking at. Seriously, don't waste your time reading any further. These notes are mostly for me as I experiment :P*


### Requirements

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

Mailpile currently will not serve the REST API to JS calls due to cross-origin request

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
- [ ] Fix build & watch to use Grunt or Gulp
- [ ] Fix the Browserify loading of template files
- [ ] Finish porting over and implementing basic Sidebar & Search view
- [ ] Implement plugins and interactivity on Search view (tooltips, keybindings, drag & drop)
- [ ] Create Tag views
- [ ] Create Contact views