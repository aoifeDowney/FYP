"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var core_2 = require("@angular/core");
var dialogs = require("tns-core-modules/ui/dialogs");
var transactions_service_1 = require("../../shared/transactions/transactions.service");
var Kinvey = require("kinvey-nativescript-sdk");
var household_module_1 = require("../shared/household.module");
var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent(transactionsService, household) {
        this.transactionsService = transactionsService;
        this.household = household;
        this.activeUser = Kinvey.User.getActiveUser();
        this.userData = Kinvey.User.getActiveUser().data;
        this.transactions = [];
        this.houseMembers = [];
        this.itemDetail = false;
        this.users = [];
        this.names = [];
        this.itemDate = "";
        this.items = [];
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
    ShoppingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionsService.getHouseShop().subscribe(function (data) {
            _this.transactions = data;
        }, function () {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
        this.transactionsService.getHouseShopPaid().subscribe(function (data) {
            _this.items = data;
        }, function () {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
        this.transactionsService.getUsersIcon().subscribe(function (data) {
            _this.icons = data;
        }, function () {
            console.log("Unable to retrive list of transactions");
        });
        this.transactionsService.getHouseMembers().subscribe(function (data) {
            _this.users.push(data);
            _this.houseMember = _this.users[0].length + 1;
        }, function () {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
    };
    ShoppingComponent.prototype.getItemDetail = function (name, id, boughtBy, price, date) {
        var _this = this;
        this.itemName = name;
        this.itemID = id;
        this.boughtBy = boughtBy;
        this.price = price;
        this.itemDate = date;
        this.dividedPrice = this.price / this.houseMember;
        this.itemDetail = true;
        this.transactionsService.getHouseShopPaidName(this.itemName).subscribe(function (data) {
            _this.items = data;
        }, function () {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
    };
    ShoppingComponent.prototype.makePayment = function () {
        var _this = this;
        var task = {
            _id: this.itemID,
            name: this.itemName,
            date: this.itemDate,
            price: this.price / this.houseMember,
            boughtBy: this.activeUser.username,
            boughtDate: new Date(),
            type: "House Shop",
            houseName: this.userData["household"],
            bought: true,
            complete: true
        };
        this.transactionsService.save(task).then(function (newTask) {
            _this.items.unshift(newTask);
        });
        dialogs.alert({
            title: "Payment Successful!",
            message: "This item has been paid for",
            okButtonText: "Okay"
        });
    };
    ShoppingComponent.prototype.back = function () {
        this.itemDetail = false;
    };
    ShoppingComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ShoppingComponent = __decorate([
        core_1.Component({
            selector: "gr-shopping",
            templateUrl: "./shopping.component.html",
            styleUrls: ["./shopping.component.css"],
            providers: [transactions_service_1.TransactionsService, household_module_1.Household]
        }),
        core_2.Injectable(),
        __metadata("design:paramtypes", [transactions_service_1.TransactionsService, household_module_1.Household])
    ], ShoppingComponent);
    return ShoppingComponent;
}());
exports.ShoppingComponent = ShoppingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcHBpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQUVuQyxzQ0FBMkM7QUFDM0MscURBQXVEO0FBRXZELHVGQUFxRjtBQUNyRixnREFBa0Q7QUFFbEQsK0RBQXVEO0FBVXZEO0lBdUNJLDJCQUFvQixtQkFBd0MsRUFBVSxTQUFvQjtRQUF0RSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXJDMUYsZUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsYUFBUSxHQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBTTdDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxFQUFFLENBQUM7UUFJWCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxVQUFLLEdBQUcsMkNBQTJDLENBQUM7UUFDcEQsVUFBSyxHQUFHLDhDQUE4QyxDQUFDO1FBQ3ZELFVBQUssR0FBRyw2Q0FBNkMsQ0FBQztRQUN0RCxVQUFLLEdBQUcsNkNBQTZDLENBQUM7UUFDdEQsVUFBSyxHQUFHLDZDQUE2QyxDQUFDO1FBQ3RELFVBQUssR0FBRyw4Q0FBOEMsQ0FBQztRQUN2RCxVQUFLLEdBQUcsNkNBQTZDLENBQUE7UUFDckQsVUFBSyxHQUFHLDZDQUE2QyxDQUFDO1FBQ3RELFVBQUssR0FBRyw2Q0FBNkMsQ0FBQztRQUN0RCxXQUFNLEdBQUcsNENBQTRDLENBQUM7UUFDdEQsV0FBTSxHQUFHLDRDQUE0QyxDQUFDO1FBQ3RELFdBQU0sR0FBRyw0Q0FBNEMsQ0FBQztRQUN0RCxXQUFNLEdBQUcsNENBQTRDLENBQUM7UUFDdEQsV0FBTSxHQUFHLDRDQUE0QyxDQUFDO1FBQ3RELFdBQU0sR0FBRyw0Q0FBNEMsQ0FBQztJQUd1QyxDQUFDO0lBRTlGLG9DQUFRLEdBQVI7UUFBQSxpQkFtQ0M7UUFsQ0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDbkQsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxFQUFFO1lBQ0MsS0FBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxjQUFjO2dCQUNyQixPQUFPLEVBQUUsd0NBQXdDO2FBQ3BELENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUN2RCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLEVBQUU7WUFDQyxLQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE9BQU8sRUFBRSx3Q0FBd0M7YUFDcEQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNuRCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUV0QixDQUFDLEVBQUU7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUN0RCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUU7WUFDQyxLQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE9BQU8sRUFBRSx3Q0FBd0M7YUFDcEQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLElBQVksRUFBRSxFQUFVLEVBQUUsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsSUFBWTtRQUFyRixpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3hFLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUMsRUFBRTtZQUNDLEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLHdDQUF3QzthQUNwRCxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQUEsaUJBc0JDO1FBckJHLElBQUksSUFBSSxHQUFHO1lBQ1AsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDcEMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUNsQyxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQ3JDLE1BQU0sRUFBRSxJQUFJO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUVGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUM3QyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUUscUJBQXFCO1lBQzVCLE9BQU8sRUFBRSw2QkFBNkI7WUFDdEMsWUFBWSxFQUFFLE1BQU07U0FDdkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBR0QsNkNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWpJUSxpQkFBaUI7UUFSN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsMENBQW1CLEVBQUUsNEJBQVMsQ0FBQztTQUM5QyxDQUFDO1FBRUQsaUJBQVUsRUFBRTt5Q0F3Q2dDLDBDQUFtQixFQUFxQiw0QkFBUztPQXZDakYsaUJBQWlCLENBa0k3QjtJQUFELHdCQUFDO0NBQUEsQUFsSUQsSUFrSUM7QUFsSVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcblxyXG5pbXBvcnQgeyBIb3VzZWhvbGQgfSBmcm9tIFwiLi4vc2hhcmVkL2hvdXNlaG9sZC5tb2R1bGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3Itc2hvcHBpbmdcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2hvcHBpbmcuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zaG9wcGluZy5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbVHJhbnNhY3Rpb25zU2VydmljZSwgSG91c2Vob2xkXVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgYWN0aXZlVXNlciA9IEtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKTtcclxuICAgIHVzZXJEYXRhID0g4oCLS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpLmRhdGE7XHJcbiAgICBpdGVtTmFtZTogc3RyaW5nO1xyXG4gICAgYm91Z2h0Qnk6IHN0cmluZztcclxuICAgIGRpdmlkZWRQcmljZTogbnVtYmVyO1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxuICAgIGhvdXNlTWVtYmVyOiBudW1iZXI7XHJcbiAgICB0cmFuc2FjdGlvbnMgPSBbXTtcclxuICAgIGhvdXNlTWVtYmVycyA9IFtdO1xyXG4gICAgaXRlbURldGFpbCA9IGZhbHNlO1xyXG4gICAgdXNlcnMgPSBbXTtcclxuICAgIG5hbWVzID0gW107XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpdGVtSUQ6IHN0cmluZztcclxuICAgIHN1Z2dlc3RlZEJ5OiBzdHJpbmc7XHJcbiAgICBpdGVtRGF0ZSA9IFwiXCI7XHJcbiAgICBpdGVtcyA9IFtdO1xyXG5cclxuICAgIGljb25zID0gW107XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBpY29uMSA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMDEtZ2lybC5wbmdcIjtcclxuICAgIGljb24yID0gXCJ+L2ltYWdlcy9hdmF0YXJzL2F2YXRhcnMvcG5nLzAxNS1naXJsLTE0LnBuZ1wiO1xyXG4gICAgaWNvbjMgPSBcIn4vaW1hZ2VzL2F2YXRhcnMvYXZhdGFycy9wbmcvMDAzLWdpcmwtMi5wbmdcIjtcclxuICAgIGljb240ID0gXCJ+L2ltYWdlcy9hdmF0YXJzL2F2YXRhcnMvcG5nLzAwNC1naXJsLTMucG5nXCI7XHJcbiAgICBpY29uNSA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMDUtZ2lybC00LnBuZ1wiO1xyXG4gICAgaWNvbjYgPSBcIn4vaW1hZ2VzL2F2YXRhcnMvYXZhdGFycy9wbmcvMDM0LWdpcmwtMjEucG5nXCI7XHJcbiAgICBpY29uNyA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMDctZ2lybC02LnBuZ1wiXHJcbiAgICBpY29uOCA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMDgtZ2lybC03LnBuZ1wiO1xyXG4gICAgaWNvbjkgPSBcIn4vaW1hZ2VzL2F2YXRhcnMvYXZhdGFycy9wbmcvMDQzLW1hbi0xMC5wbmdcIjtcclxuICAgIGljb24xMCA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMjItbWFuLTEucG5nXCI7XHJcbiAgICBpY29uMTEgPSBcIn4vaW1hZ2VzL2F2YXRhcnMvYXZhdGFycy9wbmcvMDM1LWJveS01LnBuZ1wiO1xyXG4gICAgaWNvbjEyID0gXCJ+L2ltYWdlcy9hdmF0YXJzL2F2YXRhcnMvcG5nLzAyNC1ib3ktMS5wbmdcIjtcclxuICAgIGljb24xMyA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wNDQtYm95LTgucG5nXCI7XHJcbiAgICBpY29uMTQgPSBcIn4vaW1hZ2VzL2F2YXRhcnMvYXZhdGFycy9wbmcvMDM5LW1hbi03LnBuZ1wiO1xyXG4gICAgaWNvbjE1ID0gXCJ+L2ltYWdlcy9hdmF0YXJzL2F2YXRhcnMvcG5nLzA0MS1tYW4tOC5wbmdcIjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2FjdGlvbnNTZXJ2aWNlOiBUcmFuc2FjdGlvbnNTZXJ2aWNlLCBwcml2YXRlIGhvdXNlaG9sZDogSG91c2Vob2xkKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5nZXRIb3VzZVNob3AoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBkYXRhO1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVHJhbnNhY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHJldHJpZXZpbmcgeW91ciBkYXRhXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5nZXRIb3VzZVNob3BQYWlkKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBkYXRhO1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVHJhbnNhY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHJldHJpZXZpbmcgeW91ciBkYXRhXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5nZXRVc2Vyc0ljb24oKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pY29ucyA9IGRhdGE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gcmV0cml2ZSBsaXN0IG9mIHRyYW5zYWN0aW9uc1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNTZXJ2aWNlLmdldEhvdXNlTWVtYmVycygpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMuaG91c2VNZW1iZXIgPSB0aGlzLnVzZXJzWzBdLmxlbmd0aCArIDE7XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUcmFuc2FjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgcmV0cmlldmluZyB5b3VyIGRhdGFcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtRGV0YWlsKG5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgYm91Z2h0Qnk6IHN0cmluZywgcHJpY2U6IG51bWJlciwgZGF0ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pdGVtSUQgPSBpZDtcclxuICAgICAgICB0aGlzLmJvdWdodEJ5ID0gYm91Z2h0Qnk7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgICAgIHRoaXMuaXRlbURhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuZGl2aWRlZFByaWNlID0gdGhpcy5wcmljZSAvIHRoaXMuaG91c2VNZW1iZXI7XHJcbiAgICAgICAgdGhpcy5pdGVtRGV0YWlsID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNTZXJ2aWNlLmdldEhvdXNlU2hvcFBhaWROYW1lKHRoaXMuaXRlbU5hbWUpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gZGF0YTtcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRyYW5zYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCByZXRyaWV2aW5nIHlvdXIgZGF0YVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VQYXltZW50KCkge1xyXG4gICAgICAgIHZhciB0YXNrID0ge1xyXG4gICAgICAgICAgICBfaWQ6IHRoaXMuaXRlbUlELFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLml0ZW1OYW1lLFxyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLml0ZW1EYXRlLFxyXG4gICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSAvIHRoaXMuaG91c2VNZW1iZXIsXHJcbiAgICAgICAgICAgIGJvdWdodEJ5OiB0aGlzLmFjdGl2ZVVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGJvdWdodERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSG91c2UgU2hvcFwiLFxyXG4gICAgICAgICAgICBob3VzZU5hbWU6IHRoaXMudXNlckRhdGFbXCJob3VzZWhvbGRcIl0sXHJcbiAgICAgICAgICAgIGJvdWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgY29tcGxldGU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uc1NlcnZpY2Uuc2F2ZSh0YXNrKS50aGVuKChuZXdUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMudW5zaGlmdChuZXdUYXNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiUGF5bWVudCBTdWNjZXNzZnVsIVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoaXMgaXRlbSBoYXMgYmVlbiBwYWlkIGZvclwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2theVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICB0aGlzLml0ZW1EZXRhaWwgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG59Il19