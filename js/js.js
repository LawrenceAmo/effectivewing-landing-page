// all info about the video
var vid = document.getElementById("");
vid.currentTime; // get the current time of the vid, even if its playing
vid.duration; // get the total time of the vid, the overall time.
vid.playbackRate; // set the playrate. slow/fast. default is 1, ( < 1 slow -  > 1 fast ).
localStorage.setItem("name", "amo amo mao"); // set the local storage
console.log( localStorage.getItem("name")); // get data from local storage 

/*  ////////     async and await
let url = fetch("www.effectivewing.com/api/users"); // API endpoint
let asyncFunction = async () => {
    let response = await url;
    let ans = await response.json();
    console.log(ans);
}

asyncFunction();

*/

//////////////////////        ./ END Video      ///////////////
