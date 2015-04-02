module.exports = function(grunt) {

  grunt.registerTask('build', [ 'build' ]);
  grunt.registerTask('watch', [ 'watch' ]);

  grunt.initConfig({
    concat: {
      app: {
        options: {
          separator: ';'
        },
        src: [
          'app/global/init.js',
          'app/global/api.js',
          'app/global/eventlog.js',
          'app/global/activities.js',
          'app/global/global.js',
          'app/global/helpers.js',
          'app/global/keybindings.js',
          'app/global/notifications.js',
          'app/ui/init.js',
          'app/ui/content.js',
          'app/ui/events.js',
          'app/ui/global.js',
          'app/ui/topbar.js',
          'app/ui/modals.js',
          'app/ui/sidebar.js',
          'app/ui/tooltips.js',
          'app/auth/init.js',
          'app/auth/login.js',
          'app/crypto/init.js',
          'app/crypto/events.js',
          'app/crypto/find.js',
          'app/crypto/import.js',
          'app/crypto/modals.js',
          'app/crypto/tooltips.js',
          'app/crypto/ui.js',
          'app/compose/init.js',
          'app/compose/crypto.js',
          'app/compose/autosave.js',
          'app/compose/attachments.js',
          'app/compose/recipients.js',
          'app/compose/modals.js',
          'app/compose/tooltips.js',
          'app/compose/events.js',
          'app/compose/complete.js',
          'app/compose/body.js',
          'app/contacts/init.js',
          'app/contacts/display_modes.js',
          'app/contacts/events.js',
          'app/contacts/modals.js',
          'app/search/init.js',
          'app/search/bulk_actions.js',
          'app/search/events.js',
          'app/search/display_modes.js',
          'app/search/selection_actions.js',
          'app/search/tooltips.js',
          'app/search/ui.js',
          'app/settings/content.js',
          'app/tags/init.js',
          'app/tags/modals.js',
          'app/tags/events.js',
          'app/tags/tooltips.js',
          'app/message/init.js',
          'app/message/events.js',
          'app/message/message.js',
          'app/message/tooltips.js',
          'app/message/ui.js'
        ],
        dest: 'app/index.js'
      },
      lib: {
        options: {
          separator: ';'
        },
        src: [
          'lib/libraries.js',
          'lib/helpers.js',
          'bower_components/underscore/underscore.js',
          'bower_components/backbone/backbone.js',
          'bower_components/backbone-validation/dist/backbone-validation.js',
          'bower_components/jquery.ui/ui/jquery.ui.core.js',
          'bower_components/jquery.ui/ui/jquery.ui.widget.js',
          'bower_components/jquery.ui/ui/jquery.ui.mouse.js',
          'bower_components/jquery.ui/ui/jquery.ui.draggable.js',
          'bower_components/jquery.ui/ui/jquery.ui.droppable.js',
          'bower_components/jquery.ui/ui/jquery.ui.sortable.js',
          'bower_components/jquery-autosize/jquery.autosize.js',
          'bower_components/jquery-timer/jquery.timer.js',
          'bower_components/qtip2/jquery.qtip.js',
          'bower_components/jquery-slugify/dist/slugify.js',
          'bower_components/typeahead.js/dist/typeahead.jquery.js',
          'bower_components/bootstrap/js/dropdown.js',
          'bower_components/bootstrap/js/modal.js',
          'bower_components/mousetrap/mousetrap.js',
          'lib/mousetrap.global.bind.js',
          'bower_components/listjs/dist/list.js',
          'bower_components/purl/purl.js',
          'bower_components/favico.js/favico.js',
          'bower_components/select2/select2.js'
        ],
        dest: 'lib/libraries.min.js'
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      app: {
        files: {
          'app/index.js': ['app/index.js']
        }
      },
      lib: {
        files: {
          'lib/libraries.min.js': ['lib/libraries.min.js']
        }
      }
    },
    less: {
      options: {
        cleancss: true
      },
      style: {
        files: {
          "css/default.css": "less/default.less"
        }
      }
    },
    build: {
      app: {
        files: ['app/*/*.js'],
        tasks: ['concat:app', 'uglify:app'],
        options: {
          livereload: true,
        }
      },
      lib: {
        files: ['lib/*.js'],
        tasks: ['concat:lib', 'uglify:lib'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: [
          'less/config.less',
          'less/default.less',
          'less/app/*.less',
          'less/libraries/*.less'
        ],
        tasks: ['less:style'],
        options: {
          livereload: true,
        }
      }
    },
    watch: {
      app: {
        files: ['app/*/*.js'],
        tasks: ['concat:app'],
        options: {
          livereload: true,
        }
      },
      lib: {
        files: ['lib/*.js'],
        tasks: ['concat:lib'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: [
          'less/config.less',
          'less/default.less',
          'less/app/*.less',
          'less/libraries/*.less'
        ],
        tasks: ['less:style'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

};