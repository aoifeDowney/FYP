"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var dialogs = require("tns-core-modules/ui/dialogs");
var common_1 = require("@angular/common");
var Kinvey = require("kinvey-nativescript-sdk");
var transactions_service_1 = require("../../../shared/transactions/transactions.service");
var AddBillComponent = /** @class */ (function () {
    function AddBillComponent(transactionsService, datePipe) {
        this.transactionsService = transactionsService;
        this.datePipe = datePipe;
        this.activeUser = Kinvey.User.getActiveUser();
        this.userData = Kinvey.User.getActiveUser().data;
        this.now = new Date();
        this.minDate = new Date();
        this.maxDate = new Date(2045, 4, 12);
        this.nameValue = "";
        this.dateValue = "";
        this.items = [];
        this.name = [];
        this.users = [];
    }
    AddBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionsService.getHouseMembersBill().subscribe(function (data) {
            _this.users.push(data);
            _this.houseMember = _this.users[0].length;
            console.log(_this.houseMember);
            var number = _this.users[0].length;
            for (var i = 0; i < number; i++) {
                if (_this.name.includes(_this.users[0][i]["userName"])) {
                    return;
                }
                else {
                    _this.name.push(_this.users[0][i]["userName"]);
                }
            }
        }, function () {
            console.log("Unable to retrive list of transactions");
        });
    };
    AddBillComponent.prototype.onDateChanged = function (args) {
        console.log("Date New value: " + args.value);
        this.dateValue = this.datePipe.transform(args.value, "yyyy-MM-dd");
    };
    AddBillComponent.prototype.saveBill = function () {
        var _this = this;
        for (var i = 0; i < this.name.length; i++) {
            var task = {
                name: this.nameValue,
                price: this.priceValue,
                date: this.dateValue,
                type: "Utility Bill",
                toPay: this.name[i],
                houseName: this.userData["household"],
                bought: true,
                complete: false
            };
            this.transactionsService.save(task).then(function (newTask) {
                _this.items.unshift(newTask);
            });
        }
        this.nameValue = "";
        this.priceValue = null;
        this.dateValue = "";
        dialogs.alert({
            title: "Saved!",
            message: "The new bill as been added",
            okButtonText: "Okay"
        });
    };
    AddBillComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    AddBillComponent = __decorate([
        core_1.Component({
            selector: "gr-addBill",
            templateUrl: "./addBill.component.html",
            styleUrls: ["./addBill.component.css"],
            providers: [transactions_service_1.TransactionsService]
        }),
        __metadata("design:paramtypes", [transactions_service_1.TransactionsService, common_1.DatePipe])
    ], AddBillComponent);
    return AddBillComponent;
}());
exports.AddBillComponent = AddBillComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQmlsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRCaWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMscURBQXVEO0FBRXZELDBDQUEyQztBQUMzQyxnREFBa0Q7QUFFbEQsMEZBQXdGO0FBUXhGO0lBaUJJLDBCQUFvQixtQkFBd0MsRUFBVSxRQUFrQjtRQUFwRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWZ4RixlQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxhQUFRLEdBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFFN0MsUUFBRyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFHdEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxFQUFFLENBQUM7SUFFZ0YsQ0FBQztJQUU1RixtQ0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDMUQsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxP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QkFBQztDQUFBLEFBN0VELElBNkVDO0FBN0VZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ItYWRkQmlsbFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hZGRCaWxsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYWRkQmlsbC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbVHJhbnNhY3Rpb25zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEJpbGxDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBhY3RpdmVVc2VyID0gS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xyXG4gICAgdXNlckRhdGEgPSDigItLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkuZGF0YTtcclxuXHJcbiAgICBub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbWluRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBtYXhEYXRlOiBEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xyXG5cclxuICAgIGhvdXNlTWVtYmVyOiBudW1iZXI7XHJcbiAgICBuYW1lVmFsdWUgPSBcIlwiO1xyXG4gICAgcHJpY2VWYWx1ZTogbnVtYmVyO1xyXG4gICAgZGF0ZVZhbHVlID0gXCJcIjtcclxuICAgIGl0ZW1zID0gW107XHJcbiAgICBuYW1lID0gW107XHJcbiAgICB1c2VycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNhY3Rpb25zU2VydmljZTogVHJhbnNhY3Rpb25zU2VydmljZSwgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNTZXJ2aWNlLmdldEhvdXNlTWVtYmVyc0JpbGwoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2Vycy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmhvdXNlTWVtYmVyID0gdGhpcy51c2Vyc1swXS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaG91c2VNZW1iZXIpO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy51c2Vyc1swXS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5uYW1lLmluY2x1ZGVzKHRoaXMudXNlcnNbMF1baV1bXCJ1c2VyTmFtZVwiXSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lLnB1c2godGhpcy51c2Vyc1swXVtpXVtcInVzZXJOYW1lXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIHJldHJpdmUgbGlzdCBvZiB0cmFuc2FjdGlvbnNcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRlIE5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcclxuICAgICAgICB0aGlzLmRhdGVWYWx1ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGFyZ3MudmFsdWUsXCJ5eXl5LU1NLWRkXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzYXZlQmlsbCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmFtZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciB0YXNrID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVWYWx1ZSxcclxuICAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2VWYWx1ZSxcclxuICAgICAgICAgICAgZGF0ZTogdGhpcy5kYXRlVmFsdWUsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiVXRpbGl0eSBCaWxsXCIsXHJcbiAgICAgICAgICAgIHRvUGF5OiB0aGlzLm5hbWVbaV0sXHJcbiAgICAgICAgICAgIGhvdXNlTmFtZTogdGhpcy51c2VyRGF0YVtcImhvdXNlaG9sZFwiXSxcclxuICAgICAgICAgICAgYm91Z2h0OiB0cnVlLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uc1NlcnZpY2Uuc2F2ZSh0YXNrKS50aGVuKChuZXdUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMudW5zaGlmdChuZXdUYXNrKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5hbWVWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wcmljZVZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRhdGVWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTYXZlZCFcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgbmV3IGJpbGwgYXMgYmVlbiBhZGRlZFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2theVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG59Il19