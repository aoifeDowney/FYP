import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Color } from "color";
import {
    AllDayEventsViewStyle,
    CalendarMonthViewStyle,
    CalendarWeekViewStyle,
    CalendarYearViewStyle,
    CalendarMonthNamesViewStyle,
    CalendarViewMode,
    CalendarDayViewStyle,
    CellStyle,
    DayCellStyle,
    DayEventsViewStyle,
    MonthCellStyle
} from "nativescript-ui-calendar";

import * as calendarModule from "nativescript-ui-calendar";


import { TransactionsService } from "../../shared/transactions/transactions.service";

@Component({
    selector: "gr-calendar",
    templateUrl: "./calendar.component.html",
    styleUrls: ["./calendar.component.css"],
    providers: [TransactionsService]
})
export class CalendarComponent implements OnInit {

    itemDate: string;

    transactions = [];
    calendarEvents = [];
    payments = [];
    dates = [];
    date = [];
        
    name = [
        "Bin Bags",
        "Apple",
        "Orange"
    ];
//16/02/2020  08/03/2020
    constructor(private transactionsService: TransactionsService) {}

    ngOnInit(): void {
        this.transactionsService.get().subscribe((data) => {
            this.dates.push(data);
            for(let i = 0; i < this.dates.length; i++) {
                this.date.push(this.dates[0][i]["date"]);
            }
            let events = [];
            let now = new Date();
            let startDate;
            let endDate;
            let colors = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
            for(let i = 0; i < this.date.length; i++) {
                startDate = new Date(this.date[i]);
                endDate = new Date(this.date[i]);
                let event = new calendarModule.CalendarEvent(this.name[i], startDate, endDate, false, colors[2 * 10 % (colors.length - 1)]);
                events.push(event);
                if (2 % 3 == 0) {
                    event = new calendarModule.CalendarEvent(this.name[i], startDate, endDate, true, colors[2 * 5 % (colors.length - 1)]);
                    events.push(event);
                }
    
            this.calendarEvents = events;
           }
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
    }

    getItemDetail(date: string) {
        this.itemDate = date;
        return this.itemDate;
    }

    monthViewStyle() {
        const monthViewStyle = new CalendarMonthViewStyle();
        monthViewStyle.backgroundColor = new Color('rgb(255, 255, 255)');
        monthViewStyle.selectionShapeColor = new Color('rgb(0, 0, 0)');

        const todayCellStyle = new DayCellStyle();
        todayCellStyle.cellBackgroundColor = new Color('rgb(198, 182, 251)');
        todayCellStyle.cellTextColor = new Color('rgb(112, 0, 203)');
        monthViewStyle.todayCellStyle = todayCellStyle;

        const dayCellStyle = new DayCellStyle();
        dayCellStyle.cellBackgroundColor = new Color('rgb(255, 255, 255)');
        dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = new Color('rgb(255, 255, 255)');
        dayCellStyle.cellTextColor = new Color('rgb(155, 126, 248)');

        monthViewStyle.dayCellStyle = dayCellStyle;

        const weekendCellStyle = new DayCellStyle();
        monthViewStyle.weekendCellStyle = weekendCellStyle;

        const selectedCellStyle = new DayCellStyle();
        monthViewStyle.selectedDayCellStyle = selectedCellStyle;

        const dayNameCellStyle = new CellStyle();
        dayNameCellStyle.cellBackgroundColor = new Color('rgb(255, 255, 255)');
        dayNameCellStyle.cellBorderWidth = 1;
        dayNameCellStyle.cellBorderColor = new Color('rgb(255, 255, 255)');
        dayNameCellStyle.cellTextColor = new Color('rgb(112, 0, 203)');
        monthViewStyle.dayNameCellStyle = dayNameCellStyle;

        const titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = new Color('rgb(255, 255, 255)');
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = new Color('rgb(255, 255, 255)');
        titleCellStyle.cellTextColor = new Color('rgb(112, 0, 203)');
        monthViewStyle.titleCellStyle = titleCellStyle;

        return monthViewStyle;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}