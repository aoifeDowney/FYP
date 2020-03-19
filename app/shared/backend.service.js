"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kinvey = require("kinvey-nativescript-sdk");
Kinvey.init({
    appKey: "kid_BJAu9c4iS",
    appSecret: "26535fc520564e36a6c8e4227e37ca18"
});
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isUserLoggedIn = function () {
        return !!Kinvey.User.getActiveUser();
    };
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsZ0RBQWtEO0FBRWxELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDUixNQUFNLEVBQUUsZUFBZTtJQUN2QixTQUFTLEVBQUUsa0NBQWtDO0NBQ2hELENBQUMsQ0FBQztBQUVIO0lBQUE7SUFJQSxDQUFDO0lBSFUsNkJBQWMsR0FBckI7UUFDSSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgS2ludmV5IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xyXG5cclxuS2ludmV5LmluaXQoe1xyXG4gICAgYXBwS2V5OiBcImtpZF9CSkF1OWM0aVNcIixcclxuICAgIGFwcFNlY3JldDogXCIyNjUzNWZjNTIwNTY0ZTM2YTZjOGU0MjI3ZTM3Y2ExOFwiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyBpc1VzZXJMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gISFLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XHJcbiAgICB9XHJcbn0iXX0=