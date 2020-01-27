import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-expenses-chart",
    moduleId: module.id,
    templateUrl: "./expenses-chart.component.html",
    styleUrls: ["./expenses-chart.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesChartComponent {
    @Input() data = [];
}

