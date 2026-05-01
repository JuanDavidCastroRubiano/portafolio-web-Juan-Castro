particlesJS("particles-js", {
  "particles": {
    "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00d2ff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.6 },
    "size": { "value": 4 }, /* Puntos más grandes */
    "line_linked": { 
      "enable": true, 
      "distance": 150, 
      "color": "#00d2ff", 
      "opacity": 0.5, /* Líneas más opacas */
      "width": 2 /* Líneas más gruesas */
    },
    "move": { "enable": true, "speed": 1.5 }
  },
  "interactivity": { 
    "events": { 
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" }
    } 
  }
});