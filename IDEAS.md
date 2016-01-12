River
=====

River (working name) is communication / collaboration app similar Slack that is open source that uses open protocols like IRC & Jabber underneath as well as self hosted (users signup at hosted-version.com). This allows an insane degree of interoperability with existing social graphs all in a beautiful user interface.

What's unique with River is that it aims to treat email as an async offline fallback for sending batches of chat messages to an offline contact not just as a "notification" but a native messaging format. Additionally, this means supporting normal email messaging of contacts only available via email.

The key here is to blur the lines between chat and email so that conversations can seamlessly ratchet between the two protocols depending on need and context, while never sacrificing a seamless experience for the River user who gains impeccable archiving, search and rich media integration.

River will be installable as a native desktop & mobile app as well as configurable on a web server accessed over the network!

### The Following Principles Guide Decisions

1. User centric design first and foremost (real world / daily use cases only)
2. Focus heavily on making a dead simple / dynamite out of box  user experience
3. Engineer with legacy protocols first and foremost (for social graph adoption)
4. Grow to use modern protocols like webRTC (Matrix, etc...)
5. Use existing tools, libraries, and open source projects when relevant as often as possible
6. Experiment and test ideas quickly
7. Filter all decisions through above rubric

### OMG, Google Wave Syndrome

If by now you're thinking this idea sounds *kind of neat* but also like GoogleWave, fret not GWS is a common problem among creative developers and it's clearly something communication/collaboration tools like Slack, GoogleDocs, and Medium are moving towards ;)

### Why Slack is Winning

Slack is this "collaborative" chat application that virtually every startup and many communities using it these days for realtime chat and collboration. Slack is the 2014 version of Campfire or Skype. Over the years, every startup or agency I've worked at has resorted to some online collaboration tool that either errs towards being a project management tool or a realtime chat application.

Slack has many noticeable improvements over these other chat tools, many of these are features that people always wised Skype or Campfire had. Among these improvements are:

- Rich Embedded Media (pictures, videos, audio)
- Archivability / Searchable
- Tag based organization / sorting
- Seemless Interoperability with Services (github, basecamp, etc)

## Existing Tools

Some existing tools in this space that could contribute to the architecture of an app like this are as follows:

- Store both email & archived chat in the email format (maildir, mbox, eml) on disk
- Use [notmuch][1] for indexing and search of archive but expose this over REST
- Use [elasticsearch][2] for indexing and search of archive
- Use [Let's Chat][3] as main codebase
- Use [Shout IRC][4] [Slate IRC][4] node library
- Use [Converse.js][5] for Jabber/XMPP integration
- Use OTR for sync encryption & PGP for aysnc & files
- Build the interface as a HTML5 JS heavy app
- Fork the interface for Mailpile and modify where needed (started in this repo)
- Explore [SocketHub][6] as a server component that handles multiple protocols
- Consider scaffolding JS out of Google's [Inbox SDK][7] it's well thought out + robust

## Similar Projects

There are a few open source projects out there (that I am aware of) moving in this space of merging multiple chat protocols and/or combining email + chat clients:

- [Caliopen][8] is a python server component + HTML5 front-end
- [Kosmos][9] is a hybrid app that uses SocketHub and HTML5 front-end

---

  [1]: http://notmuchmail.org
  [2]: http://sdelements.github.io/lets-chat/
  [3]: http://shout-irc.com
  [4]: https://github.com/slate/slate-irc
  [5]: http://conversejs.org
  [6]: https://github.com/sockethub/sockethub
  [8]: https://www.inboxsdk.com
  [8]: https://caliopen.org
  [9]: https://kosmos.org
