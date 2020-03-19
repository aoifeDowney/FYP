"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var dialogs = require("tns-core-modules/ui/dialogs");
var Kinvey = require("kinvey-nativescript-sdk");
var transactions_service_1 = require("../../../shared/transactions/transactions.service");
var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(transactionsService) {
        this.transactionsService = transactionsService;
        this.nameValue = "";
        this.items = [];
        this.activeUser = Kinvey.User.getActiveUser();
        this.userData = Kinvey.User.getActiveUser().data;
    }
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent.prototype.suggestItem = function () {
        var _this = this;
        var task = {
            name: this.nameValue,
            type: "House Shop",
            suggestedBy: this.activeUser.username,
            houseName: this.userData["household"],
            show: true,
            bought: false,
            complete: false
        };
        this.transactionsService.save(task).then(function (newTask) {
            _this.items.unshift(newTask);
        });
        this.nameValue = "";
        dialogs.alert({
            title: "Saved!",
            message: "Your suggestion has been added to the list",
            okButtonText: "Okay"
        });
    };
    AddItemComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    AddItemComponent = __decorate([
        core_1.Component({
            selector: "gr-addItem",
            templateUrl: "./addItem.component.html",
            styleUrls: ["./addItem.component.css"],
            providers: [transactions_service_1.TransactionsService]
        }),
        __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
    ], AddItemComponent);
    return AddItemComponent;
}());
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkSXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRJdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMscURBQXVEO0FBQ3ZELGdEQUFrRDtBQUVsRCwwRkFBd0Y7QUFReEY7SUFPSSwwQkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFMNUQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxlQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxhQUFRLEdBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFbUIsQ0FBQztJQUVqRSxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFBQSxpQkFxQkM7UUFwQkcsSUFBSSxJQUFJLEdBQUc7WUFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDcEIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFDckMsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsS0FBSztZQUNiLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUM7UUFFRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDN0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVwQixPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLFFBQVE7WUFDZixPQUFPLEVBQUUsNENBQTRDO1lBQ3JELFlBQVksRUFBRSxNQUFNO1NBQ3ZCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBdENRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxTQUFTLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztTQUNuQyxDQUFDO3lDQVEyQywwQ0FBbUI7T0FQbkQsZ0JBQWdCLENBdUM1QjtJQUFELHVCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIEtpbnZleSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcclxuXHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJnci1hZGRJdGVtXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FkZEl0ZW0uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hZGRJdGVtLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtUcmFuc2FjdGlvbnNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkSXRlbUNvbXBvbmVudCB7XHJcblxyXG4gICAgbmFtZVZhbHVlID0gXCJcIjtcclxuICAgIGl0ZW1zID0gW107XHJcbiAgICBhY3RpdmVVc2VyID0gS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xyXG4gICAgdXNlckRhdGEgPSDigItLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkuZGF0YTsgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2FjdGlvbnNTZXJ2aWNlOiBUcmFuc2FjdGlvbnNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBzdWdnZXN0SXRlbSgpIHtcclxuICAgICAgICB2YXIgdGFzayA9IHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lVmFsdWUsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSG91c2UgU2hvcFwiLFxyXG4gICAgICAgICAgICBzdWdnZXN0ZWRCeTogdGhpcy5hY3RpdmVVc2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBob3VzZU5hbWU6IHRoaXMudXNlckRhdGFbXCJob3VzZWhvbGRcIl0sXHJcbiAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIGJvdWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5zYXZlKHRhc2spLnRoZW4oKG5ld1Rhc2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy51bnNoaWZ0KG5ld1Rhc2spO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5uYW1lVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU2F2ZWQhXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBzdWdnZXN0aW9uIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBsaXN0XCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa2F5XCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn0iXX0=