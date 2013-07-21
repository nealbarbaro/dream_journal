$(document).ready(function(){
  // $(document).keydown(function(e){ console.log(e.which); }) //displays keypress

  var keyDisable = function(){
    $(document).on("keydown.nightMode", function(e){
      switch(e.which){
        case 9:     e.preventDefault(); break;
        case 17:    e.preventDefault(); break;
        case 18:    e.preventDefault(); break;
        case 19:    e.preventDefault(); break;
        case 20:    e.preventDefault(); break;
        case 33:    e.preventDefault(); break;
        case 34:    e.preventDefault(); break;
        case 35:    e.preventDefault(); break;
        case 36:    e.preventDefault(); break;
        case 37:    e.preventDefault(); break;
        case 38:    e.preventDefault(); break;
        case 39:    e.preventDefault(); break;
        case 40:    e.preventDefault(); break;
        case 45:    e.preventDefault(); break;
        case 46:    e.preventDefault(); break;
        case 91:    e.preventDefault(); break;
        case 92:    e.preventDefault(); break;
        case 93:    e.preventDefault(); break;
        case 96:    e.preventDefault(); break;
        case 97:    e.preventDefault(); break;
        case 98:    e.preventDefault(); break;
        case 99:    e.preventDefault(); break;
        case 100:   e.preventDefault(); break;
        case 101:   e.preventDefault(); break;
        case 102:   e.preventDefault(); break;
        case 103:   e.preventDefault(); break;
        case 104:   e.preventDefault();  break;
        case 105:   e.preventDefault();  break;
        case 106:   e.preventDefault();  break;
        case 107:   e.preventDefault();  break;
        case 109:   e.preventDefault();  break;
        case 110:   e.preventDefault();  break;
        case 111:   e.preventDefault();  break;
        case 112:   e.preventDefault();  break;
        case 113:   e.preventDefault();  break;
        case 114:   e.preventDefault();  break;
        case 115:   e.preventDefault();  break;
        case 116:   e.preventDefault();  break;
        case 117:   e.preventDefault();  break;
        case 118:   e.preventDefault();  break;
        case 119:   e.preventDefault();  break;
        case 120:   e.preventDefault();  break;
        case 121:   e.preventDefault();  break;
        case 122:   e.preventDefault();  break;
        case 123:   e.preventDefault();  break;
        case 144:   e.preventDefault();  break;
        case 145:   e.preventDefault();  break;
        case 186:   e.preventDefault();  break;
        case 187:   e.preventDefault();  break;
        case 189:   e.preventDefault();  break;
        case 191:   e.preventDefault();  break;
        case 192:   e.preventDefault();  break;
        case 219:   e.preventDefault();  break;
        case 220:   e.preventDefault();  break;
        case 221:   e.preventDefault();  break;
        case 222:   e.preventDefault();  break;
        case 91:    e.preventDefault();   break;
        case 92:    e.preventDefault();   break;
        case 93:    e.preventDefault();   break;
      }
    });
  }; // keyDisable

  var mouseDisable = function(){
    $(document).on({
      "contextmenu": function(e) {
        e.preventDefault();
      },
      "mousedown": function(e) {
        // e.preventDefault();
      },
      "mouseup": function(e) {
        // e.preventDefault();
      }
    });
  }; // mouseDisable

  var focusCursor = function(){
    $("#post_content").focus();
    $("#post_content")[0].setSelectionRange(9999,9999);
  }; // focusCursor

  var nightMode = function(){
    setInterval(focusCursor, 500);
    focusCursor();
    keyDisable();
    mouseDisable();
  }; // nightMode

  var dayMode = function(){
    $(document).off("keydown.nightMode");
  }; // dayMode

  $('.night-on').on('click',  nightMode);
  $('.night-off').on('click', dayMode);

}); // Document ready