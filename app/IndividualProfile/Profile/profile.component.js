"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var router_1 = require("@angular/router");
var email = require("nativescript-email");
var Kinvey = require("kinvey-nativescript-sdk");
var transactions_service_1 = require("../../shared/transactions/transactions.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, transactionsService) {
        this.router = router;
        this.transactionsService = transactionsService;
        this.activeUser = Kinvey.User.getActiveUser();
        this.userData = Kinvey.User.getActiveUser().data;
        this.userName = this.activeUser.username;
        this.houseName = this.userData["household"];
        this.icons = [];
        this.toEmail = "email";
        this.subject = " HouseShare App Invitation";
        this.message = " Hello,\nhtr\n" + "You have been invited to join a HouseShare group! The invitation was sent to you by your housemate "
            + this.userName + ". If you wish to join the group please download the HouseShare app from the App Store.\n\n"
            + "When registering make sure to register with your specific house group name which was"
            + " created. The house group name is: " + this.houseName + ".\nWe look forward to welcoming you to the HouseShare Team!"
            + "\n\nYours Sincerely," + "\nThe HouseShare Team";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionsService.getIcon().subscribe(function (data) {
            _this.icons.push(data);
            for (var i = 0; i < _this.icons.length; i++) {
                _this.icon = _this.icons[0][i]["icon"];
                //this.icon = "~/images/avatars/avatars/png/003-girl-2.png";
                console.log("Icon: " + _this.icon);
            }
        }, function () {
            console.log("Unable to retrive list of transactions");
        });
    };
    ProfileComponent.prototype.onEmailSend = function () {
        var _this = this;
        email.compose({
            subject: this.subject,
            body: this.message,
            to: [this.toEmail],
            cc: [this.ccEmail ? this.ccEmail : ' '],
            bcc: [this.bccEmail ? this.bccEmail : ' ']
        }).then(function () {
            setTimeout(function () {
                _this.clearFields();
            }, 5000);
        }, function (err) {
            _this.clearFields();
            alert("Error: " + err);
        });
    };
    ProfileComponent.prototype.clearFields = function () {
        this.toEmail = '';
        this.ccEmail = '';
        this.bccEmail = '';
        this.subject = '';
        this.message = '';
    };
    ProfileComponent.prototype.chooseIcon = function () {
        this.router.navigate(["/EditProfile"]);
    };
    ProfileComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "gr-profile",
            templateUrl: "./profile.component.html",
            styleUrls: ["./profile.component.css"],
            providers: [transactions_service_1.TransactionsService]
        }),
        __metadata("design:paramtypes", [router_1.Router, transactions_service_1.TransactionsService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMENBQXlDO0FBRXpDLDBDQUE0QztBQUM1QyxnREFBa0Q7QUFFbEQsdUZBQXFGO0FBUXJGO0lBb0JFLDBCQUFvQixNQUFjLEVBQVUsbUJBQXdDO1FBQWhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBbEJsRixlQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxhQUFRLEdBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDN0MsYUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3BDLGNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFHWCxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBR2xCLFlBQU8sR0FBRyw0QkFBNEIsQ0FBQTtRQUN0QyxZQUFPLEdBQUcsZ0JBQWdCLEdBQUcscUdBQXFHO2NBQ3BILElBQUksQ0FBQyxRQUFRLEdBQUcsNEZBQTRGO2NBQzVHLHNGQUFzRjtjQUN0RixxQ0FBcUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLDZEQUE2RDtjQUN0SCxzQkFBc0IsR0FBRyx1QkFBdUIsQ0FBQztJQUVzQixDQUFDO0lBRXhGLG1DQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2hELEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyw0REFBNEQ7Z0JBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztRQUVMLENBQUMsRUFBRTtZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNILENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQUEsaUJBZ0JEO1FBZEcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNWLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDdkMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQzdDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixVQUFVLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUMsRUFBRSxVQUFBLEdBQUc7WUFDRixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUdDLHFDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUF0RVUsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLDBDQUFtQixDQUFDO1NBQ2pDLENBQUM7eUNBcUI0QixlQUFNLEVBQStCLDBDQUFtQjtPQXBCekUsZ0JBQWdCLENBdUU1QjtJQUFELHVCQUFDO0NBQUEsQUF2RUQsSUF1RUM7QUF2RVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xyXG5pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdyLXByb2ZpbGVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vcHJvZmlsZS5jb21wb25lbnQuY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW1RyYW5zYWN0aW9uc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBhY3RpdmVVc2VyID0gS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xyXG4gICAgdXNlckRhdGEgPSDigItLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkuZGF0YTtcclxuICAgIHVzZXJOYW1lID0gdGhpcy5hY3RpdmVVc2VyLnVzZXJuYW1lO1xyXG4gICAgaG91c2VOYW1lID0gdGhpcy51c2VyRGF0YVtcImhvdXNlaG9sZFwiXTtcclxuXHJcbiAgICBpY29ucyA9IFtdO1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG5cclxuICAgIHRvRW1haWwgPSBcImVtYWlsXCI7XHJcbiAgICBjY0VtYWlsO1xyXG4gICAgYmNjRW1haWw7XHJcbiAgICBzdWJqZWN0ID0gXCIgSG91c2VTaGFyZSBBcHAgSW52aXRhdGlvblwiXHJcbiAgICBtZXNzYWdlID0gXCIgSGVsbG8sXFxuaHRyXFxuXCIgKyBcIllvdSBoYXZlIGJlZW4gaW52aXRlZCB0byBqb2luIGEgSG91c2VTaGFyZSBncm91cCEgVGhlIGludml0YXRpb24gd2FzIHNlbnQgdG8geW91IGJ5IHlvdXIgaG91c2VtYXRlIFwiXHJcbiAgICAgICAgICAgICAgICArIHRoaXMudXNlck5hbWUgKyBcIi4gSWYgeW91IHdpc2ggdG8gam9pbiB0aGUgZ3JvdXAgcGxlYXNlIGRvd25sb2FkIHRoZSBIb3VzZVNoYXJlIGFwcCBmcm9tIHRoZSBBcHAgU3RvcmUuXFxuXFxuXCJcclxuICAgICAgICAgICAgICAgICsgXCJXaGVuIHJlZ2lzdGVyaW5nIG1ha2Ugc3VyZSB0byByZWdpc3RlciB3aXRoIHlvdXIgc3BlY2lmaWMgaG91c2UgZ3JvdXAgbmFtZSB3aGljaCB3YXNcIlxyXG4gICAgICAgICAgICAgICAgKyBcIiBjcmVhdGVkLiBUaGUgaG91c2UgZ3JvdXAgbmFtZSBpczogXCIgKyB0aGlzLmhvdXNlTmFtZSArIFwiLlxcbldlIGxvb2sgZm9yd2FyZCB0byB3ZWxjb21pbmcgeW91IHRvIHRoZSBIb3VzZVNoYXJlIFRlYW0hXCJcclxuICAgICAgICAgICAgICAgICsgXCJcXG5cXG5Zb3VycyBTaW5jZXJlbHksXCIgKyBcIlxcblRoZSBIb3VzZVNoYXJlIFRlYW1cIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB0cmFuc2FjdGlvbnNTZXJ2aWNlIDpUcmFuc2FjdGlvbnNTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNhY3Rpb25zU2VydmljZS5nZXRJY29uKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuaWNvbnMucHVzaChkYXRhKTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaWNvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmljb24gPSB0aGlzLmljb25zWzBdW2ldW1wiaWNvblwiXTtcclxuICAgICAgICAvL3RoaXMuaWNvbiA9IFwifi9pbWFnZXMvYXZhdGFycy9hdmF0YXJzL3BuZy8wMDMtZ2lybC0yLnBuZ1wiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSWNvbjogXCIgKyB0aGlzLmljb24pO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gIH0sICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gcmV0cml2ZSBsaXN0IG9mIHRyYW5zYWN0aW9uc1wiKTtcclxuICB9KTtcclxuICB9XHJcblxyXG4gIG9uRW1haWxTZW5kKCk6IHZvaWQge1xyXG4gICBcclxuICAgIGVtYWlsLmNvbXBvc2Uoe1xyXG4gICAgICAgIHN1YmplY3Q6IHRoaXMuc3ViamVjdCxcclxuICAgICAgICBib2R5OiB0aGlzLm1lc3NhZ2UsXHJcbiAgICAgICAgdG86IFt0aGlzLnRvRW1haWxdLFxyXG4gICAgICAgIGNjOiBbdGhpcy5jY0VtYWlsID8gdGhpcy5jY0VtYWlsIDogJyAnXSxcclxuICAgICAgICBiY2M6IFt0aGlzLmJjY0VtYWlsID8gdGhpcy5iY2NFbWFpbCA6ICcgJ11cclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyRmllbGRzKCk7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXJGaWVsZHMoKTtcclxuICAgICAgICBhbGVydChcIkVycm9yOiBcIiArIGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY2xlYXJGaWVsZHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvRW1haWwgPSAnJztcclxuICAgIHRoaXMuY2NFbWFpbCA9ICcnO1xyXG4gICAgdGhpcy5iY2NFbWFpbCA9ICcnO1xyXG4gICAgdGhpcy5zdWJqZWN0ID0gJyc7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSAnJztcclxufVxyXG5cclxuXHJcbiAgY2hvb3NlSWNvbigpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9FZGl0UHJvZmlsZVwiXSk7XHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxufSJdfQ==