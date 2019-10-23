// ==UserScript==
// @name         Cloud Scripts Browser Connector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://70.120.122.87:3333/cloud_scripts/*
// @grant        GM.xmlHttpRequest
// ==/UserScript==

const files_to_run = ["https://70.120.122.87:3333/cloud_scripts/t.txt"];

(function() {
    'use strict';

    console.log("Cloud Scripts Browser Connector");

    files_to_run.forEach(async(file_url)=>{
        console.log("file_url");
        console.log(file_url);
        const file_content = await (fetch(file_url).then(async(response)=>{
            console.log(response);
            const text = await response.text();
            console.log(text);
            return text;
        }));
        console.log(file_content);
        eval(file_content);
    });

    // Your code here...
})();
