// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://70.120.122.87:3333/t.txt
// @grant        GM.xmlHttpRequest
// ==/UserScript==

const files_to_run = ["https://70.120.122.87:3333/t.txt"];

(function() {
    'use strict';

    const body = document.querySelector("body")
    eval(body.innerText);

    return

    files_to_run.forEach(async(file_url)=>{
        const file_content = await (fetch(file_url).then((r)=>{
            return r//.json()
        }));
        console.log(file_content);
    });

    // Your code here...
})();
