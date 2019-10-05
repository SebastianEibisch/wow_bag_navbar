var NavBag = (function() {
    var isOpen = false
    var bagframe
    var itemWrapper
    var items = [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
    ]

    function createBagFrame () {
        bagframe = document.createElement("div")
        bagframe.setAttribute("id", "bagframe")

        itemWrapper = document.createElement("div")
        itemWrapper.setAttribute("id", "icons-wrapper")
        bagframe.appendChild(itemWrapper)

        fillItems();

        document.body.appendChild(bagframe)
    }

    function fillItems() {
        var x = 0;
        var y;
        for(x; x < 4; x++) {
            for(y=0; y < 4; y++) {
                if(items[x][y] instanceof NavBagLink)
                    createUserItem(items[x][y])
                else
                    createEmtpyItem()
            }
        }
    }

    function createEmtpyItem() {
        var emptyItem = document.createElement("div")
        emptyItem.setAttribute("class", "icon")
        itemWrapper.appendChild(emptyItem)
    }

    function createUserItem(item) {
        var userItem = document.createElement("div")
        userItem.setAttribute("class", "icon")
        userItem.style.backgroundImage = 'url("' + item.image + '")'

        var link = document.createElement("a")
        link.setAttribute("href", item.destination)
        userItem.appendChild(link)
        itemWrapper.appendChild(userItem)
    }

    function removeBagFrame() {
        var bagframe = document.getElementById("bagframe")
        document.body.removeChild(bagframe)
    }
  
    /*
        PUBLIC
    */
    return { 
        toggle: function() {
            if(isOpen === true) {
                removeBagFrame();                
                isOpen = false
            } else {
                createBagFrame();
                isOpen = true
            }
        },
        addItem: function(destination, image, x, y) {
            items[x][y] = new NavBagLink(destination, image)
        }
    };
  })();

  class NavBagLink {
      constructor(destination, image) {
          this.destination = destination;
          this.image = image;
      }
  }


