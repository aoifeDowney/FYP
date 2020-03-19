"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var transactions_service_1 = require("../../shared/transactions/transactions.service");
var UtilityBillComponent = /** @class */ (function () {
    function UtilityBillComponent(transactionsService) {
        this.transactionsService = transactionsService;
        this.transactions = [];
        this.transactionsNotPaid = [];
        this.paid = false;
        this.notPaid = false;
    }
    UtilityBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionsService.getUtilityBill().subscribe(function (data) {
            _this.transactions = data;
            if (_this.transactions.length > 0) {
                _this.paid = true;
            }
        }, function () {
            console.log("Unable to retrive list of transactions");
        });
    };
    UtilityBillComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    UtilityBillComponent = __decorate([
        core_1.Component({
            selector: "gr-utilityBill",
            templateUrl: "./utilityBill.component.html",
            styleUrls: ["./utilityBill.component.css"],
            providers: [transactions_service_1.TransactionsService]
        }),
        __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
    ], UtilityBillComponent);
    return UtilityBillComponent;
}());
exports.UtilityBillComponent = UtilityBillComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eUJpbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbGl0eUJpbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQUduQyx1RkFBcUY7QUFRckY7SUFPSSw4QkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFMNUQsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRStDLENBQUM7SUFFaEUsdUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDckQsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQyxFQUFFO1lBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdEQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUF2QlEsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7WUFDMUMsU0FBUyxFQUFFLENBQUMsMENBQW1CLENBQUM7U0FDbkMsQ0FBQzt5Q0FRMkMsMENBQW1CO09BUG5ELG9CQUFvQixDQXdCaEM7SUFBRCwyQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ItdXRpbGl0eUJpbGxcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdXRpbGl0eUJpbGwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi91dGlsaXR5QmlsbC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbVHJhbnNhY3Rpb25zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdHlCaWxsQ29tcG9uZW50IHtcclxuXHJcbiAgICB0cmFuc2FjdGlvbnMgPSBbXTtcclxuICAgIHRyYW5zYWN0aW9uc05vdFBhaWQgPSBbXTtcclxuICAgIHBhaWQgPSBmYWxzZTtcclxuICAgIG5vdFBhaWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zYWN0aW9uc1NlcnZpY2U6IFRyYW5zYWN0aW9uc1NlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNTZXJ2aWNlLmdldFV0aWxpdHlCaWxsKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gZGF0YTtcclxuICAgICAgICAgICAgaWYodGhpcy50cmFuc2FjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gcmV0cml2ZSBsaXN0IG9mIHRyYW5zYWN0aW9uc1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn0iXX0=