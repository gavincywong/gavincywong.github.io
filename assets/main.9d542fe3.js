(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function r(o){$("#"+o).css({visibility:"visible",transform:"translateY(100%)",opacity:"1",transition:"all 0.3s"})}function a(o){$("#"+o).css({visibility:"hidden",transform:"translateY(-80%)",opacity:"0",transition:"all 0.3s"})}function s(){$("#nav").css("width","190px")}function u(){$("#nav").css("width","0px")}function d(o){var n;switch(o.target.id){case"selfBalancingCarModal":n="self-balancing-car";break;case"marketNotificationModal":n="market-notification";break;case"stackGameModal":n="stack-game";break;case"calculatorModal":n="calculator";break;case"drumMachineModal":n="drum-machine";break;default:console.log("Error: on opening modals")}return n}$(document).ready(function(){$("#stack-game").load("./stack/stack-game.html",function(){$(".close").on("click",function(){a("stack-game")})}),$("#market-notification").load("./mnb/mnb.html",function(){$(".close").on("click",function(){a("market-notification")})}),$("#self-balancing-car").load("./car/self-balancing-car.html",function(){$(".close").on("click",function(){a("self-balancing-car")})}),$("#calculator").load("./calculator/calculator.html",function(){$(".close").on("click",function(){a("calculator")})}),$("#drum-machine").load("./drum/drum-machine.html",function(){$(".close").on("click",function(){a("drum-machine")})}),$(".main, .closebtn").on("click",function(){u()}),$(".navBtn").on("click",function(){s()}),$("#selfBalancingCarModal, #marketNotificationModal, #stackGameModal, #calculatorModal, #drumMachineModal").on("click",function(o){var n=d(o);r(n)})});
