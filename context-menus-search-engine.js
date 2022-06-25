let context_menu_search_engin = () => {

    chrome.contextMenus.onClicked.addListener(
        (info) => {
            console.log(info)
            console.log(info.selectionText)
            if (info.selectionText.length > 0) {
                let url = null;
                if (info.menuItemId.search(/custom-you-dao-pronounce-search-/) !== -1) {
                    url = gotToYouDaoPronounceSearch(info.selectionText)
                }
                if (info.menuItemId.search(/custom-google-pronounce-search-/) !== -1) {
                    url = gotToGooglePronounceSearch(info.selectionText)
                }

                if (info.menuItemId.search(/custom-bing-pronounce-search-/) !== -1) {
                    url = gotToBingPronounceSearch(info.selectionText)
                }

                if (info.menuItemId.search(/custom-baidu-fanyi-search-/) !== -1) {
                    url = goToBaiduFanYiSearch(info.selectionText);
                }


                if (url) {
                    chrome.tabs.create(
                        {
                            // url: gotToGoogleSearch(info.selectionText),
                            url: url,
                        },
                        (tab) => {
                            console.log(tab);
                        }
                    );
                }

            }


        }
    )

    let gotToYouDaoPronounceSearch = (word) => {
        word = word.replace(/\s/, "+");
        word = word.toLowerCase()
        return `https://www.youdao.com/result?word=${word}&lang=en`;
    };


    let gotToGooglePronounceSearch = (word) => {
        word = word.replace(/\s/, "+");
        return `https://www.google.com/search?q=how+to+pronounce+${word}`;
    };

    let gotToBingPronounceSearch = (word) => {
        word = word.replace(/\s/, "+");
        return `https://cn.bing.com/search?q=${word}`;
        //return `https://cn.bing.com/search?q=how%20to%20pronounce%20${word}`;
    };

// navigator.userAgent


   //百度翻译
    let goToBaiduFanYiSearch = (word) => {
        return `https://fanyi.baidu.com/#en/zh/${word}`;
    };
  // navigator.userAgent

}

export {context_menu_search_engin}
