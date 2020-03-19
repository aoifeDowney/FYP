"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExpensesChartComponent = /** @class */ (function () {
    function ExpensesChartComponent() {
        this.data = [];
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ExpensesChartComponent.prototype, "data", void 0);
    ExpensesChartComponent = __decorate([
        core_1.Component({
            selector: "app-expenses-chart",
            moduleId: module.id,
            templateUrl: "./expenses-chart.component.html",
            styleUrls: ["./expenses-chart.component.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], ExpensesChartComponent);
    return ExpensesChartComponent;
}());
exports.ExpensesChartComponent = ExpensesChartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBFO0FBUzFFO0lBUEE7UUFRYSxTQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFEWTtRQUFSLFlBQUssRUFBRTs7d0RBQVc7SUFEVixzQkFBc0I7UUFQbEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7WUFDN0MsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDbEQsQ0FBQztPQUNXLHNCQUFzQixDQUVsQztJQUFELDZCQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZXhwZW5zZXMtY2hhcnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2V4cGVuc2VzLWNoYXJ0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vZXhwZW5zZXMtY2hhcnQuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc0NoYXJ0Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGRhdGEgPSBbXTtcclxufVxyXG5cclxuIl19