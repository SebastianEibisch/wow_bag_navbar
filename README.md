# wow_bag_navbar
![](https://raw.githubusercontent.com/heideltraut/wow_bag_navbar/master/wow_bag_nav/images/screen.png)

A simple World of Warcraft-styled navigationbar for your website!

# Usage
## 1) Include source-files
```html
<head>
  <script src='wow_bag_nav/bag.js'></script>
  <link rel="stylesheet" type="text/css" href="wow_bag_nav/bag.css">
</head>
```
## 2) Place your links
You can place links with javascript. Simply call the _addItem_-method with the following parameters:

`addItem( [url], [image], x-position, y-position )`

Example:
```javascript
NavBag.addItem("#", "wow_bag_nav/images/icon_mail.png", 0, 0)
NavBag.addItem("#", "wow_bag_nav/images/icon_choc.png", 0, 1)
NavBag.addItem("#", "wow_bag_nav/images/icon_quest.png", 1, 2)
NavBag.addItem("#", "wow_bag_nav/images/icon_cogwheel.png", 3, 3)
```

## 3) Open your bag!
The navigationbar can be toggled with the _toggle()_-method.

Example:
```javascript
NavBag.toggle();
```

See the provided example for more detail.
