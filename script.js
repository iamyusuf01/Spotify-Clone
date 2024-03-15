console.log("hi");

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
        songs.push(element.href)
       }
    }
    return songs
}

async function main() {
    let songs = await getSongs()
    console.log(songs)

    //play first songs

    var audio = new Audio(songs[0]);
    audio.play(); 

    audio.addEventListener("loadeddata", () => {
        console.log(audio.duration, audio.currentSrc, audio.currentTime)
        //the duration variable now hold the duration (in seconds)of the audio clip
    });


}

main()
