console.log("hi");

// data fatching through a folder songs 
async function getSongs() 
{
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++)
    {
       const element = as[index];
       if (element.href.endsWith(".mp3")){
        songs.push(element.href.split("/songs/")[1]);
       }
    }
    return songs
}

async function main() {
    let songs = await getSongs()
    console.log(songs)

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul") [0]
        for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> 
                            <img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20"," ")}</div>
                                <div>DevOps</div>
                            </div>
                            <div class="playnow">
                                <span>PlayNow</span>
                                <img class="invert" src="play.svg" alt="">
                            </div>
                            
                        </li>`;    
        }

    //play first songs

    var audio = new Audio(songs[0]);
    audio.play();

    audio.addEventListener("loadeddata", () => {
        console.log(audio.duration, audio.currentSrc, audio.currentTime)
        //the duration variable now hold the duration (in seconds)of the audio clip
    });

}

main()
