"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var dialogs = require("tns-core-modules/ui/dialogs");
var Kinvey = require("kinvey-nativescript-sdk");
var transactions_service_1 = require("../../shared/transactions/transactions.service");
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(transactionsService) {
        this.transactionsService = transactionsService;
        this.activeUser = Kinvey.User.getActiveUser();
        this.userData = Kinvey.User.getActiveUser().data;
        this.tasks = [];
        this.textFieldValue = "";
        this.icons = [];
        this.icon1 = "~/images/avatars/avatars/png/001-girl.png";
        this.icon2 = "~/images/avatars/avatars/png/015-girl-14.png";
        this.icon3 = "~/images/avatars/avatars/png/003-girl-2.png";
        this.icon4 = "~/images/avatars/avatars/png/004-girl-3.png";
        this.icon5 = "~/images/avatars/avatars/png/005-girl-4.png";
        this.icon6 = "~/images/avatars/avatars/png/034-girl-21.png";
        this.icon7 = "~/images/avatars/avatars/png/007-girl-6.png";
        this.icon8 = "~/images/avatars/avatars/png/008-girl-7.png";
        this.icon9 = "~/images/avatars/avatars/png/043-man-10.png";
        this.icon10 = "~/images/avatars/avatars/png/022-man-1.png";
        this.icon11 = "~/images/avatars/avatars/png/035-boy-5.png";
        this.icon12 = "~/images/avatars/avatars/png/024-boy-1.png";
        this.icon13 = "~/images/avatars/avatars/png/044-boy-8.png";
        this.icon14 = "~/images/avatars/avatars/png/039-man-7.png";
        this.icon15 = "~/images/avatars/avatars/png/041-man-8.png";
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionsService.getIcon().subscribe(function (data) {
            _this.icons.push(data);
            for (var i = 0; i < _this.icons.length; i++) {
                _this.id = _this.icons[0][i]["_id"];
                console.log("Icon: " + _this.id);
            }
        }, function () {
            console.log("Unable to retrive list of transactions");
        });
    };
    EditProfileComponent.prototype.changeIcon = function (icon) {
        var _this = this;
        var task = {
            _id: this.id,
            userName: this.activeUser.username,
            user: true,
            houseName: this.userData["household"],
            icon: icon
        };
        this.transactionsService.save(task).then(function (newTask) {
            _this.tasks.unshift(newTask);
        });
        dialogs.alert({
            title: "Saved!",
            message: "Your profile icon has been set",
            okButtonText: "Okay"
        });
    };
    EditProfileComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    EditProfileComponent = __decorate([
        core_1.Component({
            selector: "gr-editprofile",
            templateUrl: "./editprofile.component.html",
            styleUrls: ["./editprofile.component.css"],
            providers: [transactions_service_1.TransactionsService]
        }),
        __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdHByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWRpdHByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELGlDQUFtQztBQUVuQyxxREFBdUQ7QUFDdkQsZ0RBQWtEO0FBRWxELHVGQUFxRjtBQVNyRjtJQTBCRSw4QkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUF4QjVELGVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLGFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztRQUU1QyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdYLFVBQUssR0FBRywyQ0FBMkMsQ0FBQztRQUNwRCxVQUFLLEdBQUcsOENBQThDLENBQUM7UUFDdkQsVUFBSyxHQUFHLDZDQUE2QyxDQUFDO1FBQ3RELFVBQUssR0FBRyw2Q0FBNkMsQ0FBQztRQUN0RCxVQUFLLEdBQUcsNkNBQTZDLENBQUM7UUFDdEQsVUFBSyxHQUFHLDhDQUE4QyxDQUFDO1FBQ3ZELFVBQUssR0FBRyw2Q0FBNkMsQ0FBQTtRQUNyRCxVQUFLLEdBQUcsNkNBQTZDLENBQUM7UUFDdEQsVUFBSyxHQUFHLDZDQUE2QyxDQUFDO1FBQ3RELFdBQU0sR0FBRyw0Q0FBNEMsQ0FBQztRQUN0RCxXQUFNLEdBQUcsNENBQTRDLENBQUM7UUFDdEQsV0FBTSxHQUFHLDRDQUE0QyxDQUFDO1FBQ3RELFdBQU0sR0FBRyw0Q0FBNEMsQ0FBQztRQUN0RCxXQUFNLEdBQUcsNENBQTRDLENBQUM7UUFDdEQsV0FBTSxHQUFHLDRDQUE0QyxDQUFDO0lBRVUsQ0FBQztJQUVqRSx1Q0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNoRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLEtBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2pDO1FBRUgsQ0FBQyxFQUFFO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxJQUFZO1FBQXZCLGlCQWlCQztRQWhCQyxJQUFJLElBQUksR0FBRztZQUNULEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFDbEMsSUFBSSxFQUFFLElBQUk7WUFDVixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFDckMsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO1FBRUYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO1lBQy9DLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNaLEtBQUssRUFBRSxRQUFRO1lBQ2YsT0FBTyxFQUFFLGdDQUFnQztZQUN6QyxZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZ0RBQWlCLEdBQWpCO1FBQ0UsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQS9EVSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztZQUMxQyxTQUFTLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztTQUNqQyxDQUFDO3lDQTRCeUMsMENBQW1CO09BMUJqRCxvQkFBb0IsQ0FnRWhDO0lBQUQsMkJBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIEtpbnZleSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcclxuXHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZ3ItZWRpdHByb2ZpbGVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2VkaXRwcm9maWxlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2VkaXRwcm9maWxlLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgcHJvdmlkZXJzOiBbVHJhbnNhY3Rpb25zU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGFjdGl2ZVVzZXIgPSBLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XHJcbiAgdXNlckRhdGEgPSBLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkuZGF0YTtcclxuXHJcbiAgdGFza3MgPSBbXTtcclxuICB0ZXh0RmllbGRWYWx1ZSA9IFwiXCI7XHJcbiAgaWNvbnMgPSBbXTtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBpY29uMSA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMDEtZ2lybC5wbmdcIjtcclxuICBpY29uMiA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMTUtZ2lybC0xNC5wbmdcIjtcclxuICBpY29uMyA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMDMtZ2lybC0yLnBuZ1wiO1xyXG4gIGljb240ID0gXCJ+L2ltYWdlcy9hdmF0YXJzL2F2YXRhcnMvcG5nLzAwNC1naXJsLTMucG5nXCI7XHJcbiAgaWNvbjUgPSBcIn4vaW1hZ2VzL2F2YXRhcnMvYXZhdGFycy9wbmcvMDA1LWdpcmwtNC5wbmdcIjtcclxuICBpY29uNiA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMzQtZ2lybC0yMS5wbmdcIjtcclxuICBpY29uNyA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMDctZ2lybC02LnBuZ1wiXHJcbiAgaWNvbjggPSBcIn4vaW1hZ2VzL2F2YXRhcnMvYXZhdGFycy9wbmcvMDA4LWdpcmwtNy5wbmdcIjtcclxuICBpY29uOSA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wNDMtbWFuLTEwLnBuZ1wiO1xyXG4gIGljb24xMCA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMjItbWFuLTEucG5nXCI7XHJcbiAgaWNvbjExID0gXCJ+L2ltYWdlcy9hdmF0YXJzL2F2YXRhcnMvcG5nLzAzNS1ib3ktNS5wbmdcIjtcclxuICBpY29uMTIgPSBcIn4vaW1hZ2VzL2F2YXRhcnMvYXZhdGFycy9wbmcvMDI0LWJveS0xLnBuZ1wiO1xyXG4gIGljb24xMyA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wNDQtYm95LTgucG5nXCI7XHJcbiAgaWNvbjE0ID0gXCJ+L2ltYWdlcy9hdmF0YXJzL2F2YXRhcnMvcG5nLzAzOS1tYW4tNy5wbmdcIjtcclxuICBpY29uMTUgPSBcIn4vaW1hZ2VzL2F2YXRhcnMvYXZhdGFycy9wbmcvMDQxLW1hbi04LnBuZ1wiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zYWN0aW9uc1NlcnZpY2U6IFRyYW5zYWN0aW9uc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5nZXRJY29uKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuaWNvbnMucHVzaChkYXRhKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmljb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWNvbnNbMF1baV1bXCJfaWRcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJY29uOiBcIiArIHRoaXMuaWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byByZXRyaXZlIGxpc3Qgb2YgdHJhbnNhY3Rpb25zXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VJY29uKGljb246IHN0cmluZykge1xyXG4gICAgdmFyIHRhc2sgPSB7XHJcbiAgICAgIF9pZDogdGhpcy5pZCxcclxuICAgICAgdXNlck5hbWU6IHRoaXMuYWN0aXZlVXNlci51c2VybmFtZSxcclxuICAgICAgdXNlcjogdHJ1ZSxcclxuICAgICAgaG91c2VOYW1lOiB0aGlzLnVzZXJEYXRhW1wiaG91c2Vob2xkXCJdLFxyXG4gICAgICBpY29uOiBpY29uXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5zYXZlKHRhc2spLnRoZW4oKG5ld1Rhc2spID0+IHtcclxuICAgICAgdGhpcy50YXNrcy51bnNoaWZ0KG5ld1Rhc2spO1xyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6IFwiU2F2ZWQhXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiWW91ciBwcm9maWxlIGljb24gaGFzIGJlZW4gc2V0XCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPa2F5XCJcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxufSJdfQ==