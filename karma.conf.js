module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    browsers: ['PhantomJS'],

    frameworks: ['jasmine','browserify'],

    files: [
      './bower_components/jquery/dist/jquery.min.js',
      './node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      './app/js/app.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './app_spec/**/*.js'
    ],

   preprocessors: {
      './app/**/*.js': ['browserify'],
      './app_spec/**/*.spec.js': ['browserify']
    },

    browserify: {
        debug: true,
        transform: [
            ['babelify', { 'presets': ['es2015'] }],
            'browserify-ngannotate'
          ]
    },

    reporters: ['spec'],

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR

  });
};
