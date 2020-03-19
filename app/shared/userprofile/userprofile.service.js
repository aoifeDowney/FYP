"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Kinvey = require("kinvey-nativescript-sdk");
var UserProfileSerive = /** @class */ (function () {
    function UserProfileSerive() {
        this.dataStore = Kinvey.DataStore.collection("UserProfile");
    }
    UserProfileSerive.prototype.get = function () {
        var query = new Kinvey.Query();
        // Sort by descending “entity created time” to put new items on top.
        query.descending("_kmd.ect");
        return this.dataStore.find(query);
    };
    UserProfileSerive.prototype.save = function (task) {
        return this.dataStore.save(task);
    };
    UserProfileSerive.prototype.handleErrors = function (error) {
        console.error(error.message);
        return Promise.reject(error.message);
    };
    UserProfileSerive = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UserProfileSerive);
    return UserProfileSerive;
}());
exports.UserProfileSerive = UserProfileSerive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnByb2ZpbGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJwcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsZ0RBQWtEO0FBR2xEO0lBSUk7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCwrQkFBRyxHQUFIO1FBQ0ksSUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsb0VBQW9FO1FBQ3BFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsZ0NBQUksR0FBSixVQUFLLElBQUk7UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBOEI7UUFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBdEJRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQXVCN0I7SUFBRCx3QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZVNlcml2ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhU3RvcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oXCJVc2VyUHJvZmlsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgS2ludmV5LlF1ZXJ5KCk7XHJcbiAgICAgICAgLy8gU29ydCBieSBkZXNjZW5kaW5nIOKAnGVudGl0eSBjcmVhdGVkIHRpbWXigJ0gdG8gcHV0IG5ldyBpdGVtcyBvbiB0b3AuXHJcbiAgICAgICAgcXVlcnkuZGVzY2VuZGluZyhcIl9rbWQuZWN0XCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTdG9yZS5maW5kKHF1ZXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKHRhc2spIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU3RvcmUuc2F2ZSh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IEtpbnZleS5FcnJvcnMuQmFzZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbn0iXX0=