$(document).ready(function(){

  var nightTimer;
  var autoLogTimer;
  var post_content = $('#post_content');
  var postButton = $('#post-button');

  var keyArray = [9, 17, 18, 19, 20, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46,
   91, 92, 93, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109,
   110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144,
   145, 186, 187, 189, 191, 192, 219, 220, 221, 222, 91, 92, 93];

  var keyDisable = function(){
    $(document).on("keydown.nightMode", function(e){
      clearTimeout(autoLogTimer);
      autoLogTimer = setTimeout(autoLog, 300000);
      if (_.contains(keyArray, e.which)){
        e.preventDefault();
      }
    });
  }; // keyDisable

  var mouseDisable = function(){
    $(document).on("contextmenu.nightMode", function(e){
      e.preventDefault();
    });
  }; // mouseDisable

  var focusCursor = function(){
    post_content.focus();
    post_content[0].setSelectionRange(9999,9999);
  }; // focusCursor

  var autoLog = function(){
    postButton.click();
  }; // autoLog

  var nightMode = function(){
    nightTimer = setInterval(focusCursor, 500);
    keyDisable();
    mouseDisable();
  }; // nightMode

  var dayMode = function(){
    $(document).off("keydown.nightMode");
    $(document).off("contextmenu.nightMode");
    clearInterval(nightTimer);
    clearInterval(autoLogTimer);
  }; // dayMode

  // ######Event Handlers######
  $('.night-on').on('click',  nightMode);
  $('.night-off').on('click', dayMode);

}); // Document ready