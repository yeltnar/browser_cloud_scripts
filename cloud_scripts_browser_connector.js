// ==UserScript==
// @name         Cloud Scripts Browser Connector
// @namespace    http://tampermonkey.net/
// @version      0.3.3
// @description  try to take over the world!
// @author       You
// @match        https://70.120.122.87:3333/cloud_scripts/run
// @match        https://www.fedex.com/apps/fedextracking/
// @match        https://*
// @match        http://*
// @match        http://*/*
// @match        https://*/*
// @match        chrome-extension://*/*
// @grant        GM.xmlHttpRequest
// ==/UserScript==


(async function() {
    'use strict';

    console.log("Cloud Scripts Browser Connector");

    let files_to_run = [];

    const source_list = [
        "https://raw.githubusercontent.com/yeltnar/browser_cloud_scripts/master/url_file_map.json",
        "https://droodle_b.keybase.pub/bad_idea/files_to_run.json"
    ];

    await Promise.all(source_list.map(( cur, i, arr )=>{

        return new Promise(async(resolve, reject)=>{

            const resp = await fetch(cur).then((r)=>{
                return r.json();
            });

            resp.forEach((cur)=>{

                const regex = new RegExp(cur.regex);

                if( regex.test(window.location.href) ){
                    files_to_run = files_to_run.concat(cur.scripts);
                }
            });

            files_to_run.concat(resp);
            resolve()
        });

    }));

    console.log({files_to_run});
    processFileLinks(files_to_run);

    function getWindowsFilesToRun(){
        return obj_files_to_run[location.href] || false;
    }

    function processFileLinks(files_to_run){

        console.log({files_to_run});

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

    }

})();



