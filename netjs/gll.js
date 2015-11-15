var openPhotoSwipe = function(index,item) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = item;
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,
        index:index,
        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};