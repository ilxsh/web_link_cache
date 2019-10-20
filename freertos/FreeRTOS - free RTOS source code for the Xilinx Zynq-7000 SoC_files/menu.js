/**
 * Execute a provided function once for each array element.
 *
 * @param {array} array
 *   The array to be used.
 * @param {callback} callback
 *   The function to be executed for each array element.
 * @param {object} [thisArg = this]
 *   The value to be used as 'this'.
 */
function forEach(array, callback, thisArg) {
  thisArg = (typeof thisArg != 'undefined') ? thisArg : this
  for (let i = 0; i < array.length; i++) {
    callback.call(thisArg, array[i], i, array)
  }
}

/**
 * @class CollapsibleMenu
 */
class CollapsibleMenu {

  constructor(menu) {
    this.menu = menu;
    this.expand = this.menu.querySelectorAll('.expand');
    this.unexpand = this.menu.querySelectorAll('.unexpand');
    this.parentNodes = this.menu.querySelectorAll('.parent-node');
    this.parentMenuItemLinks = this.menu.querySelectorAll('.menu-item > a.parent-node');
    this.allMenuItemLinks = this.menu.querySelectorAll('.menu-item > a');

    this.currentMenuItem = null;
    this.currentMenuItemLink = null;
    this.hasPrioritizedLinkBeenFound = false;

    forEach(this.expand, (el) => el.addEventListener('click', (e) => this.handleExpandClick(e)));
    forEach(this.unexpand, (el) => el.addEventListener('click', (e) => this.handleUnexpandClick(e)));
    forEach(this.parentMenuItemLinks, (el) => el.addEventListener('click', (e) => this.handleParentMenuItemLinkClick(e)));

    this.findCurrentMenuItem();
  }

  findCurrentMenuItem() {
    forEach(this.allMenuItemLinks, (menuItemLink) => {
      let menuItem = menuItemLink.closest('.menu-item');
      let prioritize = menuItem.getAttribute('data-prioritize');

      if (this.hasPrioritizedLinkBeenFound) return;

      if (menuItemLink.href == window.location.href) {
        this.currentMenuItem = menuItem;
        this.currentMenuItemLink = menuItemLink;
        if (prioritize) {
          this.hasPrioritizedLinkBeenFound = true;
        }
      }
    });

    if (this.currentMenuItem) {
      let isParentNode = this.currentMenuItemLink.classList.contains('parent-node');
      let submenu = this.currentMenuItem.querySelector('.menu');

      this.currentMenuItemLink.classList.add('active');
      if (isParentNode && submenu) this.expandMenu(submenu);
      this.expandMenuTree(this.currentMenuItem);
    }
  }

  handleParentMenuItemLinkClick(e) {
    let parent = e.currentTarget.closest('.menu-item');
    let submenu = parent.querySelector('.menu');
    this.toggleMenu(submenu);
  }

  /**
   * Handle expand click.
   *
   * @memberof CollapsibleMenu
   *
   * @param {object} e
   */
  handleExpandClick(e) {
    let parent = e.target.closest('.menu-item');
    let submenu = parent.querySelector('.menu');
    this.expandMenu(submenu);
  }

  /**
   * Handle uexpand click.
   *
   * @memberof CollapsibleMenu
   *
   * @param {object} e
   */
  handleUnexpandClick(e) {
    let parent = e.target.closest('.menu-item');
    let submenu = parent.querySelector('.menu');
    this.unexpandMenu(submenu);
  }

  /**
   * Expand a given menu.
   *
   * @memberof CollapsibleMenu
   *
   * @param {object} menu
   */
  expandMenu(menu) {
    let parent = menu.closest('.menu-item');

    if (parent) {
      let expand = parent.querySelector('.expand');
      let unexpand = parent.querySelector('.unexpand');

      expand.style.display = 'none';
      unexpand.style.display = '';
    }

    menu.setAttribute('data-expanded', 'true');
    menu.style.display = 'block';
  }

  /**
   * Unexpand a given menu.
   *
   * @memberof CollapsibleMenu
   *
   * @param {object} menu
   */
  unexpandMenu(menu) {
    let parent = menu.closest('.menu-item');

    if (parent) {
      let expand = parent.querySelector('.expand');
      let unexpand = parent.querySelector('.unexpand');

      expand.style.display = '';
      unexpand.style.display = 'none';
    }

    menu.setAttribute('data-expanded', 'false');
    menu.style.display = 'none';
  }

  toggleMenu(menu) {
    let isExpanded = (menu.getAttribute('data-expanded')) ? menu.getAttribute('data-expanded') : false;

    if (isExpanded == 'true') {
      this.unexpandMenu(menu);
    } else {
      this.expandMenu(menu);
    }
  }

  /**
   * Expand a menu tree to the given menu item.
   *
   * @memberof CollapsibleMenu
   *
   * @param {object} menuItem
   */
  expandMenuTree(menuItem) {
    let menu = menuItem.closest('.menu')
    do {
      if (menu) {
        this.expandMenu(menu)
        menuItem = menu.closest('.menu-item')
        if (menuItem) {
          menuItem.classList.add('active')
        }
        menu = menu.parentNode.closest('.menu')
      }
    } while (menu)
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let menus = document.querySelectorAll('.collapsible-menu')

  forEach(menus, (menu) => {
    new CollapsibleMenu(menu)
  })
})
