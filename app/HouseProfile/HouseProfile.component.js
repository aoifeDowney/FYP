"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var user_model_1 = require("../shared/user/user.model");
var user_service_1 = require("../shared/user/user.service");
var transactions_service_1 = require("../shared/transactions/transactions.service");
var Kinvey = require("kinvey-nativescript-sdk");
var HouseProfileComponent = /** @class */ (function () {
    function HouseProfileComponent(userService, transactionsService) {
        this.userService = userService;
        this.transactionsService = transactionsService;
        this.users = [];
        this.activeUser = Kinvey.User.getActiveUser();
        this.userData = Kinvey.User.getActiveUser().data;
        this.user = new user_model_1.User();
    }
    HouseProfileComponent.prototype.addHousehold = function () {
        var _this = this;
        var task = {
            userName: this.activeUser.username,
            houseName: this.userData["household"],
            user: true
        };
        this.transactionsService.save(task).then(function (newTask) {
            _this.users.unshift(newTask);
        });
    };
    HouseProfileComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HouseProfileComponent = __decorate([
        core_1.Component({
            selector: "gr-HouseProfile",
            templateUrl: "./HouseProfile.component.html",
            styleUrls: ["./HouseProfile.component.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, transactions_service_1.TransactionsService])
    ], HouseProfileComponent);
    return HouseProfileComponent;
}());
exports.HouseProfileComponent = HouseProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG91c2VQcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhvdXNlUHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBSW5DLHdEQUFpRDtBQUNqRCw0REFBMEQ7QUFDMUQsb0ZBQWtGO0FBRWxGLGdEQUFrRDtBQU9sRDtJQU9JLCtCQUFvQixXQUF3QixFQUFVLG1CQUF3QztRQUExRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFKOUYsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLGFBQVEsR0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztRQUd6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw0Q0FBWSxHQUFaO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksR0FBRztZQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFDbEMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQ3JDLElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUVGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUM3QyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBMUJRLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzlDLENBQUM7eUNBUW1DLDBCQUFXLEVBQStCLDBDQUFtQjtPQVByRixxQkFBcUIsQ0EyQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5cclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImdyLUhvdXNlUHJvZmlsZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9Ib3VzZVByb2ZpbGUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9Ib3VzZVByb2ZpbGUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG91c2VQcm9maWxlQ29tcG9uZW50IHtcclxuXHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgdXNlcnMgPSBbXTtcclxuICAgIGFjdGl2ZVVzZXIgPSBLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XHJcbiAgICB1c2VyRGF0YSA9IOKAi0tpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKS5kYXRhO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHRyYW5zYWN0aW9uc1NlcnZpY2U6IFRyYW5zYWN0aW9uc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEhvdXNlaG9sZCgpIHtcclxuICAgICAgICB2YXIgdGFzayA9IHtcclxuICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMuYWN0aXZlVXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgaG91c2VOYW1lOiB0aGlzLnVzZXJEYXRhW1wiaG91c2Vob2xkXCJdLFxyXG4gICAgICAgICAgICB1c2VyOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNTZXJ2aWNlLnNhdmUodGFzaykudGhlbigobmV3VGFzaykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJzLnVuc2hpZnQobmV3VGFzayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG59Il19