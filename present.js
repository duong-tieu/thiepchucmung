var to = 'my important older sister!';
var gift_url = 'https://www.facebook.com/photo/?fbid=615123146763655&set=a.556971429245494';
var gift_image_url ='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/309167078_615123140096989_1976906343674249703_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oTEcKohhuKkAX8uofML&_nc_oc=AQmaV4QfqMxGHz4KSGw-owkLnxNf4SE_VVWoAe1PdUWnlDQGk-Lyfc7EnOTtFQRFzGo&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT8mnaIWCwH6GJ5rFusoFEqG6eYS_1KFt-Y_DO3z3PdSaA&oe=6355A3F5';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

    var _giftLink,
        _giftImg;

    if (gift_url) {
        _giftLink = document.createElement("a");
        _giftLink.href = gift_url;
        _giftLink.target = "_blank";
        presentImage.appendChild(_giftLink);
    }

    if (gift_image_url) {
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if(_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }
    }

    present.addEventListener("click", function(e){
        present.classList.toggle("open");
        document.getElementById("card").classList.add("card-show");
    }, false);



    nametag.innerText = to;
}

init();
