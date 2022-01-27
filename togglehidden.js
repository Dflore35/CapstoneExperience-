//Global Vars
var page = 0;

//Register Aframe Component (all lower case)
AFRAME.registerComponent("togglehidden", {
  //Initialize function
  init: function () {
    //get scene element
    var sceneEl = document.querySelector("a-scene");

    //Get this element
    let el = this.el;

    //get all elements in text frame
    var els = sceneEl.querySelectorAll("#text");

    //get image frame
    var img = sceneEl.querySelector("#image");

    //get toggle button
    var tb = sceneEl.querySelector("#toggleButton");


    //Give component a function
    this.toggleHide = function () {
      if (page == 0) {
        //change text and font size 
        for (var i = 0; i < els.length; i++) {
          els[i].setAttribute(
            "value",
            "The asteroid is most likely a survivor of multiple violent hit-and-run collisions, common when the solar system was forming.Thus Psyche may be able to tell us how Earth's core and the cores of other terrestrial planets came to be."
          );
          let currSpacing = els[i].getAttribute("letter-spacing");

          let params = {
            property: "letter-spacing",
            to: 20.0,
            dur: 10,
          };
          els[i].setAttribute("animation", params);
        }
        //change the image and text size
          img.setAttribute("src", "https://cdn.glitch.global/5abe6510-0954-4132-8e0c-d35824eaf575/thumbnails%2Fhit.PNG?1641630335058");
        
        page = 1;
        tb.setAttribute("value", "Back: Why is Psyche important?");
      } else {
        //change the text and text size
        for (var i = 0; i < els.length; i++) {
          els[i].setAttribute(
            "value",
            "Deep within the terrestrial planets, including Earth, scientists infer the presence of metallic cores, but these lie unreachably far below the planets’ rocky mantles and crusts. The asteroid Psyche offers a unique window into these building blocks of planet formation and the opportunity to investigate a previously unexplored type of world."
          );
          let currOpacity = els[i].getAttribute("letter-spacing");

          let params = {
            property: "letter-spacing",
            to: 9.0,
            dur: 10,
          };
          els[i].setAttribute("animation", params);
        }
        //change the image back to earth
        img.setAttribute("src","https://cdn.glitch.me/5abe6510-0954-4132-8e0c-d35824eaf575/earth-core.PNG?v=1641272839386");

        page = 0;
        tb.setAttribute("value", "G0 T0: How might have Pysche formed?");

        
      }
    };

    //Add EventListener
    this.el.addEventListener("click", this.toggleHide);
  },
  //On Remove
  remove: function () {
    this.el.removeEventListener("click", this.toggleHide);
  },
});
