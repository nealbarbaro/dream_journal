$(document).ready(function(){

  $(document).keydown(function(e){
    console.log(e.which);
  })



  $('.night-button').on('click', function(){
    console.log("night-button pressed");

    $(document).on({
    "contextmenu": function(e) {
        console.log("ctx menu button:", e.which);

        // Stop the context menu
        e.preventDefault();
    },
    "mousedown": function(e) {
        console.log("normal mouse down:", e.which);
    },
    "mouseup": function(e) {
        console.log("normal mouse up:", e.which);
    }
});

    $(document).keydown(function(e){
      switch(e.which){
        case 9:     e.preventDefault(); console.log("tab"); break;
        case 17:    e.preventDefault(); console.log("ctrl"); break;
        case 18:    e.preventDefault(); console.log("alt"); break;
        case 19:    e.preventDefault(); console.log("pause/break"); break;
        case 20:    e.preventDefault(); console.log("caps lock"); break;
        case 33:    e.preventDefault(); console.log("page up"); break;
        case 34:    e.preventDefault(); console.log("page down"); break;
        case 35:    e.preventDefault(); console.log("end"); break;
        case 36:    e.preventDefault(); console.log("home"); break;
        case 37:    e.preventDefault(); console.log("left arrow"); break;
        case 38:    e.preventDefault(); console.log("up arrow"); break;
        case 39:    e.preventDefault(); console.log("right arrow"); break;
        case 40:    e.preventDefault(); console.log("down arrow"); break;
        case 45:    e.preventDefault(); console.log("insert"); break;
        case 46:    e.preventDefault(); console.log("delete"); break;
        case 91:    e.preventDefault(); console.log("left window"); break;
        case 92:    e.preventDefault(); console.log("right window"); break;
        case 93:    e.preventDefault(); console.log("select"); break;
        case 96:    e.preventDefault(); console.log("num pad 0"); break;
        case 97:    e.preventDefault(); console.log("num pad 1"); break;
        case 98:    e.preventDefault(); console.log("num pad 2"); break;
        case 99:    e.preventDefault(); console.log("num pad 3"); break;
        case 100:   e.preventDefault(); console.log("num pad 4"); break;
        case 101:   e.preventDefault(); console.log("num pad 5"); break;
        case 102:   e.preventDefault(); console.log("num pad 6"); break;
        case 103:   e.preventDefault(); console.log("num pad 7"); break;
        case 104:  e.preventDefault(); console.log("num pad 8"); break;
        case 105:  e.preventDefault(); console.log("numpad 9"); break;
        case 106:  e.preventDefault(); console.log("multiply"); break;
        case 107:  e.preventDefault(); console.log("add"); break;
        case 109:  e.preventDefault(); console.log("subtract"); break;
        case 110:  e.preventDefault(); console.log("dec point"); break;
        case 111:  e.preventDefault(); console.log("divide"); break;
        case 112:  e.preventDefault(); console.log("f1"); break;
        case 113:  e.preventDefault(); console.log("f2"); break;
        case 114:  e.preventDefault(); console.log("f3"); break;
        case 115:  e.preventDefault(); console.log("f4"); break;
        case 116:  e.preventDefault(); console.log("f5"); break;
        case 117:  e.preventDefault(); console.log("f6"); break;
        case 118:  e.preventDefault(); console.log("f7"); break;
        case 119:  e.preventDefault(); console.log("f8"); break;
        case 120:  e.preventDefault(); console.log("f9"); break;
        case 121:  e.preventDefault(); console.log("f10"); break;
        case 122:  e.preventDefault(); console.log("f11"); break;
        case 123:  e.preventDefault(); console.log("f12"); break;
        case 144:  e.preventDefault(); console.log("num lock"); break;
        case 145:  e.preventDefault(); console.log("scroll lock"); break;
        case 186:  e.preventDefault(); console.log("semi-colon"); break;
        case 187:  e.preventDefault(); console.log("equal sign"); break;
        case 189:  e.preventDefault(); console.log("dash"); break;
        case 191:  e.preventDefault(); console.log("forward slash"); break;
        case 192:  e.preventDefault(); console.log("grave accent"); break;
        case 219:  e.preventDefault(); console.log("open bracket"); break;
        case 220:  e.preventDefault(); console.log("back slash"); break;
        case 221:  e.preventDefault(); console.log("close bracket"); break;
        case 222:  e.preventDefault(); console.log("single quote"); break;

        case 91:  e.preventDefault(); console.log("win 91"); break;
        case 92:  e.preventDefault(); console.log("win 92"); break;
        case 93:  e.preventDefault(); console.log("win 93"); break;



      }
    });



  });
});