'use strict';

/* This should be given more thought
 * To be nice swappable schema for differing
 * API structures and platforms. Perhaps it should
 * be more decided upon "build" which schema to use
 * this would lend to better Browserify modularity
 */
module.exports = {
  mailpile: {
    structure: 'querystring',
    prefix: '',
    suffix: '/',
    pagination_start: 1,
    pagination_end: 20,
    order: 'rev-date',
    url_search: 'search/?q=in:inbox',
    url_tags: 'tags/'
  },
  testing: {
    structure: 'slashes',
    prefix: '',
    suffix: '.json',
    pagination_start: 1,
    pagination_end: 20,
    order: '',
    url_search: 'inbox-search.json',
    url_tags: 'tags.json'
  }
};
