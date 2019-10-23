// ==UserScript==
// @name         Cloud Scripts Browser Connector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://70.120.122.87:3333/cloud_scripts/run
// @match        https://www.fedex.com/apps/fedextracking/
// @match        https://*
// @match        http://*
// @grant        GM.xmlHttpRequest
// ==/UserScript==


(function() {
    'use strict';

    console.log("Cloud Scripts Browser Connector");

    //will currently run all the files at once
    const obj_files_to_run = {
        "https://70.120.122.87:3333/cloud_scripts/run":[
            "https://raw.githubusercontent.com/yeltnar/browser_cloud_scripts/master/fedex_tracking",
            //"https://70.120.122.87:3333/cloud_scripts/t.txt"
        ],
        "https://www.fedex.com/apps/fedextracking/":[
            "https://raw.githubusercontent.com/yeltnar/browser_cloud_scripts/master/fedex_tracking"
        ]
    };

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

    function getWindowsFilesToRun(){
        return obj_files_to_run[location.href] || false;
    }

})();


