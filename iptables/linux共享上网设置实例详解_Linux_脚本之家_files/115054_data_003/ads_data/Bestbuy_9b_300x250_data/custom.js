
/**
 * @fileoverview Custom functionality to apply throughout every adsize. This
 * has a dependency on common.js and utils.js
 */
var custom = (function() {

  /**
   * Classes which our JS hooks into. Add more class names as necessary.
   * @enum
   * @private
   */
  var elementClass_ = {
    item: 'js-item',
    itemName: 'js-item-name',
    itemPriceS: 'js-item-prices',
    itemPrice: 'js-item-price',
    itemSalePrice: 'js-item-saleprice',
    itemRegularPrice: 'js-item-regularprice'
  };


  /**
   * Element IDs
   * @enum {string}
   * @private
   */
  var elementId_ = {
    arrowPrevious: 'arrow-previous',
    arrowNext: 'arrow-next',
    gpaDataProvider: 'gpa-data-provider'
  }



  /**
   * Initialization. Called from handleAdInitialized on each page.
   */
  function init() {
    utils.log('custom.init()');
    var data = common.getAdData();
    if (!data) return;

    // If you're using the swipe gallery to display feed items.
    initItemsUsingGallery_();

    // If you're NOT using the swipe gallery to display feed items.
    //initItemsWithoutGallery_();


  }

  /**
   * Find all items used in the swipe gallery and initialize custom behavior.
   * @private
   */
  function initItemsUsingGallery_() {
    var gallery = common.getGallery();

    // Apply settings to each item in the gallery
    var items = gallery.querySelectorAll('.' + elementClass_.item);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      initItemDisplay_(item);
    }
  }

  /**
   * Find all items used outside the gallery and initialize custom behavior.
   * @private
   */
  function initItemsWithoutGallery_() {
    // Apply settings to each item
    var items = document.querySelectorAll('.' + elementClass_.item);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      initItemDisplay_(item);
    }
  }

  /**
   * Set the display settings for each item.
   * Add any custom functionality you need applied on load.
   * @param {Element} item Item element.
   * @private
   */
  function initItemDisplay_(item) {

    // if you're using sales prices.
     setSalePricesDisplay_(item);

    // Set mouseout.
    itemMouseOut(item);
  }

  /**
   * Sets the 3 price elements to display correctly when using sales price.
   * Find your price elements and set into common functionality.
   * @param {Element} item Item element.
   * @private
   */
  function setSalePricesDisplay_(item) {
    // Get reference to each price element.
    var itemPrice = item.querySelector('.' + elementClass_.itemPrice);
    var itemSalePrice = item.querySelector('.' + elementClass_.itemSalePrice);
    var itemRegularPrice = item.querySelector('.' + elementClass_.itemRegularPrice);

    // Sets each item to display correct prices.
    common.displayCorrectPrices(itemPrice, itemSalePrice, itemRegularPrice);
  }

  /**
   * Custom Item Mouse Interactions. Add your own behavior.
   */

  /**
    * Custom Mouseover interaction functionality.
    * @param {Element} item
    */
   function itemMouseOver(item) {

   }



  /**
   * Custom Mouseout interaction functionality.
   * @param {Element} item
   */
  function itemMouseOut(item) {

  }





  /**
   * Set each frame to active on swipegallery autoplay.
   * @param {Event} event Event fired once each frame autoplays.
   */
  function frameAutoplayed(event) {
    var gallery = event.target;
    var index = parseInt(event.detail.id) - 1;

    // Update the current item index.
    common.setCurrentItemIndex(index);

    // Apply mouseover / mouseout to relevant items.
    var items = gallery.querySelectorAll('.' + elementClass_.item);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (common.isCurrentItemIndex(i)) {
        // itemMouseOver(item);
      } else {
        itemMouseOut(item);
      }
    }
  }

  /**
   * On finalisation of swipegallery autoplay.
   * @param {Event} event Event fired once autoplay finished.
   */
  function autoplayEnded(event) {
    var gallery = event.target;
    // Set the current item index back to 0.
    common.setCurrentItemIndex(0);
  }







/**
   * Custom updates per frame shown event.
   * @param {Event event
   */
  function galleryFrameShown(event) {
    var index = common.getCurrentItemIndex();
    updateArrowDisplay (index);
  }

  /**
   * Custom Mouseover interaction functionality.
   * @param {index} current index (zero based)
   */
  function updateArrowDisplay (index) {
    common.setCurrentItemIndex(index);
    var gallery = common.getGallery();
    var numFramesPerPage = common.galleryNumFramesPerPage(gallery);
    var itemsLength = gallery.querySelectorAll('.' + elementClass_.item).length;
    var numTotalPages = Math.ceil(itemsLength / numFramesPerPage);
    lastFrame = itemsLength;
    var lastFrameCondition;
    if (numFramesPerPage > 1) {
      lastFrameCondition = lastFrame;
    } else {
      lastFrameCondition = lastFrame - 1;
    }

    if (index <= 0) {
      leftEnd = true;
      rightEnd = false;
    } else if ( (index * numFramesPerPage) >= lastFrameCondition ) {
      rightEnd = true;
      leftEnd = false;
    } else {
      rightEnd = false;
      leftEnd = false;
    }
  }


  return {
    init: init,
    itemMouseOver: itemMouseOver,
    itemMouseOut: itemMouseOut,
    frameAutoplayed: frameAutoplayed,
    autoplayEnded: autoplayEnded,
    galleryFrameShown: galleryFrameShown
  };

})();
