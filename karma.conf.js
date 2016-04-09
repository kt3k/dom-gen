module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'browserify'],
    files: ['spec.js'],
    preprocessors: {'spec.js': ['browserify']},
    browserify: {debug: true, transform: [
      require('browserify-istanbul')({
        instrumenter: require('isparta'),
        ignore: ['**/spec*.js']
      }),
      'babelify'
    ]},
    reporters: ['progress', 'coverage'],
    coverageReporter: {type: 'lcov'},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
