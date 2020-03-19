"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var common_1 = require("@angular/common");
var dialogs = require("tns-core-modules/ui/dialogs");
var Kinvey = require("kinvey-nativescript-sdk");
var transactions_service_1 = require("../../../shared/transactions/transactions.service");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(transactionsService, datePipe) {
        this.transactionsService = transactionsService;
        this.datePipe = datePipe;
        this.now = new Date();
        this.transactions = [];
        this.date = [];
        this.dueDate = false;
        this.activeUser = Kinvey.User.getActiveUser();
        this.userData = Kinvey.User.getActiveUser().data;
        this.houseMembers = [];
        this.itemDetail = false;
        this.users = [];
        this.names = [];
        this.itemDate = "";
        this.items = [];
        this.itemDateValue = "";
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionsService.getAllUtilityBills().subscribe(function (data) {
            _this.transactions = data;
        }, function () {
            console.log("Unable to retrive list of transactions");
        });
        this.transactionsService.getUtilityBillDue().subscribe(function (data) {
            _this.date = data;
            if (_this.date.length > 0) {
                _this.sendAlert();
            }
        }, function () {
            console.log("Unable to retrive list of transactions");
        });
        this.transactionsService.getHouseMembers().subscribe(function (data) {
            _this.users.push(data);
            _this.houseMember = _this.users[0].length + 1;
        }, function () {
            console.log("Unable to retrive list of transactions");
        });
    };
    DetailComponent.prototype.sendAlert = function () {
        console.log("Due today!");
        return this.billDue = true;
    };
    DetailComponent.prototype.alert = function () {
        dialogs.alert({
            title: "Bill Due Today",
            message: "A bill is due today! Please pay the bill which is due.",
            okButtonText: "Okay"
        });
    };
    DetailComponent.prototype.getItemDetail = function (name, id, boughtBy, price, date) {
        this.itemName = name;
        this.itemID = id;
        this.boughtBy = boughtBy;
        this.price = price;
        this.itemDate = date;
        this.dividedPrice = this.price / this.houseMember;
        this.itemDetail = true;
    };
    DetailComponent.prototype.makePayment = function () {
        var _this = this;
        var task = {
            _id: this.itemID,
            name: this.itemName,
            date: new Date(),
            price: this.price / this.houseMember,
            boughtBy: this.activeUser.username,
            type: "Utility Bill",
            houseName: this.userData["household"],
            bought: true,
            complete: true
        };
        this.transactionsService.save(task).then(function (newTask) {
            _this.items.unshift(newTask);
        });
        dialogs.alert({
            title: "Payment Successful!",
            message: "This bill has been paid for",
            okButtonText: "Okay"
        });
    };
    DetailComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: "gr-detail",
            templateUrl: "./detail.component.html",
            styleUrls: ["./detail.component.css"],
            providers: [transactions_service_1.TransactionsService]
        }),
        __metadata("design:paramtypes", [transactions_service_1.TransactionsService, common_1.DatePipe])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsaUNBQW1DO0FBRW5DLDBDQUEyQztBQUMzQyxxREFBdUQ7QUFDdkQsZ0RBQWtEO0FBRWxELDBGQUF3RjtBQVF4RjtJQTBCSSx5QkFBb0IsbUJBQXdDLEVBQVUsUUFBa0I7UUFBcEUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUF4QnhGLFFBQUcsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXZCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLGFBQVEsR0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztRQU03QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBSVgsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUV3RSxDQUFDO0lBRTVGLGtDQUFRLEdBQVI7UUFBQSxpQkFzQkM7UUFyQkcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUN6RCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDLEVBQUU7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFDMUQs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SSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBckdRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsU0FBUyxFQUFFLENBQUMsMENBQW1CLENBQUM7U0FDbkMsQ0FBQzt5Q0EyQjJDLDBDQUFtQixFQUFvQixpQkFBUTtPQTFCL0UsZUFBZSxDQXNHM0I7SUFBRCxzQkFBQztDQUFBLEFBdEdELElBc0dDO0FBdEdZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIEtpbnZleSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcclxuXHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJnci1kZXRhaWxcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vZGV0YWlsLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtUcmFuc2FjdGlvbnNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsQ29tcG9uZW50IHtcclxuXHJcbiAgICBub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIHRyYW5zYWN0aW9ucyA9IFtdO1xyXG4gICAgZGF0ZSA9IFtdO1xyXG4gICAgZHVlRGF0ZSA9IGZhbHNlO1xyXG4gICAgYmlsbER1ZTogYm9vbGVhbjtcclxuICAgIGFjdGl2ZVVzZXIgPSBLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XHJcbiAgICB1c2VyRGF0YSA9IOKAi0tpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKS5kYXRhO1xyXG4gICAgaXRlbU5hbWU6IHN0cmluZztcclxuICAgIGJvdWdodEJ5OiBzdHJpbmc7XHJcbiAgICBkaXZpZGVkUHJpY2U6IG51bWJlcjtcclxuICAgIHByaWNlOiBudW1iZXI7XHJcbiAgICBob3VzZU1lbWJlcjogbnVtYmVyO1xyXG4gICAgaG91c2VNZW1iZXJzID0gW107XHJcbiAgICBpdGVtRGV0YWlsID0gZmFsc2U7XHJcbiAgICB1c2VycyA9IFtdO1xyXG4gICAgbmFtZXMgPSBbXTtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGl0ZW1JRDogc3RyaW5nO1xyXG4gICAgc3VnZ2VzdGVkQnk6IHN0cmluZztcclxuICAgIGl0ZW1EYXRlID0gXCJcIjtcclxuICAgIGl0ZW1zID0gW107XHJcbiAgICBpdGVtRGF0ZVZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zYWN0aW9uc1NlcnZpY2U6IFRyYW5zYWN0aW9uc1NlcnZpY2UsIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5nZXRBbGxVdGlsaXR5QmlsbHMoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBkYXRhO1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gcmV0cml2ZSBsaXN0IG9mIHRyYW5zYWN0aW9uc1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNTZXJ2aWNlLmdldFV0aWxpdHlCaWxsRHVlKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuc2VuZEFsZXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIHJldHJpdmUgbGlzdCBvZiB0cmFuc2FjdGlvbnNcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5nZXRIb3VzZU1lbWJlcnMoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2Vycy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmhvdXNlTWVtYmVyID0gdGhpcy51c2Vyc1swXS5sZW5ndGggKyAxO1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gcmV0cml2ZSBsaXN0IG9mIHRyYW5zYWN0aW9uc1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQWxlcnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRHVlIHRvZGF5IVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmlsbER1ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQoKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkJpbGwgRHVlIFRvZGF5XCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBiaWxsIGlzIGR1ZSB0b2RheSEgUGxlYXNlIHBheSB0aGUgYmlsbCB3aGljaCBpcyBkdWUuXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa2F5XCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtRGV0YWlsKG5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgYm91Z2h0Qnk6IHN0cmluZywgcHJpY2U6IG51bWJlciwgZGF0ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pdGVtSUQgPSBpZDtcclxuICAgICAgICB0aGlzLmJvdWdodEJ5ID0gYm91Z2h0Qnk7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgICAgIHRoaXMuaXRlbURhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuZGl2aWRlZFByaWNlID0gdGhpcy5wcmljZSAvIHRoaXMuaG91c2VNZW1iZXI7XHJcbiAgICAgICAgdGhpcy5pdGVtRGV0YWlsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUGF5bWVudCgpIHtcclxuICAgICAgICB2YXIgdGFzayA9IHtcclxuICAgICAgICAgICAgX2lkOiB0aGlzLml0ZW1JRCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5pdGVtTmFtZSxcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UgLyB0aGlzLmhvdXNlTWVtYmVyLFxyXG4gICAgICAgICAgICBib3VnaHRCeTogdGhpcy5hY3RpdmVVc2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlV0aWxpdHkgQmlsbFwiLFxyXG4gICAgICAgICAgICBob3VzZU5hbWU6IHRoaXMudXNlckRhdGFbXCJob3VzZWhvbGRcIl0sXHJcbiAgICAgICAgICAgIGJvdWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgY29tcGxldGU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uc1NlcnZpY2Uuc2F2ZSh0YXNrKS50aGVuKChuZXdUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMudW5zaGlmdChuZXdUYXNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiUGF5bWVudCBTdWNjZXNzZnVsIVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoaXMgYmlsbCBoYXMgYmVlbiBwYWlkIGZvclwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2theVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG59Il19