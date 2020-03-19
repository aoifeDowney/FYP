"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var transactions_service_1 = require("../shared/transactions/transactions.service");
var Kinvey = require("kinvey-nativescript-sdk");
var IndividualProfileComponent = /** @class */ (function () {
    function IndividualProfileComponent(transactionsService) {
        this.transactionsService = transactionsService;
        this.activeUser = Kinvey.User.getActiveUser();
        this.userData = Kinvey.User.getActiveUser().data;
        this.expensesChartData = [];
        this.transactions = [];
        this.textFieldValue = "";
        this.house = [];
        this.expensesChartData = [
            { name: "Rent", ammount: 69.5 },
            { name: "Utility Bills", ammount: 19.60 },
            { name: "House Shop", ammount: 10.80 }
        ];
    }
    IndividualProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionsService.get().subscribe(function (data) {
            _this.transactions = data;
            if (_this.transactions.length > 0) {
                _this.dataToShow = true;
            }
            else if (_this.transactions.length < 1) {
                _this.dataToShow = false;
            }
        }, function () {
            console.log("Unable to retrive list of transactions");
        });
    };
    /*save() {
        var transaction = {
          name: this.textFieldValue
        };
    
        this.transactionsService.save(transaction).then((newTransaction) => {
          this.transactions.unshift(newTransaction);
        })
        this.textFieldValue = "";
      }*/
    IndividualProfileComponent.prototype.calculatePrice = function (type, price) {
        var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
        if (type == "House Shop") {
            this.house.push(price);
            this.houseShopTotal = this.house.reduce(reducer);
            this.houseShopTotal = this.houseShopTotal / 11;
        }
        else if (type == "Rent") {
            this.house.push(price);
            this.rentTotal = this.house.reduce(reducer);
            this.rentTotal = this.rentTotal / 11;
        }
        else if (type == "Utility Bill") {
            this.house.push(price);
            this.utilityBillsTotal = this.house.reduce(reducer);
            this.utilityBillsTotal = this.utilityBillsTotal / 11;
        }
        this.totalTransactions = this.houseShopTotal;
        this.totalTransactions = this.rentTotal;
        this.totalTransactions = this.utilityBillsTotal;
        return this.totalTransactions;
    };
    IndividualProfileComponent.prototype.getIcon = function (type) {
        if (type == "House Shop") {
            return "~/images/houseShop.png";
        }
        else if (type == "Rent") {
            return "~/images/rent.png";
        }
        else if (type == "Utility Bill") {
            return "~/images/utilityBill.png";
        }
    };
    IndividualProfileComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    IndividualProfileComponent = __decorate([
        core_1.Component({
            selector: "gr-IndividualProfile",
            templateUrl: "./IndividualProfile.component.html",
            styleUrls: ["./IndividualProfile.component.css"],
            providers: [transactions_service_1.TransactionsService]
        }),
        __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
    ], IndividualProfileComponent);
    return IndividualProfileComponent;
}());
exports.IndividualProfileComponent = IndividualProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kaXZpZHVhbFByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW5kaXZpZHVhbFByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQUduQyxvRkFBa0Y7QUFFbEYsZ0RBQWtEO0FBUWxEO0lBa0JJLG9DQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQWhCNUQsZUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsYUFBUSxHQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBRTdDLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQVNwQixVQUFLLEdBQWEsRUFBRSxDQUFDO1FBR2IsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3JCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO1lBQ3pDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO1NBQ3pDLENBQUE7SUFDVCxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDMUMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzFCO2lCQUNJLElBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUMzQjtRQUNMLENBQUMsRUFBRTtZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7Ozs7O1NBU0s7SUFFSCxtREFBYyxHQUFkLFVBQWUsSUFBWSxFQUFFLEtBQWE7UUFFeEMsSUFBTSxPQUFPLEdBQUcsVUFBQyxXQUFXLEVBQUUsWUFBWSxJQUFLLE9BQUEsV0FBVyxHQUFHLFlBQVksRUFBMUIsQ0FBMEIsQ0FBQztRQUUxRSxJQUFHLElBQUksSUFBSSxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1NBQ2xEO2FBQ0ksSUFBRyxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUN4QzthQUNJLElBQUcsSUFBSSxJQUFJLGNBQWMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7U0FDeEQ7UUFFRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBRWhELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFFQyw0Q0FBTyxHQUFQLFVBQVEsSUFBWTtRQUNoQixJQUFHLElBQUksSUFBSSxZQUFZLEVBQUU7WUFDckIsT0FBTyx3QkFBd0IsQ0FBQztTQUNuQzthQUNJLElBQUcsSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUNwQixPQUFPLG1CQUFtQixDQUFDO1NBQzlCO2FBQ0ksSUFBRyxJQUFJLElBQUksY0FBYyxFQUFFO1lBQzVCLE9BQU8sMEJBQTBCLENBQUE7U0FDcEM7SUFDTCxDQUFDO0lBRUgsc0RBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQTdGUSwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztZQUNoRCxTQUFTLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztTQUNuQyxDQUFDO3lDQW1CMkMsMENBQW1CO09BbEJuRCwwQkFBMEIsQ0E4RnRDO0lBQUQsaUNBQUM7Q0FBQSxBQTlGRCxJQThGQztBQTlGWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNhY3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImdyLUluZGl2aWR1YWxQcm9maWxlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL0luZGl2aWR1YWxQcm9maWxlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vSW5kaXZpZHVhbFByb2ZpbGUuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW1RyYW5zYWN0aW9uc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmRpdmlkdWFsUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBcclxuICAgIGFjdGl2ZVVzZXIgPSBLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XHJcbiAgICB1c2VyRGF0YSA9IOKAi0tpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKS5kYXRhO1xyXG5cclxuICAgIGV4cGVuc2VzQ2hhcnREYXRhID0gW107XHJcbiAgICB0cmFuc2FjdGlvbnMgPSBbXTtcclxuICAgIHRleHRGaWVsZFZhbHVlID0gXCJcIjtcclxuICAgIHJlbnRUb3RhbDogbnVtYmVyO1xyXG4gICAgcmVudFBlcmNlbnRhZ2U6IG51bWJlcjtcclxuICAgIHV0aWxpdHlCaWxsc1RvdGFsOiBudW1iZXI7XHJcbiAgICB1dGlsaXR5QmlsbHNQZXJjZW50YWdlOiBudW1iZXI7XHJcbiAgICBob3VzZVNob3BUb3RhbDogbnVtYmVyO1xyXG4gICAgaG91c2VTaG9wUGVyY2VudGFnZTogbnVtYmVyO1xyXG4gICAgdG90YWxUcmFuc2FjdGlvbnM6IG51bWJlcjtcclxuICAgIGRhdGFUb1Nob3c6IGJvb2xlYW47XHJcbiAgICBob3VzZTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zYWN0aW9uc1NlcnZpY2U6IFRyYW5zYWN0aW9uc1NlcnZpY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5leHBlbnNlc0NoYXJ0RGF0YSA9IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJSZW50XCIsIGFtbW91bnQ6IDY5LjUgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJVdGlsaXR5IEJpbGxzXCIsIGFtbW91bnQ6IDE5LjYwIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiSG91c2UgU2hvcFwiLCBhbW1vdW50OiAxMC44MCB9XHJcbiAgICAgICAgICAgIF0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5nZXQoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBkYXRhO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2FjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhVG9TaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMudHJhbnNhY3Rpb25zLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVRvU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byByZXRyaXZlIGxpc3Qgb2YgdHJhbnNhY3Rpb25zXCIpO1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLypzYXZlKCkge1xyXG4gICAgICAgIHZhciB0cmFuc2FjdGlvbiA9IHtcclxuICAgICAgICAgIG5hbWU6IHRoaXMudGV4dEZpZWxkVmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNTZXJ2aWNlLnNhdmUodHJhbnNhY3Rpb24pLnRoZW4oKG5ld1RyYW5zYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucy51bnNoaWZ0KG5ld1RyYW5zYWN0aW9uKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudGV4dEZpZWxkVmFsdWUgPSBcIlwiO1xyXG4gICAgICB9Ki9cclxuXHJcbiAgICAgIGNhbGN1bGF0ZVByaWNlKHR5cGU6IHN0cmluZywgcHJpY2U6IG51bWJlcikge1xyXG5cclxuICAgICAgICBjb25zdCByZWR1Y2VyID0gKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IGFjY3VtdWxhdG9yICsgY3VycmVudFZhbHVlO1xyXG5cclxuICAgICAgICBpZih0eXBlID09IFwiSG91c2UgU2hvcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG91c2UucHVzaChwcmljZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaG91c2VTaG9wVG90YWwgPSB0aGlzLmhvdXNlLnJlZHVjZShyZWR1Y2VyKTtcclxuICAgICAgICAgICAgdGhpcy5ob3VzZVNob3BUb3RhbCA9IHRoaXMuaG91c2VTaG9wVG90YWwgLyAxMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0eXBlID09IFwiUmVudFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG91c2UucHVzaChwcmljZSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVudFRvdGFsID0gdGhpcy5ob3VzZS5yZWR1Y2UocmVkdWNlcik7XHJcbiAgICAgICAgICAgIHRoaXMucmVudFRvdGFsID0gdGhpcy5yZW50VG90YWwgLyAxMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0eXBlID09IFwiVXRpbGl0eSBCaWxsXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3VzZS5wdXNoKHByaWNlKTtcclxuICAgICAgICAgICAgdGhpcy51dGlsaXR5QmlsbHNUb3RhbCA9IHRoaXMuaG91c2UucmVkdWNlKHJlZHVjZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnV0aWxpdHlCaWxsc1RvdGFsID0gdGhpcy51dGlsaXR5QmlsbHNUb3RhbCAvIDExO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRvdGFsVHJhbnNhY3Rpb25zID0gdGhpcy5ob3VzZVNob3BUb3RhbDtcclxuICAgICAgICB0aGlzLnRvdGFsVHJhbnNhY3Rpb25zID0gdGhpcy5yZW50VG90YWxcclxuICAgICAgICB0aGlzLnRvdGFsVHJhbnNhY3Rpb25zID0gdGhpcy51dGlsaXR5QmlsbHNUb3RhbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxUcmFuc2FjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgICBnZXRJY29uKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgICAgaWYodHlwZSA9PSBcIkhvdXNlIFNob3BcIikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIn4vaW1hZ2VzL2hvdXNlU2hvcC5wbmdcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYodHlwZSA9PSBcIlJlbnRcIikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIn4vaW1hZ2VzL3JlbnQucG5nXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gXCJVdGlsaXR5IEJpbGxcIikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIn4vaW1hZ2VzL3V0aWxpdHlCaWxsLnBuZ1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19