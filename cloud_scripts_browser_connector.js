// ==UserScript==
// @name         Cloud Scripts Browser Connector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://70.120.122.87:3333/cloud_scripts/*
// @grant        GM.xmlHttpRequest
// ==/UserScript==

//will currently run all the files at once
const obj_files_to_run = {
    "https://70.120.122.87:3333/cloud_scripts/run":
        "https://raw.githubusercontent.com/yeltnar/browser_cloud_scripts/master/fedex_tracking",
        //"https://70.120.122.87:3333/cloud_scripts/t.txt"
    ]
};

(function() {
    'use strict';

    console.log("Cloud Scripts Browser Connector");

    const files_to_run = getWindowsFilesToRun(location.href) || [];

    console.log(files_to_run);

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

function getWindowsFilesToRun(){
    return obj_files_to_run[location.href] || false;
}

