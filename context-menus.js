import { context_menu_search_engin } from './context-menus-search-engine.js'

let context_menu_init=()=>{


    chrome.contextMenus.create(
        {
            checked: true,
            contexts: ['selection'],
            documentUrlPatterns: ["https://*/*", "http://*/*"],
            enabled: true,
            title: "youdao搜索单词发音",
            id: 'custom-you-dao-pronounce-search-1',
        },
        (info) => {
            console.log(info)
        }
    );
    chrome.contextMenus.create(
        {
            checked: true,
            contexts: ['selection'],
            documentUrlPatterns: ["https://*/*", "http://*/*"],
            enabled: true,
            title: "google搜索搜索单词",
            id: 'custom-google-pronounce-search-1',
        },
        (info) => {
            console.log(info)
        }
    );
    chrome.contextMenus.create(
        {
            checked: true,
            contexts: ["selection"],
            documentUrlPatterns: ["https://*/*", "http://*/*"],
            enabled: true,
            title: "百度翻译",
            id: 'custom-baidu-fanyi-search-1',
        },
        (info) => {
            console.log(info);
        }
    );

    chrome.contextMenus.create(
        {
            checked: true,
            contexts: ['selection'],
            documentUrlPatterns: ["https://*/*", "http://*/*"],
            enabled: true,
            title: "bing搜索搜索单词",
            id: 'custom-bing-pronounce-search-1',
        },
        (info) => {
            console.log(info)
        }
    );

}


export {
    context_menu_init,
    context_menu_search_engin
}
