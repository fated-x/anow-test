// Karma configuration
// Generated on Fri Aug 28 2015 12:28:12 GMT-0600 (MDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'src/components/jquery/dist/jquery.min.js',
      'src/components/bootstrap/dist/js/bootstrap.min.js',
      'src/components/angular/angular.min.js',
      'src/components/angular-mocks/angular-mocks.js',
      'src/components/angular-ui-router/release/angular-ui-router.min.js',
      'src/components/angular/angular-resource.min.js',
      'src/js/controllers.js',
      'src/js/services.js',
      'src/js/app.js',
      'test/**/*Spec.js',
      'src/tpl/**/*.html'

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/tpl/**/*.html': ['ng-html2js'],
      'src/controllers/*.js': ['coverage'],
      'src/directives/*.js': ['coverage']


    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src',
      moduleName: 'anowTemplates'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
