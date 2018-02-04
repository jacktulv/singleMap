(function(window){var svgSprite='<svg><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M262.29333333 757.33333333s179.09333333-313.70666667 496.32-496.32C579.94666667 582.18666667 262.29333333 757.33333333 262.29333333 757.33333333z" fill="#FFFFFF" ></path><path d="M758.50666667 757.33333333S579.41333333 443.62666667 262.18666667 261.01333333C440.85333333 582.18666667 758.50666667 757.33333333 758.50666667 757.33333333z" fill="#FFFFFF" ></path><path d="M512 512m-477.86666667 0a477.86666667 477.86666667 0 1 0 955.73333334 0 477.86666667 477.86666667 0 1 0-955.73333334 0Z" fill="#1881EA" ></path><path d="M268.90666667 331.73333333m-52.26666667 0a52.26666667 52.26666667 0 1 0 104.53333333 0 52.26666667 52.26666667 0 1 0-104.53333333 0Z" fill="#FFFFFF" ></path><path d="M268.90666667 515.73333333m-52.26666667 0a52.26666667 52.26666667 0 1 0 104.53333333 0 52.26666667 52.26666667 0 1 0-104.53333333 0Z" fill="#FFFFFF" ></path><path d="M268.90666667 694.93333333m-52.26666667 0a52.26666667 52.26666667 0 1 0 104.53333333 0 52.26666667 52.26666667 0 1 0-104.53333333 0Z" fill="#FFFFFF" ></path><path d="M828.16 330.24s-222.4-65.28-448 0c225.6 69.12 448 0 448 0zM828.16 516.90666667s-222.4-65.28-448 0c225.6 69.12 448 0 448 0zM828.16 696.10666667s-222.4-65.28-448 0c225.6 69.12 448 0 448 0z" fill="#FFFFFF" ></path></symbol><symbol id="icon-menu1-copy" viewBox="0 0 1024 1024"><path d="M283.62666665 757.33333333s179.09333333-313.70666667 496.32-496.32C601.27999999 582.18666667 283.62666665 757.33333333 283.62666665 757.33333333z" fill="#FFFFFF" ></path><path d="M779.83999999 757.33333333S600.74666665 443.62666667 283.51999999 261.01333333C462.18666665 582.18666667 779.83999999 757.33333333 779.83999999 757.33333333z" fill="#FFFFFF" ></path><path d="M533.33333332 512m-477.86666667 0a477.86666667 477.86666667 0 1 0 955.73333334 0 477.86666667 477.86666667 0 1 0-955.73333334 0Z" fill="#1881EA" ></path><path d="M290.23999999 331.73333333m-52.26666667 0a52.26666667 52.26666667 0 1 0 104.53333333 0 52.26666667 52.26666667 0 1 0-104.53333333 0Z" fill="#FFFFFF" ></path><path d="M290.23999999 515.73333333m-52.26666667 0a52.26666667 52.26666667 0 1 0 104.53333333 0 52.26666667 52.26666667 0 1 0-104.53333333 0Z" fill="#FFFFFF" ></path><path d="M290.23999999 694.93333333m-52.26666667 0a52.26666667 52.26666667 0 1 0 104.53333333 0 52.26666667 52.26666667 0 1 0-104.53333333 0Z" fill="#FFFFFF" ></path><path d="M849.49333332 330.24s-222.4-65.28-448 0c225.6 69.12 448 0 448 0zM849.49333332 516.90666667s-222.4-65.28-448 0c225.6 69.12 448 0 448 0zM849.49333332 696.10666667s-222.4-65.28-448 0c225.6 69.12 448 0 448 0z" fill="#FFFFFF" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)