"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var transactions_service_1 = require("../../shared/transactions/transactions.service");
var RentComponent = /** @class */ (function () {
    function RentComponent(transactionsService) {
        this.transactionsService = transactionsService;
        this.transactions = [];
        this.transactionsNotPaid = [];
        this.paid = false;
        this.notPaid = false;
    }
    RentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionsService.getRent().subscribe(function (data) {
            _this.transactions = data;
            if (_this.transactions.length > 0) {
                _this.paid = true;
            }
            else {
                _this.paid = false;
            }
        }, function () {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
    };
    RentComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    RentComponent = __decorate([
        core_1.Component({
            selector: "gr-rent",
            templateUrl: "./rent.component.html",
            styleUrls: ["./rent.component.css"],
            providers: [transactions_service_1.TransactionsService]
        }),
        __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
    ], RentComponent);
    return RentComponent;
}());
exports.RentComponent = RentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFJbkMsdUZBQXFGO0FBUXJGO0lBT0ksdUJBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBTDVELGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6QixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUUrQyxDQUFDO0lBRWhFLGdDQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQzlDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNwQjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNyQjtRQUNMLENBQUMsRUFBRTtZQUNDLEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLHdDQUF3QzthQUNwRCxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBNUJRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMsMENBQW1CLENBQUM7U0FDbkMsQ0FBQzt5Q0FRMkMsMENBQW1CO09BUG5ELGFBQWEsQ0E2QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNhY3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImdyLXJlbnRcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVudC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3JlbnQuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW1RyYW5zYWN0aW9uc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZW50Q29tcG9uZW50IHtcclxuXHJcbiAgICB0cmFuc2FjdGlvbnMgPSBbXTtcclxuICAgIHRyYW5zYWN0aW9uc05vdFBhaWQgPSBbXTtcclxuICAgIHBhaWQgPSBmYWxzZTtcclxuICAgIG5vdFBhaWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zYWN0aW9uc1NlcnZpY2U6IFRyYW5zYWN0aW9uc1NlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNTZXJ2aWNlLmdldFJlbnQoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBkYXRhO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRyYW5zYWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRyYW5zYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCByZXRyaWV2aW5nIHlvdXIgZGF0YVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufSJdfQ==