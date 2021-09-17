/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/service_worker.js":
/*!******************************!*\
  !*** ./js/service_worker.js ***!
  \******************************/
/***/ (() => {

eval("var CACHE_NAME = 'v1.0.0';\nvar FILES = ['/', '/js/dist/app.bundle.js'];\nself.addEventListener('install', function (event) {\n  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {\n    return cache.addAll(FILES);\n  }));\n});\nself.addEventListener('activate', function (event) {\n  event.waitUntil(caches.keys().then(function (keys) {\n    return Promise.all(keys.filter(function (key) {\n      return key.indexOf(CACHE_NAME) !== 0;\n    }).map(function (key) {\n      return caches[\"delete\"](key);\n    }));\n  }));\n});\nself.addEventListener('push', function (event) {\n  var message = event.data.text();\n  self.registration.showNotification('Push message received', {\n    body: message,\n    icon: '/img/pwa/tw_icon.png',\n    actions: [{\n      action: 'confirm',\n      title: 'Ok'\n    }]\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wd2EtZmVuaXgvLi9qcy9zZXJ2aWNlX3dvcmtlci5qcz82YmUwIl0sIm5hbWVzIjpbIkNBQ0hFX05BTUUiLCJGSUxFUyIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ3YWl0VW50aWwiLCJjYWNoZXMiLCJvcGVuIiwidGhlbiIsImNhY2hlIiwiYWRkQWxsIiwia2V5cyIsIlByb21pc2UiLCJhbGwiLCJmaWx0ZXIiLCJrZXkiLCJpbmRleE9mIiwibWFwIiwibWVzc2FnZSIsImRhdGEiLCJ0ZXh0IiwicmVnaXN0cmF0aW9uIiwic2hvd05vdGlmaWNhdGlvbiIsImJvZHkiLCJpY29uIiwiYWN0aW9ucyIsImFjdGlvbiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxVQUFVLEdBQUcsUUFBbkI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsQ0FDYixHQURhLEVBRWIsd0JBRmEsQ0FBZDtBQUtBQyxJQUFJLENBQUNDLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDLFVBQVNDLEtBQVQsRUFBZTtBQUMvQ0EsRUFBQUEsS0FBSyxDQUFDQyxTQUFOLENBQ0NDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxVQUFaLEVBQXdCUSxJQUF4QixDQUE2QixVQUFTQyxLQUFULEVBQWU7QUFDM0MsV0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQWFULEtBQWIsQ0FBUDtBQUNBLEdBRkQsQ0FERDtBQUtBLENBTkQ7QUFRQUMsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixVQUF0QixFQUFrQyxVQUFVQyxLQUFWLEVBQWlCO0FBQy9DQSxFQUFBQSxLQUFLLENBQUNDLFNBQU4sQ0FDSUMsTUFBTSxDQUFDSyxJQUFQLEdBQWNILElBQWQsQ0FBbUIsVUFBVUcsSUFBVixFQUFnQjtBQUMvQixXQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUNsQkcsTUFEYyxDQUNQLFVBQVVDLEdBQVYsRUFBZTtBQUNuQixhQUFPQSxHQUFHLENBQUNDLE9BQUosQ0FBWWhCLFVBQVosTUFBNEIsQ0FBbkM7QUFDSCxLQUhjLEVBSWRpQixHQUpjLENBSVYsVUFBVUYsR0FBVixFQUFlO0FBQ2hCLGFBQU9ULE1BQU0sVUFBTixDQUFjUyxHQUFkLENBQVA7QUFDSCxLQU5jLENBQVosQ0FBUDtBQVFILEdBVEQsQ0FESjtBQVlILENBYkQ7QUFlQWIsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixNQUF0QixFQUE4QixVQUFTQyxLQUFULEVBQWU7QUFDekMsTUFBSWMsT0FBTyxHQUFHZCxLQUFLLENBQUNlLElBQU4sQ0FBV0MsSUFBWCxFQUFkO0FBQ0FsQixFQUFBQSxJQUFJLENBQUNtQixZQUFMLENBQWtCQyxnQkFBbEIsQ0FBbUMsdUJBQW5DLEVBQTREO0FBQ3hEQyxJQUFBQSxJQUFJLEVBQUVMLE9BRGtEO0FBRXhETSxJQUFBQSxJQUFJLEVBQUUsc0JBRmtEO0FBR3hEQyxJQUFBQSxPQUFPLEVBQUUsQ0FDTDtBQUFDQyxNQUFBQSxNQUFNLEVBQUUsU0FBVDtBQUFvQkMsTUFBQUEsS0FBSyxFQUFFO0FBQTNCLEtBREs7QUFIK0MsR0FBNUQ7QUFPSCxDQVREIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ0FDSEVfTkFNRSA9ICd2MS4wLjAnO1xuY29uc3QgRklMRVMgPSBbXG5cdCcvJyxcblx0Jy9qcy9kaXN0L2FwcC5idW5kbGUuanMnXG5dXG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGZ1bmN0aW9uKGV2ZW50KXtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlcy5vcGVuKENBQ0hFX05BTUUpLnRoZW4oZnVuY3Rpb24oY2FjaGUpe1xuXHRcdFx0cmV0dXJuIGNhY2hlLmFkZEFsbChGSUxFUyk7XG5cdFx0fSlcblx0KVxufSlcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LndhaXRVbnRpbChcbiAgICAgICAgY2FjaGVzLmtleXMoKS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoa2V5c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5LmluZGV4T2YoQ0FDSEVfTkFNRSkgIT09IDA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICB2YXIgbWVzc2FnZSA9IGV2ZW50LmRhdGEudGV4dCgpO1xuICAgIHNlbGYucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24oJ1B1c2ggbWVzc2FnZSByZWNlaXZlZCcsIHtcbiAgICAgICAgYm9keTogbWVzc2FnZSxcbiAgICAgICAgaWNvbjogJy9pbWcvcHdhL3R3X2ljb24ucG5nJyxcbiAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAge2FjdGlvbjogJ2NvbmZpcm0nLCB0aXRsZTogJ09rJ30sXG4gICAgICAgIF1cbiAgICB9KVxufSk7XG4iXSwiZmlsZSI6Ii4vanMvc2VydmljZV93b3JrZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/service_worker.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/service_worker.js"]();
/******/ 	
/******/ })()
;