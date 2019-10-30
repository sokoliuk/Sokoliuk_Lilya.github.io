//Credits
var by = "Site made by DeathMaks (deathmaks.github.io) & FejAleX (fejalex.github.io)";

$(document).ready(function() {
  
  $("body").css("display", "none");

    $("body").fadeIn(0);
    
  $("a.transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(500, redirectPage);    
  });
    
  function redirectPage() {
    window.location = linkLocation;
  }
  
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeImage (overed, type, idd) {
  await sleep(300);
  if(overed)
  {
    if(type === "download")
      $(`#forChange${idd}`)[0].src = "Scripts/change/download.png";
    else
      $(`#forChange${idd}`)[0].src = "Scripts/change/link.png";
  }
  else
  {
    $(`#forChange${idd}`)[0].src = "Scripts/change/doc.png";
  }
}

async function urlto (href) {
  window.location.href = href;
}

async function downloadIt (fileLink) {
  $('a#fDown').attr({target: '_blank', 
                    href  : fileLink});
}