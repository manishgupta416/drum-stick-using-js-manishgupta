const btn = document.querySelectorAll("button");
const audioContainer = document.querySelector(".audio-container");
// const input = document.querySelector(".input")


const firstBtn = btn[0];
const secondBtn = btn[1];
const thirdBtn = btn[2];
const fourthBtn = btn[3];
const fifthBtn = btn[4];
const sixBtn = btn[5];
const sevenBtn = btn[6];

// let audio = new Audio ("")

addEventListener("keypress", function (event) {
    var key = (event.code);
    console.log(key)
    
    // let audio = new Audio ("")
    // audio.pause()

    if(key === 'KeyA'){
      
      let audio = new Audio ("./1.mp3")
    audio.play()
    } 

    if(key === 'KeyB'){
     
      let audio = new Audio ("./3.mp3")
    audio.play()
    
    }

    if(key === 'KeyC'){
      
      let audio = new Audio ("./4.mp3")
    audio.play()
    }


    if(key === 'KeyD'){
      
      let audio = new Audio ("./5.mp3")
    audio.play()
    }


    if(key === 'KeyE'){
     
    let audio = new Audio ("./6.mp3")
    audio.play()
    }

    if(key === 'KeyF'){
      
      let audio = new Audio ("./7.mp3")
    audio.play()
    }
    // audio.pause()
  });

  firstBtn.addEventListener("click", function (e) {
    const audio = new Audio ("./2.mp3")
    audio.play()
  });


secondBtn.addEventListener("click", function (e) {
  const audio = new Audio ("./2.mp3")
    audio.play()
});

secondBtn.addEventListener("onkeypress", function (e) {
  const audio = new Audio ("./3.mp3")
    audio.play()
});

thirdBtn.addEventListener("click", function (e) {
  const audio = new Audio ("./4.mp3")
    audio.play()
});

fourthBtn.addEventListener("click", function (e) {
  const audio = new Audio ("./5.mp3")
    audio.play()
});

fifthBtn.addEventListener("click", function (e) {
  const audio = new Audio ("./6.mp3")
    audio.play()
});

sixBtn.addEventListener("click", function (e) {
  const audio = new Audio ("./7.mp3")
    audio.play()
});
















//via audio tag

// if(key === 'KeyD'){
//   // const html = `<audio class="audio" controls muted autoplay>
//   //   <source src="./5.mp3" type="">
//   //  </audio>`;

//   // audioContainer.innerHTML = html;

//   // console.log("hii")
//   const audio = new Audio ("./5.mp3")
//   audio.play()
//   }
//   if(key === 'KeyE'){
//   // const html = `<audio class="audio" controls muted autoplay>
//   //   <source src="./6.mp3" type="">
//   //  </audio>`;

//   // audioContainer.innerHTML = html;

//   // console.log("hii")
//   const audio = new Audio ("./6.mp3")
//   audio.play()
//   }
//   if(key === 'KeyF'){
//   // const html = `<audio class="audio" controls muted autoplay>
//   //   <source src="./7.mp3" type="">
//   //  </audio>`;

//   // audioContainer.innerHTML = html;

//   // console.log("hii")

//   const audio = new Audio ("./7.mp3")
//   audio.play()
//   }
// });





// fifthBtn.addEventListener("click", function (e) {
//   const html = `<audio class="audio" controls muted autoplay>
//     <source src="./6.mp3" type="">
//    </audio>`;

//   audioContainer.innerHTML = html;
// });

// sixBtn.addEventListener("click", function (e) {
//   const html = `<audio class="audio" controls autoplay muted>
//     <source src="./7.mp3" type="">
//    </audio>`;

//   audioContainer.innerHTML = html;
// });



