let device = new Castjs();
let source = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4";

const cast_me = document.getElementById("castMe");

const fifteen_more = document.getElementById(`15sMore`);
const fifteen_less = document.getElementById("15sLess");

const volume_up = document.getElementById("volumeUp");
const volume_down = document.getElementById("volumeDown");

const url_to_cast = document.getElementById("urlToCast");

//Cast vid
cast_me.addEventListener("click", () => {
   if(device.available && url_to_cast.value){
           device.cast(url_to_cast.value);
   }
});


//Add and remove time
fifteen_more.addEventListener("click", () => {
   if(device.session){
           let new_time = device.time + 15;
           device.seek(new_time);
   }
});

fifteen_less.addEventListener("click", () => {
        if(device.session){
                let new_time = device.time - 15;
                if(new_time >= 0){
                        device.seek(new_time);
                }
                else{
                        device.seek(0);
                }
        }
});

//Volume up and down
volume_up.addEventListener("click", () => {
   if(device.session){
           let new_volume = device.volumeLevel + 0.1;
           device.volume(new_volume);

   }
});

volume_down.addEventListener("click", () => {
   if(device.session){
           let new_volume = device.volumeLevel - 0.1;
           device.volume(new_volume);
   }
});

