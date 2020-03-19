"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var router_1 = require("@angular/router");
var dialogs = require("tns-core-modules/ui/dialogs");
var common_1 = require("@angular/common");
var Kinvey = require("kinvey-nativescript-sdk");
var transactions_service_1 = require("../../../shared/transactions/transactions.service");
var SuggestItemComponent = /** @class */ (function () {
    function SuggestItemComponent(transactionsService, router, datePipe) {
        this.transactionsService = transactionsService;
        this.router = router;
        this.datePipe = datePipe;
        this.now = new Date();
        this.minDate = new Date(this.now.getFullYear(), this.now.getMonth(), 1);
        this.maxDate = new Date();
        this.transactions = [];
        this.itemDetail = false;
        this.toogleName = "No";
        this.toogled = false;
        this.itemDateValue = "";
        this.items = [];
        this.activeUser = Kinvey.User.getActiveUser();
        this.userData = Kinvey.User.getActiveUser().data;
        this.users = [];
        this.name = [];
    }
    SuggestItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionsService.getSuggestedItem().subscribe(function (data) {
            _this.transactions = data;
        }, function () {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
        this.transactionsService.getHouseMembers().subscribe(function (data) {
            _this.users.push(data);
            var number = _this.users[0].length;
            for (var i = 0; i < number; i++) {
                _this.member = _this.users[0].length + 1;
                if (_this.name.includes(_this.users[0][i]["userName"])) {
                    return;
                }
                else {
                    _this.name.push(_this.users[0][i]["userName"]);
                }
            }
        }, function () {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
    };
    SuggestItemComponent.prototype.getItemDetails = function (name, id, suggestedBy) {
        this.itemName = name;
        this.itemID = id;
        this.suggestedBy = suggestedBy;
        this.itemDetail = true;
    };
    SuggestItemComponent.prototype.onCheckedChange = function (args) {
        var sw = args.object;
        var isChecked = sw.checked;
        if (isChecked) {
            this.toogleName = "Yes";
            this.toogled = true;
        }
        else {
            this.toogleName = "No";
            this.toogled = false;
        }
    };
    SuggestItemComponent.prototype.saveItem = function () {
        var _this = this;
        for (var i = 0; i < this.name.length; i++) {
            var task = {
                name: this.itemName,
                date: this.itemDateValue,
                price: this.itemPriceValue / this.member,
                houseName: this.userData["household"],
                toPay: this.name[i],
                type: "House Shop",
                bought: true,
                complete: false
            };
            this.transactionsService.save(task).then(function (newTask) {
                _this.items.unshift(newTask);
            });
        }
        this.boughtByCurrentUser();
        this.itemDateValue = "";
        this.itemName = "";
        this.itemPriceValue = null;
        dialogs.alert({
            title: "Saved!",
            message: "The item has been updated and moved to the 'Items Bought' list",
            okButtonText: "Okay"
        }).then(function () {
            _this.router.navigate(["/SuggestItem"]);
        });
    };
    SuggestItemComponent.prototype.boughtByCurrentUser = function () {
        var _this = this;
        var task = {
            _id: this.itemID,
            name: this.itemName,
            date: this.itemDateValue,
            price: this.itemPriceValue / this.member,
            houseName: this.userData["household"],
            boughtBy: this.activeUser.username,
            type: "House Shop",
            bought: true,
            complete: true
        };
        this.transactionsService.save(task).then(function (newTask) {
            _this.items.unshift(newTask);
        });
    };
    SuggestItemComponent.prototype.onDateChanged = function (args) {
        this.itemDateValue = this.datePipe.transform(args.value, "yyyy-MM-dd");
    };
    SuggestItemComponent.prototype.back = function () {
        this.itemDetail = false;
        this.toogleName = "No";
        this.toogled = false;
    };
    SuggestItemComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    SuggestItemComponent = __decorate([
        core_1.Component({
            selector: "gr-suggestItem",
            templateUrl: "./suggestItem.component.html",
            styleUrls: ["./suggestItem.component.css"],
            providers: [transactions_service_1.TransactionsService]
        }),
        __metadata("design:paramtypes", [transactions_service_1.TransactionsService, router_1.Router, common_1.DatePipe])
    ], SuggestItemComponent);
    return SuggestItemComponent;
}());
exports.SuggestItemComponent = SuggestItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VnZ2VzdEl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VnZ2VzdEl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQUVuQywwQ0FBeUM7QUFHekMscURBQXVEO0FBQ3ZELDBDQUEyQztBQUMzQyxnREFBa0Q7QUFFbEQsMEZBQXdGO0FBUXhGO0lBd0JJLDhCQUFvQixtQkFBd0MsRUFBVSxNQUFjLEVBQVUsUUFBa0I7UUFBNUYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBdEJoSCxRQUFHLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLFlBQU8sR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRTNCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFHbkIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR2hCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxlQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxhQUFRLEdBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFHN0MsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxFQUFFLENBQUM7SUFHeUcsQ0FBQztJQUVwSCx1Q0FBUSxHQUFSO1FBQUEsaUJBNEJDO1FBM0JHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDdkQsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxFQUFFO1lBQ0MsS0FBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxjQUFjO2dCQUNyQixPQUFPLEVBQUUsd0NBQXdDO2FBQ3BELENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDdEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsS0FBSSxDQUFDLE1BQU0sR0FBSSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLElBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDO29CQUNoRCxPQUFPO2lCQUNWO3FCQUFNO29CQUNILEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztpQkFDaEQ7YUFFSjtRQUNMLENBQUMsRUFBRTtZQUNDLEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLHdDQUF3QzthQUNwRCxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw2Q0FBYyxHQUFkLFVBQWUsSUFBWSxFQUFFLEVBQVUsRUFBRSxXQUFtQjtRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsOENBQWUsR0FBZixVQUFnQixJQUFlO1FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFnQixDQUFDO1FBQy9CLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDM0IsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUNJO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQStCQztRQTlCRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxJQUFJLEdBQUc7Z0JBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNO2dCQUN4QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7Z0JBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFFBQVEsRUFBRSxLQUFLO2FBQ2xCLENBQUM7WUFFRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87Z0JBQzdDLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUUzQixPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLFFBQVE7WUFDZixPQUFPLEVBQUUsZ0VBQWdFO1lBQ3pFLFlBQVksRUFBRSxNQUFNO1NBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0RBQW1CLEdBQW5CO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxJQUFJLEdBQUc7WUFDUCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtZQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTTtZQUN4QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUNsQyxJQUFJLEVBQUUsWUFBWTtZQUNsQixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7UUFFRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDN0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0RBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQTVJUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztZQUMxQyxTQUFTLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztTQUNuQyxDQUFDO3lDQXlCMkMsMENBQW1CLEVBQWtCLGVBQU0sRUFBb0IsaUJBQVE7T0F4QnZHLG9CQUFvQixDQTZJaEM7SUFBRCwyQkFBQztDQUFBLEFBN0lELElBNklDO0FBN0lZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3Itc3VnZ2VzdEl0ZW1cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3VnZ2VzdEl0ZW0uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zdWdnZXN0SXRlbS5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbVHJhbnNhY3Rpb25zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1Z2dlc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbWluRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRoaXMubm93LmdldEZ1bGxZZWFyKCksIHRoaXMubm93LmdldE1vbnRoKCksIDEpO1xyXG4gICAgbWF4RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgdHJhbnNhY3Rpb25zID0gW107XHJcbiAgICBpdGVtRGV0YWlsID0gZmFsc2U7XHJcbiAgICBpdGVtTmFtZTogc3RyaW5nO1xyXG4gICAgaXRlbUlEOiBzdHJpbmc7XHJcbiAgICB0b29nbGVOYW1lID0gXCJOb1wiO1xyXG4gICAgdG9vZ2xlZCA9IGZhbHNlO1xyXG4gICAgc3VnZ2VzdGVkQnk6IHN0cmluZztcclxuICAgIGl0ZW1QcmljZVZhbHVlOiBudW1iZXI7XHJcbiAgICBpdGVtRGF0ZVZhbHVlID0gXCJcIjtcclxuICAgIGl0ZW1zID0gW107XHJcbiAgICBhY3RpdmVVc2VyID0gS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xyXG4gICAgdXNlckRhdGEgPSDigItLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkuZGF0YTtcclxuXHJcbiAgICBtZW1iZXI6IG51bWJlcjtcclxuICAgIHVzZXJzID0gW107XHJcbiAgICBuYW1lID0gW107XHJcbiAgICBuYW1lczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNhY3Rpb25zU2VydmljZTogVHJhbnNhY3Rpb25zU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNTZXJ2aWNlLmdldFN1Z2dlc3RlZEl0ZW0oKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBkYXRhO1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVHJhbnNhY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHJldHJpZXZpbmcgeW91ciBkYXRhXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5nZXRIb3VzZU1lbWJlcnMoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2Vycy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy51c2Vyc1swXS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW1iZXIgID0gdGhpcy51c2Vyc1swXS5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5uYW1lLmluY2x1ZGVzKHRoaXMudXNlcnNbMF1baV1bXCJ1c2VyTmFtZVwiXSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lLnB1c2godGhpcy51c2Vyc1swXVtpXVtcInVzZXJOYW1lXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRyYW5zYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCByZXRyaWV2aW5nIHlvdXIgZGF0YVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1EZXRhaWxzKG5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgc3VnZ2VzdGVkQnk6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaXRlbU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuaXRlbUlEID0gaWQ7XHJcbiAgICAgICAgdGhpcy5zdWdnZXN0ZWRCeSA9IHN1Z2dlc3RlZEJ5O1xyXG4gICAgICAgIHRoaXMuaXRlbURldGFpbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGVja2VkQ2hhbmdlKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBzdyA9IGFyZ3Mub2JqZWN0IGFzIFN3aXRjaDtcclxuICAgICAgICBsZXQgaXNDaGVja2VkID0gc3cuY2hlY2tlZDtcclxuICAgICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vZ2xlTmFtZSA9IFwiWWVzXCI7XHJcbiAgICAgICAgICAgIHRoaXMudG9vZ2xlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZU5hbWUgPSBcIk5vXCI7XHJcbiAgICAgICAgICAgIHRoaXMudG9vZ2xlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlSXRlbSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmFtZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGFzayA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuaXRlbU5hbWUsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLml0ZW1EYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogdGhpcy5pdGVtUHJpY2VWYWx1ZSAvIHRoaXMubWVtYmVyLFxyXG4gICAgICAgICAgICAgICAgaG91c2VOYW1lOiB0aGlzLnVzZXJEYXRhW1wiaG91c2Vob2xkXCJdLFxyXG4gICAgICAgICAgICAgICAgdG9QYXk6IHRoaXMubmFtZVtpXSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiSG91c2UgU2hvcFwiLFxyXG4gICAgICAgICAgICAgICAgYm91Z2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uc1NlcnZpY2Uuc2F2ZSh0YXNrKS50aGVuKChuZXdUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnVuc2hpZnQobmV3VGFzayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ib3VnaHRCeUN1cnJlbnRVc2VyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbURhdGVWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pdGVtTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pdGVtUHJpY2VWYWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTYXZlZCFcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgaXRlbSBoYXMgYmVlbiB1cGRhdGVkIGFuZCBtb3ZlZCB0byB0aGUgJ0l0ZW1zIEJvdWdodCcgbGlzdFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2theVwiXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9TdWdnZXN0SXRlbVwiXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBib3VnaHRCeUN1cnJlbnRVc2VyKCkge1xyXG4gICAgICAgIHZhciB0YXNrID0ge1xyXG4gICAgICAgICAgICBfaWQ6IHRoaXMuaXRlbUlELFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLml0ZW1OYW1lLFxyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLml0ZW1EYXRlVmFsdWUsXHJcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLml0ZW1QcmljZVZhbHVlIC8gdGhpcy5tZW1iZXIsXHJcbiAgICAgICAgICAgIGhvdXNlTmFtZTogdGhpcy51c2VyRGF0YVtcImhvdXNlaG9sZFwiXSxcclxuICAgICAgICAgICAgYm91Z2h0Qnk6IHRoaXMuYWN0aXZlVXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgdHlwZTogXCJIb3VzZSBTaG9wXCIsXHJcbiAgICAgICAgICAgIGJvdWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgY29tcGxldGU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uc1NlcnZpY2Uuc2F2ZSh0YXNrKS50aGVuKChuZXdUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMudW5zaGlmdChuZXdUYXNrKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLml0ZW1EYXRlVmFsdWUgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShhcmdzLnZhbHVlLFwieXl5eS1NTS1kZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbURldGFpbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9vZ2xlTmFtZSA9IFwiTm9cIjtcclxuICAgICAgICB0aGlzLnRvb2dsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn0iXX0=