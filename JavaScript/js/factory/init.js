define(function (require) {
    'use strict';

    return {
        init: function () {
            var myVideo, myImage,
                mediaFactory = require('factory/mediaFactory');

            myVideo = mediaFactory.createMedia('Video', {
                length: 3.5,
                name: 'My video'
            });

            myImage = mediaFactory.createMedia('Image', {
                height: 4,
                width: 2,
                name: 'My Image'
            });

            console.log(myVideo);
            console.log(myImage);
        }

    };
});