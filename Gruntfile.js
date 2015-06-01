'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-ng-annotate');
    //grunt.loadNpmTasks('ngAnnotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.initConfig({
        // Task configuration.

        ngtemplates: {
            htmlmin: {
                collapseBooleanAttributes:      true,
                collapseWhitespace:             true,
                removeAttributeQuotes:          true,
                removeComments:                 false, // Only if you don't use comment directives!
                removeEmptyAttributes:          true,
                removeRedundantAttributes:      true,
                removeScriptTypeAttributes:     true,
                removeStyleLinkTypeAttributes:  true
            },
            'weather': {
                src:      'weather/**.html',
                dest:     'weather/grunt/template.js',
                options: {
                    prefix: '',
                    module: 'weather.Module'
                }
            },
            'fifa': {
                src:      'fifa/views/**.html',
                dest:     'fifa/grunt/template.js',
                options: {
                    prefix: '',
                    module: 'fifa.RankingModule'
                }
            }
        },

        ngAnnotate: {
            weather: {
                files: {
                    'weather/grunt/weatherAnnotateModule.js': ['weather/weatherModule.js', 'weather/weatherService.js', 'weather/weatherController.js', 'weather/grunt/template.js']
                }
            },
            fifa: {
                files: {
                    'fifa/grunt/fifaAnnotateModule.js': ['fifa/FifaRankingModule.js', 'fifa/controllers/listRankingController.js', 'fifa/services/FifaRankingService.js', 'fifa/grunt/template.js']
                }
            }
        },


        uglify: {
            weather: {
                files: {
                    'weather/dist/weatherAnnotateHTMLModule.min.js': ['weather/grunt/weatherAnnotateModule.js']
                }
            },
            fifa: {
                files: {
                    'fifa/dist/fifaAnnotateHTMLModule.min.js': ['fifa/grunt/fifaAnnotateModule.js']
                }
            }
        }

    });


    grunt.registerTask('default', ['ngtemplates', 'ngAnnotate', 'uglify']);


}
