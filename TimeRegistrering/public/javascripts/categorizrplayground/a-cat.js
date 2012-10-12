aMain = function() {
  console.log("aMain executed, current device type: " +  categorizr());

  jQuery(window).bind('deviceChange', function(device) {
    console.log(device.toString() + " ++ Log from aMain");
  });

  //categorizr('desktop', 'mobile');

  console.log(categorizr());

  var erMobil = function() {
    console.log("ouehufehu");
    if(categorizr() == 'mobile'){
      return true;
    }else {
      return false;
    }
  };

  yepnope({
      test: erMobil() ,
      yep: '/assets/stylesheets/responsive_mobile.css',
      nope: '/assets/stylesheets/responsive_desktop.css'
  });

};
