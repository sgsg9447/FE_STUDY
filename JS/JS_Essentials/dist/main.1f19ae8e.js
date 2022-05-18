// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"getRandom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = random;
exports.user = void 0;

// export default function random(){
//     return Math.floor(Math.random()*10)
// }
function random() {
  return Math.floor(Math.random() * 10);
}

var user = {
  name: "Sseul",
  age: 299
};
exports.user = user;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var All = _interopRequireWildcard(require("./getRandom"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { random, user as sseul } from "./getRandom";
// console.log(random());
// console.log(sseul);
console.log(All); // // // 산술 연산자
// // console.log(1 + 2);
// // console.log(5 - 7);
// // console.log(3 * 4);
// // console.log(10 / 2);
// // // 할당 연산자
// // let a = 2;
// // // a = a + 1;
// // a += 1;
// // console.log(a);
// // // 비교 연산자
// // const a = 1;
// // const b = 3;
// // console.log(a !== b);
// // console.log(a === b);
// // function isEqual(x, y) {
// //   return x === y;
// // }
// // console.log(isEqual(1, 1));
// // console.log(isEqual(2, "2"));
// // const c = 1;
// // const d = 7;
// // console.log(c < d);
// // // 논리 연산자
// // const a = 1 === 1;
// // const b = "AB" === "AB";
// // const c = true;
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log('&&: ',a && b && c); /*그리고 and*/
// // console.log('||: ',a || b && c); /*또는 or*/
// // console.log('!: ', !a); /*부정 not*/
// // 삼항 연산자
// const a = 1 < 2
// if(a){
//     console.log('참')
// }else{
//     console.log('거짓')
// }
// console.log(a ? '참': '거짓')
// console.log(random());
// const a = random();
// switch (a) {
//   case 0:
//     console.log("a is 0");
//     break;
//   case 2:
//     console.log("a is 2");
//     break;
//   case 4:
//     console.log("rest...");
//     break;
//   default:
//     console.log("rest...");
// }
// if (a === 0) {
//   console.log("a is 0");
// } else if (a == 2) {
//   console.log("a is 2");
// } else {
//   console.log("rest...");
// }
// //반복문
// //for (시작조건; 종료조건; 변화조건){}
// const ulEl = document.querySelector("ul");
// for (let i = 0; i < 3; i += 1) {
//   const li = document.createElement("li");
//   li.textContent = `list -${i + 1}`;
//   li.addEventListener("click", function () {
//     console.log(li.textContent);
//   });
//   ulEl.appendChild(li);
// }
// //형 변환
// const a = 1;
// const b = "1";
// console.log(a == b);
// //Truthy(참 같은 값)
// // true, {}, [], 1, 2, 'false', -12, '3.14', ...
// //Falsy(거짓 같은 값)
// // false, '', null, undefined, 0, -0, NaN
// if ('false') {
//   console.log(123);
// }
// 함수 복습
// function sum(x, y) {
//   return x + y;
// }
// const sum = function (x, y) {
//   return x + y;
// };
// const a = sum(1, 3);
// const b = sum(4, 12);
// console.log(a + b);
// //화살표 함수
// // () =>{} vs function(){}
// const double = function (x) {
//   return x * 2;
// };
// console.log("double: ", double(7));
// const doubleArrow = (x) => {
//   return x * 2;
// };
// const doubleArrow2 = (x) => x * 2;
// ;
// console.log("doubleArrow", doubleArrow(7));
// console.log("doubleArrow2", doubleArrow2(7));
// //즉시실행함수
// //IIFE, Immediately-Invoked Function Expression
// const a = 7;
// // function double() {
// //   console.log(a * 2);
// // }
// // double();
// (function () {
//   console.log(a * 2);
// })();
// (function () {
//   console.log(a * 2);
// })();
//호이스팅
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// const a = 7;
// double();
// function double() {
//   console.log(a * 2);
// }
// const a = 7;
// double();
// const double = function () {
//   console.log(a * 2);
// };
//타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료
// setTimeout(function () {
//   console.log("sseul!");
// }, 3000);
// const timer = setTimeout(() => {
//   console.log("Sseul!");
// }, 3000);
// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", () => {
//   clearTimeout(timer);
// });
// 콜백
// 함수의 인수로 사용되는 함수
// 실행 위치를 보장하는 함수
// function timeout(callback) {
//   setTimeout(() => {
//     console.log("Sseul");
//     callback()
//   }, 3000);
// }
// timeout(()=>{
//     console.log("Done");
// });
//생성자 함수
// const heropy = {
//   firstName: "Heropy",
//   lastName: "Park",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(heropy);
// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }
// User.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }
// const sseul = new User("sseul", "kim");
// console.log(sseul);
//this
// 일반(Normal)함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow)함수는 자신이 선언된 함수 범위에서 this 정의!
// const sseul = {
//   name: "Sseul",
//   normal: function () {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   },
// };
// sseul.normal();
// sseul.arrow();
// const timer = {
//   name: "Sseul!!",
//   timeout: function () {
//     setTimeout( () =>{
//       console.log(this.name);
//     }, 2000);
//   },
// };
// timer.timeout();
//ES6 Classes
// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// const sseul = new User("Sseul", "Kim");
// console.log(sseul);
// console.log(sseul.getFullName());
//상속(확장)
// class Vehicle{
//   constructor(name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)
// class Bicycle extends Vehicle{
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// }
// class Car extends Vehicle{
//   constructor(name, wheel, license){
//     super(name, wheel)
//     this.license = license
//   }
// }
},{"./getRandom":"getRandom.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62945" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map