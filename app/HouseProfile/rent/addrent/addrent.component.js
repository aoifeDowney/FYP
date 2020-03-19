"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var common_1 = require("@angular/common");
var dialogs = require("tns-core-modules/ui/dialogs");
var transactions_service_1 = require("../../../shared/transactions/transactions.service");
var Kinvey = require("kinvey-nativescript-sdk");
var AddRentComponent = /** @class */ (function () {
    function AddRentComponent(transactionsService, datePipe) {
        this.transactionsService = transactionsService;
        this.datePipe = datePipe;
        this.now = new Date();
        this.items = [];
        this.activeUser = Kinvey.User.getActiveUser();
        this.userData = Kinvey.User.getActiveUser().data;
    }
    AddRentComponent.prototype.ngOnInit = function () { };
    AddRentComponent.prototype.makePayment = function () {
        var _this = this;
        var task = {
            name: "Rent",
            price: this.itemPriceValue,
            date: this.datePipe.transform(this.now, "yyyy-MM-dd"),
            houseName: this.userData["household"],
            type: "Rent",
            boughtBy: this.activeUser.username,
            bought: true,
            complete: true
        };
        this.transactionsService.save(task).then(function (newTask) {
            _this.items.unshift(newTask);
        });
        this.itemPriceValue = null;
        dialogs.alert({
            title: "Payment Successful!",
            message: "Your rent has been paid for",
            okButtonText: "Okay"
        });
    };
    AddRentComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    AddRentComponent = __decorate([
        core_1.Component({
            selector: "gr-addrent",
            templateUrl: "./addrent.component.html",
            styleUrls: ["./addrent.component.css"],
            providers: [transactions_service_1.TransactionsService]
        }),
        __metadata("design:paramtypes", [transactions_service_1.TransactionsService, common_1.DatePipe])
    ], AddRentComponent);
    return AddRentComponent;
}());
exports.AddRentComponent = AddRentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRyZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMENBQTJDO0FBQzNDLHFEQUF1RDtBQUV2RCwwRkFBd0Y7QUFDeEYsZ0RBQWtEO0FBUWxEO0lBU0ksMEJBQW9CLG1CQUF3QyxFQUFVLFFBQWtCO1FBQXBFLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBUHhGLFFBQUcsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXZCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxlQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxhQUFRLEdBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFOEMsQ0FBQztJQUU1RixtQ0FBUSxHQUFSLGNBQWtCLENBQUM7SUFFbkIsc0NBQVcsR0FBWDtRQUFBLGlCQXVCQztRQXRCRyxJQUFJLElBQUksR0FBRztZQUNQLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLFlBQVksQ0FBQztZQUNwRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFDckMsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBQ2xDLE1BQU0sRUFBRSxJQUFJO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUVGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUM3QyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUUscUJBQXFCO1lBQzVCLE9BQU8sRUFBRSw2QkFBNkI7WUFDdEMsWUFBWSxFQUFFLE1BQU07U0FDdkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUF6Q1EsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLDBDQUFtQixDQUFDO1NBQ25DLENBQUM7eUNBVTJDLDBDQUFtQixFQUFvQixpQkFBUTtPQVQvRSxnQkFBZ0IsQ0EwQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNhY3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIEtpbnZleSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ItYWRkcmVudFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hZGRyZW50LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYWRkcmVudC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbVHJhbnNhY3Rpb25zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZFJlbnRDb21wb25lbnQge1xyXG5cclxuICAgIG5vdzogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgaXRlbXMgPSBbXTtcclxuICAgIGl0ZW1QcmljZVZhbHVlOiBudW1iZXI7XHJcbiAgICBhY3RpdmVVc2VyID0gS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xyXG4gICAgdXNlckRhdGEgPSDigItLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkuZGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zYWN0aW9uc1NlcnZpY2U6IFRyYW5zYWN0aW9uc1NlcnZpY2UsIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgICBtYWtlUGF5bWVudCgpIHtcclxuICAgICAgICB2YXIgdGFzayA9IHtcclxuICAgICAgICAgICAgbmFtZTogXCJSZW50XCIsXHJcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLml0ZW1QcmljZVZhbHVlLFxyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLm5vdyxcInl5eXktTU0tZGRcIiksXHJcbiAgICAgICAgICAgIGhvdXNlTmFtZTogdGhpcy51c2VyRGF0YVtcImhvdXNlaG9sZFwiXSxcclxuICAgICAgICAgICAgdHlwZTogXCJSZW50XCIsXHJcbiAgICAgICAgICAgIGJvdWdodEJ5OiB0aGlzLmFjdGl2ZVVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGJvdWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgY29tcGxldGU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uc1NlcnZpY2Uuc2F2ZSh0YXNrKS50aGVuKChuZXdUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMudW5zaGlmdChuZXdUYXNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtUHJpY2VWYWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJQYXltZW50IFN1Y2Nlc3NmdWwhXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciByZW50IGhhcyBiZWVuIHBhaWQgZm9yXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa2F5XCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn0iXX0=