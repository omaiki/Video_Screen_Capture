// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .



// $(function() {


//     $('#video').on('click', function() {
//         console.log('videoClicked');

//     });





// });


// function convertCanvasToImage(canvas) {
//   var image = new Image();
//   image.src = canvas.toDataURL("image/png");
//         image.setAttribute('crossOrigin', 'anonymous');

//   return image;
// }




// // START get youtube video function?

// var youtubeLink;
// var vidID;

// var video = document.getElementById('video');
// var source = document.createElement('source');

// function getUserLink() {
//     var x;
//     x = document.getElementById("form1");
//     youtubeLink = x.elements["userInput"].value;


//     var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
//     var mp4urlHDending = "&hd=1";



//        var isYoutube = youtubeLink && youtubeLink.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);

//        if (isYoutube) {
//            var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
//            id = (id.length > 1) ? id.splice(1) : id;
//            id = id.toString();
//            vidID = id;
//         }


// //    document.write(mp4url + youtubeLink);
// //    var newVid = mp4url+youtubeLink;


// //
//     source.setAttribute('src', mp4url+vidID+mp4urlHDending);
//     video.appendChild(source);
//     video.load();






// } //END getUserLink()



// // END get youtube video function?














var videoId = 'video';
var scaleFactor = 0.25;
var snapshots = [];


function capture(video, scaleFactor) {
  if(scaleFactor == null){
    scaleFactor = 1;
  }
  var w = video.videoWidth * scaleFactor;
  var h = video.videoHeight * scaleFactor;


  var canvas = document.createElement('canvas');
    canvas.width  = w;
      canvas.height = h;
  var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, w, h);




    canvas.id = 'canvas';
//    canvas.setAttribute('class', 'myCanvasClass');

//    canvas.addEventListener('click', function() {
//
//
//
////        document.getElementById('canvas').style.transform = "scale(2,2)";
//    });






    return canvas;
}


function scaleCapture(video) {

    var canvas2 = document.createElement('canvas');

    canvas2.width  = video.videoWidth;
    canvas2.height = video.videoHeight;

    var scaleW = canvas2.width;
    var scaleH = canvas2.height;

  var ctx2 = canvas2.getContext('2d');
    ctx2.drawImage(video, 0, 0, scaleW, scaleH);
    canvas2.id = 'canvas2';

        return canvas2;

}


function dismiss() {
    console.log('dismissCalled');
    $('#light').css('display','none');
    $('#fade').css('display','none');
    $('#canvas2').remove();
}


// append screenshot to screen and display in a list
function shoot() {
  var video  = document.getElementById(videoId);
  var output = document.getElementById('output');
  var canvas = capture(video, scaleFactor);

    //START
    var scaleCanvas = scaleCapture(video);

    //END

//    var myImage = convertCanvasToImage(canvas);

//    snapshots.unshift(myImage);
    snapshots.unshift(canvas);
  output.innerHTML = '';
  for(var i=0; i<4; i++){

    output.appendChild(snapshots[i]);
//        light.appendChild(snapshots[i]);

//        $('.myCanvasClass').on('click', function() {
//            console.log('canvasClicked');
//            $('.myCanvasClass').toggle();
//            $('.myCanvasClass').css({
////                'padding-top':'100px'
////                'position':'fixed',
////                'top':'50%',
////                'left':'50%',
////                'transform':'translate(-50%,-50%)'
//
//            });
//        });



    $('#canvas').on('click', function() {
        console.log('canvasClicked');
        $('#canvas2').addClass('.white_content');
        // make canvas bigger
//      // $('#canvas').css('transform','scale(3,3)');
        light.appendChild(scaleCanvas);
        $('#light').css('display','block');
        $('#fade').css('display','block');
    }); // END CANVAS ONCLICK()


  } // END FOR LOOP()






} // END FUNCTION SHOOT()


