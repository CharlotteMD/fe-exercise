
console.log('ready');

$(() => {

  const $menu = $('.menu');
  const $options = $('.options');
  const $cross = $('.cross');
  const $house = $('.house');
  const $beach = $('.beach');
  const $stud = $('.stud');
  const $background = $('.background');
  const $sirai = $('.sirai');
  const $mainhead = $('.mainhead');
  // const $options = $('.options');
  const $tag = $('.tag');


  // INITITAL PAGE
  const start = function() {
    // menu icon visible, cross not
    $menu.css(
      'display', 'inline-block',
    );
    $cross.css(
      'display', 'none',
    );
    // menu (options) are hidden
    $options.css(
      'visibility', 'hidden',
    );
    // background is brown
    startBackground();
    // NO border on Sirai subtitles
    startBorder();
  };

  // WHEN MENU BUTTON IS CLICKED
  const openMenu = function() {
    // menu logo becomes cross
    $menu.css(
      'display', 'none',
    );
    $cross.css(
      'display', 'inline-block',
    );
    // menu (options) appear

    $options.css(
      'visibility', 'visible',
    );

    $options.fadeIn(3000);
    // add border on Sirai subtitles
    startBackground();
    menuBorder();
  };

  // change to white for hover backgrounds
  const white = function() {
    $sirai.css(
      'color', 'white',
    );
    $mainhead.css(
      'fill', 'white',
    );
    $tag.css(
      'color', 'white',
    );
  };


  // border instructions for Sirai SUBTITLES
  // borders on initial page
  const startBorder = function() {
    $beach.css(
      'border', 'none'
    );
  };

  // borders when menu is clicked
  const menuBorder = function() {
    $beach.css({
      'border-left': '1px $grey solid',
      'border-right': '1px $grey solid',
      'border-top': 'none',
      'border-bottom': 'none',
      'padding': '0px 100px'
    });
  };

  // borders when resorts are hovered over
  // const beachBorder = function() {
  //   $beach.css({
  //
  //   })
  // };
  //
  // const studBorder = function() {
  //   $stud.css({
  //
  //   })
  // };
  //
  // const houseBorder = function() {
  //   $house.css({
  //
  //   })
  // };



  // background instructions
  // initial background
  const startBackground = function() {
    $background.css(
      'background-color', '$brown',
      'background-image', 'none',
    );
  };


  // click on menu
  $menu.click(function() {
    openMenu();
    // menuBackground();
  });

  $cross.click(function() {
    start();
  });

  // hover on Sirai tabs
  $house.hover(function() {
    start();
    // background image changes
    $background.css({
      'background-image': 'url("assets/img/placeholder-01.jpg")',
      'background-repeat': 'none',
      'background-size': 'cover'
    });

    white();

    // sirai lines change
    // houseBorder();

  });

  $beach.hover(function() {
    start();
    // background image changes
    $background.css(
      'background-image', 'url("assets/img/placeholder-02.jpg")',
      'background-repeat', 'none',
      'background-size', 'cover',
    );

    white();

    // sirai lines change
    // beachBorder();

  });

  $stud.hover(function() {
    start();
    // background image changes
    $background.css({
      'background-video': 'src("assets/video/placeholder-vid.mp4")'
      // 'background-repeat': 'none',
      // 'background-size': 'cover',
      // 'position': 'fixed',
      // 'right': '0',
      // 'bottom': '0',
      // 'min-width': '100%',
      // 'min-height': '100%'
    });

    white();

    // sirai lines change
    // studBorder();

  });
});
