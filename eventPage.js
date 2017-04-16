var menuItem = {
  "id": "calorieIt",
  "title": "CalorieIt",
  "contexts": ["selection"]

};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str)//.replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "calorieIt" && clickData.selectionText){
        var wikiUrl = "https://www.google.com/#q=" + fixedEncodeURI(clickData.selectionText)+"%20calories";
        var createData = {
            "url": wikiUrl,
            "type": "normal",
            "top": 5,
            "left": 5,
            "height": 600,
            "width":600
        };
        chrome.windows.create(createData, function(){});
    }
});
