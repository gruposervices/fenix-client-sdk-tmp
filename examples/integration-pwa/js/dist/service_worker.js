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

/***/ "./public/modules/pwa/service_worker.js":
/*!**********************************************!*\
  !*** ./public/modules/pwa/service_worker.js ***!
  \**********************************************/
/***/ (() => {

eval("var CACHE_NAME = 'v1.0.0';\nvar FILES = ['/views/test-pwa.html', '/modules/pwa/dist/app.bundle.js'];\nself.addEventListener('install', function (event) {\n  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {\n    return cache.addAll(FILES);\n  }));\n});\nself.addEventListener('activate', function (event) {\n  event.waitUntil(caches.keys().then(function (keys) {\n    return Promise.all(keys.filter(function (key) {\n      return key.indexOf(CACHE_NAME) !== 0;\n    }).map(function (key) {\n      return caches[\"delete\"](key);\n    }));\n  }));\n});\nself.addEventListener('push', function (event) {\n  var message = event.data.text();\n  self.registration.showNotification('Push message received', {\n    body: message,\n    icon: '/img/pwa/tw_icon.png',\n    actions: [{\n      action: 'confirm',\n      title: 'Ok'\n    }]\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZW5peC1jaGF0Ly4vcHVibGljL21vZHVsZXMvcHdhL3NlcnZpY2Vfd29ya2VyLmpzP2RiMDAiXSwibmFtZXMiOlsiQ0FDSEVfTkFNRSIsIkZJTEVTIiwic2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIndhaXRVbnRpbCIsImNhY2hlcyIsIm9wZW4iLCJ0aGVuIiwiY2FjaGUiLCJhZGRBbGwiLCJrZXlzIiwiUHJvbWlzZSIsImFsbCIsImZpbHRlciIsImtleSIsImluZGV4T2YiLCJtYXAiLCJtZXNzYWdlIiwiZGF0YSIsInRleHQiLCJyZWdpc3RyYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uIiwiYm9keSIsImljb24iLCJhY3Rpb25zIiwiYWN0aW9uIiwidGl0bGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFVBQVUsR0FBRyxRQUFuQjtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUNiLHNCQURhLEVBRWIsaUNBRmEsQ0FBZDtBQUtBQyxJQUFJLENBQUNDLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDLFVBQVNDLEtBQVQsRUFBZTtBQUMvQ0EsRUFBQUEsS0FBSyxDQUFDQyxTQUFOLENBQ0NDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxVQUFaLEVBQXdCUSxJQUF4QixDQUE2QixVQUFTQyxLQUFULEVBQWU7QUFDM0MsV0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQWFULEtBQWIsQ0FBUDtBQUNBLEdBRkQsQ0FERDtBQUtBLENBTkQ7QUFRQUMsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixVQUF0QixFQUFrQyxVQUFVQyxLQUFWLEVBQWlCO0FBQy9DQSxFQUFBQSxLQUFLLENBQUNDLFNBQU4sQ0FDSUMsTUFBTSxDQUFDSyxJQUFQLEdBQWNILElBQWQsQ0FBbUIsVUFBVUcsSUFBVixFQUFnQjtBQUMvQixXQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUNsQkcsTUFEYyxDQUNQLFVBQVVDLEdBQVYsRUFBZTtBQUNuQixhQUFPQSxHQUFHLENBQUNDLE9BQUosQ0FBWWhCLFVBQVosTUFBNEIsQ0FBbkM7QUFDSCxLQUhjLEVBSWRpQixHQUpjLENBSVYsVUFBVUYsR0FBVixFQUFlO0FBQ2hCLGFBQU9ULE1BQU0sVUFBTixDQUFjUyxHQUFkLENBQVA7QUFDSCxLQU5jLENBQVosQ0FBUDtBQVFILEdBVEQsQ0FESjtBQVlILENBYkQ7QUFlQWIsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixNQUF0QixFQUE4QixVQUFTQyxLQUFULEVBQWU7QUFDekMsTUFBSWMsT0FBTyxHQUFHZCxLQUFLLENBQUNlLElBQU4sQ0FBV0MsSUFBWCxFQUFkO0FBQ0FsQixFQUFBQSxJQUFJLENBQUNtQixZQUFMLENBQWtCQyxnQkFBbEIsQ0FBbUMsdUJBQW5DLEVBQTREO0FBQ3hEQyxJQUFBQSxJQUFJLEVBQUVMLE9BRGtEO0FBRXhETSxJQUFBQSxJQUFJLEVBQUUsc0JBRmtEO0FBR3hEQyxJQUFBQSxPQUFPLEVBQUUsQ0FDTDtBQUFDQyxNQUFBQSxNQUFNLEVBQUUsU0FBVDtBQUFvQkMsTUFBQUEsS0FBSyxFQUFFO0FBQTNCLEtBREs7QUFIK0MsR0FBNUQ7QUFPSCxDQVREIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ0FDSEVfTkFNRSA9ICd2MS4wLjAnO1xuY29uc3QgRklMRVMgPSBbXG5cdCcvdmlld3MvdGVzdC1wd2EuaHRtbCcsXG5cdCcvbW9kdWxlcy9wd2EvZGlzdC9hcHAuYnVuZGxlLmpzJ1xuXVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBmdW5jdGlvbihldmVudCl7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXMub3BlbihDQUNIRV9OQU1FKS50aGVuKGZ1bmN0aW9uKGNhY2hlKXtcblx0XHRcdHJldHVybiBjYWNoZS5hZGRBbGwoRklMRVMpO1xuXHRcdH0pXG5cdClcbn0pXG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC53YWl0VW50aWwoXG4gICAgICAgIGNhY2hlcy5rZXlzKCkudGhlbihmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGtleXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleS5pbmRleE9mKENBQ0hFX05BTUUpICE9PSAwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2gnLCBmdW5jdGlvbihldmVudCl7XG4gICAgdmFyIG1lc3NhZ2UgPSBldmVudC5kYXRhLnRleHQoKTtcbiAgICBzZWxmLnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKCdQdXNoIG1lc3NhZ2UgcmVjZWl2ZWQnLCB7XG4gICAgICAgIGJvZHk6IG1lc3NhZ2UsXG4gICAgICAgIGljb246ICcvaW1nL3B3YS90d19pY29uLnBuZycsXG4gICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgIHthY3Rpb246ICdjb25maXJtJywgdGl0bGU6ICdPayd9LFxuICAgICAgICBdXG4gICAgfSlcbn0pO1xuIl0sImZpbGUiOiIuL3B1YmxpYy9tb2R1bGVzL3B3YS9zZXJ2aWNlX3dvcmtlci5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/modules/pwa/service_worker.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/modules/pwa/service_worker.js"]();
/******/ 	
/******/ })()
;