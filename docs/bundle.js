!function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var s=function(t,e){return e?e.querySelector(t):document.querySelector(t)},n=function(t,e){return e?e.querySelectorAll(t):document.querySelectorAll(t)},i=function(t,e,r){e.addEventListener(t,r)},o=function(t,e){t.forEach(function(t){Object.assign(t.style,e)})};function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),s.forEach(function(e){l(t,e,r[e])})}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){var e=this;this.state={translateValue:0,currentIndex:0,currentSliderWidth:s(t.element).clientWidth},console.log(this.state),this.options=a({numSlidesPer:1},t),this.slider=s(t.element),this.innerWrapper=s(".dz-slider-inner",this.slider),this.slides=Array.from(n(".dz-slider-inner > .slide",this.slider)),this.arrowsAndDots=document.createElement("div"),this.dotButtons,this.dotsContainer,this.dots,["determineSlidesPerView","addElementsToDOM","applyStyles","addEventListeners"].forEach(function(t){return e[t]()})}d.prototype.determineSlidesPerView=function(){var t=this,e=this.options,r=this.slides;if(e.numSlidesPer>1&&Number.isInteger(e.numSlidesPer)){r.forEach(function(r){r.style.width="".concat(t.state.currentSliderWidth/e.numSlidesPer,"px")});var s=r.slice(0,Math.ceil(r.length/e.numSlidesPer));this.dotButtons=s.map(function(t,e){return'<button class="dz-slider-dot" data-index='.concat(e,"></button>")})}else this.dotButtons=this.slides.map(function(t,e){return'<button class="dz-slider-dot" data-index='.concat(e,"></button>")})},d.prototype.addElementsToDOM=function(){var t=this;this.arrowsAndDots.innerHTML='<div class="dz-slider-arrow-left">\n                                    <img src="" />\n                                  </div>\n                                  <div class="dz-slider-arrow-right">\n                                    <img src="" />\n                                  </div>\n                                  <div class="dz-slider-dots-container">\n                                    '.concat(this.dotButtons.join(""),"\n                                  </div>"),Array.from(this.arrowsAndDots.childNodes).forEach(function(e){"#text"!==e.nodeName&&t.slider.appendChild(e)});var e=this.options.arrowOpts;this.leftArrow=s(".dz-slider-arrow-left > img",this.slider),this.rightArrow=s(".dz-slider-arrow-right > img",this.slider),this.dotsContainer=s(".dz-slider > .dz-slider-dots-container"),this.dots=Array.from(n(".dz-slider-dot",this.slider)),this.leftArrow.setAttribute("src",e.leftArrow.url),this.rightArrow.setAttribute("src",e.rightArrow.url)},d.prototype.goBack=function(){this.state.currentIndex>0&&(this.setState({translateValue:this.state.translateValue+this.state.currentSliderWidth,currentIndex:this.state.currentIndex-1}),this.innerWrapper.style.transform="translateX(".concat(this.state.translateValue,"px)"),this.selectActiveDot(this.state.currentIndex))},d.prototype.goForward=function(){this.state.currentIndex<Math.ceil(this.slides.length/this.options.numSlidesPer)-1?(this.setState({translateValue:this.state.translateValue-this.state.currentSliderWidth,currentIndex:this.state.currentIndex+1}),this.selectActiveDot(this.state.currentIndex),this.innerWrapper.style.transform="translateX(".concat(this.state.translateValue,"px)")):(this.setState({translateValue:0,currentIndex:0}),this.selectActiveDot(0),this.innerWrapper.style.transform="translateX(0px)")},d.prototype.handleDotClick=function(t){var e=this.slides,r=this.innerWrapper,s=parseInt(t.target.getAttribute("data-index"));if(!(0===s&&0===this.state.currentIndex||s===e.length-1&&this.state.currentIndex===e.length-1)){var n=0,i=0;this.state.currentIndex<s?(n=s-this.state.currentIndex,i=this.state.translateValue+-n*this.state.currentSliderWidth):(n=this.state.currentIndex-s,i=this.state.translateValue+n*this.state.currentSliderWidth),this.setState({currentIndex:s,translateValue:i}),r.style.transform="translateX(".concat(this.state.translateValue,"px)"),this.selectActiveDot(s)}},d.prototype.selectActiveDot=function(t){var e=this.dots,r=this.options.dotOpts;e.forEach(function(t){t.style.backgroundColor=r.baseColor}),e.forEach(function(e,s){t===s&&(e.style.backgroundColor=r.activeColor)})},d.prototype.handleResize=function(){var t=this.slider,e=this.innerWrapper,r=t.clientWidth;if(0===this.state.currentIndex)return this.setState({currentSliderWidth:r});if(r<this.state.currentSliderWidth){var s=this.state.currentSliderWidth-r,n=this.state.translateValue+s;return e.style.transform="translateX(".concat(n,"px)"),this.setState({currentSliderWidth:r,translateValue:n})}if(r>this.state.currentSliderWidth){var i=r-this.state.currentSliderWidth,o=this.state.translateValue-i;return e.style.transform="translateX(".concat(o,"px)"),this.setState({currentSliderWidth:r,translateValue:o})}},d.prototype.applyStyles=function(){var t=this.slider,e=this.dotsContainer,r=this.dots,s=this.leftArrow,n=this.rightArrow,i=this.options,l=i.baseStyles,d=i.dotOpts,c=i.arrowOpts;o([t],l),o([e],{bottom:d.yPos}),o(r,a({},d.styles,{backgroundColor:d.baseColor})),o([r[0]],{backgroundColor:d.activeColor}),o([s.parentElement],{left:c.leftArrow.pos}),o([n.parentElement],{right:c.rightArrow.pos})},d.prototype.addEventListeners=function(){var t=this;i("click",this.leftArrow,this.goBack.bind(this)),i("click",this.rightArrow,this.goForward.bind(this)),i("resize",window,this.handleResize.bind(this)),this.dots.forEach(function(e){return i("click",e,t.handleDotClick.bind(t))})},d.prototype.setState=function(t){this.state=a({},this.state,t)};var c=d;window.addEventListener("DOMContentLoaded",function(){new c({element:".testimonials.dz-slider",numSlidesPer:1,baseStyles:{height:"300px"},arrowOpts:{activeColor:"#FFFFFF",leftArrow:{url:"./gray-arrow-back.svg",pos:"10px"},rightArrow:{url:"./gray-arrow-forward.svg",pos:"10px"}},dotOpts:{yPos:"5px",baseColor:"#333",activeColor:"#FFF",styles:{"border-radius":"50%",padding:"6px","margin-right":"3px"}}})})}]);