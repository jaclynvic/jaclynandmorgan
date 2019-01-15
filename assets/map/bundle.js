(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var elementBuilder = exports.elementBuilder = function elementBuilder() {
  var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
  var options = arguments[1];

  var target = document.createElement(tagName);
  Object.keys(options).forEach(function (key) {
    if (key !== "childNodes") {
      target[key] = options[key];
    }
  });
  options.childNodes && options.childNodes.forEach(function (node) {
    target.appendChild(node);
  });
  return target;
};

},{}],2:[function(require,module,exports){
"use strict";

var _mapData = require("./map-data.json");

var _mapData2 = _interopRequireDefault(_mapData);

var _interactiveMap = require("./interactiveMap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

setTimeout(function () {
  var base = document.getElementById("map-base");
  var interactiveMap = new _interactiveMap.InteractiveMap(base, _mapData2.default);
}, 1000);

function bgLoaded() {
  document.getElementById("map-skeleton").remove();
}

},{"./interactiveMap":3,"./map-data.json":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteractiveMap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elementBuilder = require("../../js/elementBuilder");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WAIT_UNTIL_ALL_LOADED_IDS = ["map-background", "map-foreground"];

var InteractiveMap = exports.InteractiveMap = function () {
  function InteractiveMap(target, details) {
    _classCallCheck(this, InteractiveMap);

    this.IMAGE_IDS_TO_LOAD = WAIT_UNTIL_ALL_LOADED_IDS.slice();
    this.mapDetails = details;
    this.target = target;
    this.buttons = [];
    this.init();
    return this;
  }

  _createClass(InteractiveMap, [{
    key: "init",
    value: function init() {
      this.createBackground();
      this.createSkeleton();
      this.createMapDetails();
      this.createMapOutlines();
      this.addButtonsToMap();
      this.addSkeletonToMap();
      this.target = null;
    }
  }, {
    key: "createMapDetails",
    value: function createMapDetails() {
      var _this = this;

      var mapDetails = this.mapDetails,
          target = this.target;

      Object.keys(mapDetails).forEach(function (area) {
        var title = mapDetails[area].title;
        // button for hovering

        var button = _this.createButton(area, title);
        // colored detail
        var coloredArea = _this.createColoredArea(area, title);
        _this.addButtonListeners(button, coloredArea);
      });
    }
  }, {
    key: "createBackground",
    value: function createBackground() {
      var background = (0, _elementBuilder.elementBuilder)("img", {
        className: "map-bg",
        id: "map-background",
        src: "/assets/map/images/background.png"
      });
      this.target.appendChild(background);
      background.addEventListener('load', this.doneLoading.bind(this, "map-background"));
    }
  }, {
    key: "doneLoading",
    value: function doneLoading(target) {
      console.log(target);
      this.IMAGE_IDS_TO_LOAD = this.IMAGE_IDS_TO_LOAD.filter(function (id) {
        return target !== id;
      });
      if (!this.IMAGE_IDS_TO_LOAD.length) {
        this.skeleton && this.skeleton.remove();
        WAIT_UNTIL_ALL_LOADED_IDS.forEach(function (ID) {
          document.getElementById(ID).style.opacity = 1;
        });
      }
    }
  }, {
    key: "createSkeleton",
    value: function createSkeleton() {
      if (this.IMAGE_IDS_TO_LOAD.length) {
        this.skeleton = (0, _elementBuilder.elementBuilder)("div", { id: "map-skeleton", className: "bg-loading" });
      }
    }
  }, {
    key: "createButton",
    value: function createButton(area, title) {
      var button = (0, _elementBuilder.elementBuilder)("button", {
        title: title,
        innerText: title,
        id: area,
        className: "map-btn"
      });
      this.buttons.push(button);
      return button;
    }
  }, {
    key: "createColoredArea",
    value: function createColoredArea(area, title) {
      var coloredArea = (0, _elementBuilder.elementBuilder)("img", {
        src: "/assets/map/images/" + area + ".png",
        className: "map-detail coloring",
        id: area + "-color",
        alt: title
      });
      this.target.appendChild(coloredArea);
      this.mapDetails[area].el = coloredArea;
      return coloredArea;
    }
  }, {
    key: "addButtonListeners",
    value: function addButtonListeners(button, coloredArea) {
      button.addEventListener("mouseover", function () {
        coloredArea.style.opacity = 1;
      });
      button.addEventListener("mouseout", function () {
        coloredArea.style.opacity = 0;
      });
    }
  }, {
    key: "addButtonsToMap",
    value: function addButtonsToMap() {
      var _this2 = this;

      this.buttons.forEach(function (btn) {
        return _this2.target.appendChild(btn);
      });
    }
  }, {
    key: "addSkeletonToMap",
    value: function addSkeletonToMap() {
      this.target.appendChild(this.skeleton);
    }
  }, {
    key: "createMapOutlines",
    value: function createMapOutlines(target) {
      var outlines = (0, _elementBuilder.elementBuilder)("img", {
        src: "/assets/map/images/foreground.png",
        className: "map-detail",
        id: "map-foreground",
        alt: "camp map foreground"
      });

      this.target.appendChild(outlines);
      outlines.addEventListener('load', this.doneLoading.bind(this, "map-foreground"));
    }
  }]);

  return InteractiveMap;
}();

},{"../../js/elementBuilder":1}],4:[function(require,module,exports){
module.exports={
    "redwood-grove": {
      "title": "Ceremony at Redwood Grove"
    },
    "bbq-area": {
      "title": "BBQ & Picnic Area"
    },
    "willow-glen": {
      "title": "Willow Glen Lodge"
    },
    "tipi-camp": {
      "title": "Tipi Camp"
    },
    "main-hall": {
      "title": "Main Hall"
    },
    "cabin-camp": {
      "title": "Cabin Camp"
    },
    "camp-entrance": {
      "title": "Camp Entrance"
    },
    "totem-ampitheatre": {
      "title": "Totem Ampitheatre"
    }
  };
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL2pzL2VsZW1lbnRCdWlsZGVyLmpzIiwiYXNzZXRzL21hcC9qcy9pbmRleC5qcyIsImFzc2V0cy9tYXAvanMvaW50ZXJhY3RpdmVNYXAuanMiLCJhc3NldHMvbWFwL2pzL21hcC1kYXRhLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FPLElBQU0sMENBQWlCLFNBQWpCLGNBQWlCLEdBQThCO0FBQUEsTUFBN0IsT0FBNkIsdUVBQW5CLEtBQW1CO0FBQUEsTUFBWixPQUFZOztBQUMxRCxNQUFNLFNBQVMsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQWY7QUFDQSxTQUFPLElBQVAsQ0FBWSxPQUFaLEVBQXFCLE9BQXJCLENBQTZCLGVBQU87QUFDbEMsUUFBSSxRQUFRLFlBQVosRUFBMEI7QUFDeEIsYUFBTyxHQUFQLElBQWMsUUFBUSxHQUFSLENBQWQ7QUFDRDtBQUNGLEdBSkQ7QUFLQSxVQUFRLFVBQVIsSUFDRSxRQUFRLFVBQVIsQ0FBbUIsT0FBbkIsQ0FBMkIsZ0JBQVE7QUFDakMsV0FBTyxXQUFQLENBQW1CLElBQW5CO0FBQ0QsR0FGRCxDQURGO0FBSUEsU0FBTyxNQUFQO0FBQ0QsQ0FaTTs7Ozs7QUNBUDs7OztBQUNBOzs7O0FBR0EsV0FBVyxZQUFXO0FBQ3BCLE1BQU0sT0FBTyxTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjtBQUNBLE1BQU0saUJBQWlCLElBQUksOEJBQUosQ0FBbUIsSUFBbkIsRUFBeUIsaUJBQXpCLENBQXZCO0FBQ0QsQ0FIRCxFQUdHLElBSEg7O0FBS0EsU0FBUyxRQUFULEdBQW9CO0FBQ2xCLFdBQVMsY0FBVCxDQUF3QixjQUF4QixFQUF3QyxNQUF4QztBQUNEOzs7Ozs7Ozs7Ozs7QUNYRDs7OztBQUVBLElBQU0sNEJBQTRCLENBQUMsZ0JBQUQsRUFBbUIsZ0JBQW5CLENBQWxD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KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjb25zdCBlbGVtZW50QnVpbGRlciA9ICh0YWdOYW1lID0gXCJkaXZcIiwgb3B0aW9ucykgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGtleSAhPT0gXCJjaGlsZE5vZGVzXCIpIHtcbiAgICAgIHRhcmdldFtrZXldID0gb3B0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIG9wdGlvbnMuY2hpbGROb2RlcyAmJlxuICAgIG9wdGlvbnMuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsImltcG9ydCBtYXBEZXRhaWxzIGZyb20gXCIuL21hcC1kYXRhLmpzb25cIjtcbmltcG9ydCB7IEludGVyYWN0aXZlTWFwfSBmcm9tICcuL2ludGVyYWN0aXZlTWFwJztcblxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICBjb25zdCBiYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXAtYmFzZVwiKTtcbiAgY29uc3QgaW50ZXJhY3RpdmVNYXAgPSBuZXcgSW50ZXJhY3RpdmVNYXAoYmFzZSwgbWFwRGV0YWlscyk7XG59LCAxMDAwKTtcblxuZnVuY3Rpb24gYmdMb2FkZWQoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwLXNrZWxldG9uXCIpLnJlbW92ZSgpO1xufVxuIiwiaW1wb3J0IHsgZWxlbWVudEJ1aWxkZXIgfSBmcm9tIFwiLi4vLi4vanMvZWxlbWVudEJ1aWxkZXJcIjtcblxuY29uc3QgV0FJVF9VTlRJTF9BTExfTE9BREVEX0lEUyA9IFtcIm1hcC1iYWNrZ3JvdW5kXCIsIFwibWFwLWZvcmVncm91bmRcIl07IFxuXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RpdmVNYXAge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGRldGFpbHMpIHtcbiAgICB0aGlzLklNQUdFX0lEU19UT19MT0FEID0gV0FJVF9VTlRJTF9BTExfTE9BREVEX0lEUy5zbGljZSgpO1xuICAgIHRoaXMubWFwRGV0YWlscyA9IGRldGFpbHM7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5idXR0b25zID0gW107XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUJhY2tncm91bmQoKTtcbiAgICB0aGlzLmNyZWF0ZVNrZWxldG9uKCk7XG4gICAgdGhpcy5jcmVhdGVNYXBEZXRhaWxzKCk7XG4gICAgdGhpcy5jcmVhdGVNYXBPdXRsaW5lcygpO1xuICAgIHRoaXMuYWRkQnV0dG9uc1RvTWFwKCk7XG4gICAgdGhpcy5hZGRTa2VsZXRvblRvTWFwKCk7XG4gICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICB9XG4gIGNyZWF0ZU1hcERldGFpbHMoKSB7XG4gICAgY29uc3QgeyBtYXBEZXRhaWxzLCB0YXJnZXQgfSA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXMobWFwRGV0YWlscykuZm9yRWFjaChhcmVhID0+IHtcbiAgICAgIGNvbnN0IHsgdGl0bGUgfSA9IG1hcERldGFpbHNbYXJlYV07XG4gICAgICAvLyBidXR0b24gZm9yIGhvdmVyaW5nXG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbihhcmVhLCB0aXRsZSk7XG4gICAgICAvLyBjb2xvcmVkIGRldGFpbFxuICAgICAgY29uc3QgY29sb3JlZEFyZWEgPSB0aGlzLmNyZWF0ZUNvbG9yZWRBcmVhKGFyZWEsIHRpdGxlKTtcbiAgICAgIHRoaXMuYWRkQnV0dG9uTGlzdGVuZXJzKGJ1dHRvbiwgY29sb3JlZEFyZWEpO1xuICAgIH0pO1xuICB9XG4gIGNyZWF0ZUJhY2tncm91bmQoKXtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZWxlbWVudEJ1aWxkZXIoXCJpbWdcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIm1hcC1iZ1wiLFxuICAgICAgaWQ6IFwibWFwLWJhY2tncm91bmRcIixcbiAgICAgIHNyYzogXCIvYXNzZXRzL21hcC9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIlxuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMuZG9uZUxvYWRpbmcuYmluZCh0aGlzLCBcIm1hcC1iYWNrZ3JvdW5kXCIpKTtcbiAgfVxuICBkb25lTG9hZGluZyh0YXJnZXQpe1xuICAgIGNvbnNvbGUubG9nKHRhcmdldClcbiAgICB0aGlzLklNQUdFX0lEU19UT19MT0FEID0gdGhpcy5JTUFHRV9JRFNfVE9fTE9BRC5maWx0ZXIoaWQ9PnRhcmdldCAhPT0gaWQpO1xuICAgIGlmKCF0aGlzLklNQUdFX0lEU19UT19MT0FELmxlbmd0aCl7XG4gICAgICB0aGlzLnNrZWxldG9uICYmIHRoaXMuc2tlbGV0b24ucmVtb3ZlKCk7XG4gICAgICBXQUlUX1VOVElMX0FMTF9MT0FERURfSURTLmZvckVhY2goSUQ9PntcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSUQpLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgY3JlYXRlU2tlbGV0b24oKXtcbiAgICBpZih0aGlzLklNQUdFX0lEU19UT19MT0FELmxlbmd0aCl7XG4gICAgICB0aGlzLnNrZWxldG9uID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwge2lkOlwibWFwLXNrZWxldG9uXCIsIGNsYXNzTmFtZTpcImJnLWxvYWRpbmdcIn0pO1xuICAgIH1cbiAgfVxuICBjcmVhdGVCdXR0b24oYXJlYSwgdGl0bGUpIHtcbiAgICBjb25zdCBidXR0b24gPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCB7XG4gICAgICB0aXRsZSxcbiAgICAgIGlubmVyVGV4dDogdGl0bGUsXG4gICAgICBpZDogYXJlYSxcbiAgICAgIGNsYXNzTmFtZTogXCJtYXAtYnRuXCJcbiAgICB9KTtcbiAgICB0aGlzLmJ1dHRvbnMucHVzaChidXR0b24pO1xuICAgIHJldHVybiBidXR0b247XG5cbiAgfVxuICBjcmVhdGVDb2xvcmVkQXJlYShhcmVhLCB0aXRsZSkge1xuICAgIGNvbnN0IGNvbG9yZWRBcmVhID0gZWxlbWVudEJ1aWxkZXIoXCJpbWdcIiwge1xuICAgICAgc3JjOiBgL2Fzc2V0cy9tYXAvaW1hZ2VzLyR7YXJlYX0ucG5nYCxcbiAgICAgIGNsYXNzTmFtZTogXCJtYXAtZGV0YWlsIGNvbG9yaW5nXCIsXG4gICAgICBpZDogYCR7YXJlYX0tY29sb3JgLFxuICAgICAgYWx0OiB0aXRsZVxuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKGNvbG9yZWRBcmVhKTtcbiAgICB0aGlzLm1hcERldGFpbHNbYXJlYV0uZWwgPSBjb2xvcmVkQXJlYTtcbiAgICByZXR1cm4gY29sb3JlZEFyZWE7XG4gIH1cbiAgYWRkQnV0dG9uTGlzdGVuZXJzKGJ1dHRvbiwgY29sb3JlZEFyZWEpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICBjb2xvcmVkQXJlYS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIGNvbG9yZWRBcmVhLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH0pO1xuICB9XG4gIGFkZEJ1dHRvbnNUb01hcCgpIHtcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidG4gPT4gdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQoYnRuKSk7XG4gIH1cbiAgYWRkU2tlbGV0b25Ub01hcCgpIHtcbiAgICB0aGlzLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnNrZWxldG9uKTtcbiAgfVxuICBjcmVhdGVNYXBPdXRsaW5lcyh0YXJnZXQpIHtcbiAgICBjb25zdCBvdXRsaW5lcyA9IGVsZW1lbnRCdWlsZGVyKFwiaW1nXCIsIHtcbiAgICAgIHNyYzogXCIvYXNzZXRzL21hcC9pbWFnZXMvZm9yZWdyb3VuZC5wbmdcIixcbiAgICAgIGNsYXNzTmFtZTogXCJtYXAtZGV0YWlsXCIsXG4gICAgICBpZDogXCJtYXAtZm9yZWdyb3VuZFwiLFxuICAgICAgYWx0OiBcImNhbXAgbWFwIGZvcmVncm91bmRcIlxuICAgIH0pO1xuXG4gICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQob3V0bGluZXMpO1xuICAgIG91dGxpbmVzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmRvbmVMb2FkaW5nLmJpbmQodGhpcywgXCJtYXAtZm9yZWdyb3VuZFwiKSk7XG5cbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcInJlZHdvb2QtZ3JvdmVcIjoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkNlcmVtb255IGF0IFJlZHdvb2QgR3JvdmVcIlxuICAgIH0sXG4gICAgXCJiYnEtYXJlYVwiOiB7XG4gICAgICBcInRpdGxlXCI6IFwiQkJRICYgUGljbmljIEFyZWFcIlxuICAgIH0sXG4gICAgXCJ3aWxsb3ctZ2xlblwiOiB7XG4gICAgICBcInRpdGxlXCI6IFwiV2lsbG93IEdsZW4gTG9kZ2VcIlxuICAgIH0sXG4gICAgXCJ0aXBpLWNhbXBcIjoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlRpcGkgQ2FtcFwiXG4gICAgfSxcbiAgICBcIm1haW4taGFsbFwiOiB7XG4gICAgICBcInRpdGxlXCI6IFwiTWFpbiBIYWxsXCJcbiAgICB9LFxuICAgIFwiY2FiaW4tY2FtcFwiOiB7XG4gICAgICBcInRpdGxlXCI6IFwiQ2FiaW4gQ2FtcFwiXG4gICAgfSxcbiAgICBcImNhbXAtZW50cmFuY2VcIjoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkNhbXAgRW50cmFuY2VcIlxuICAgIH0sXG4gICAgXCJ0b3RlbS1hbXBpdGhlYXRyZVwiOiB7XG4gICAgICBcInRpdGxlXCI6IFwiVG90ZW0gQW1waXRoZWF0cmVcIlxuICAgIH1cbiAgfTsiXX0=
