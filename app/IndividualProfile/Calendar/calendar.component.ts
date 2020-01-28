import { Component, OnInit } from "@angular/core";
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

@Component({
    selector: "gr-IndividualProfile",
    templateUrl: "./calendar.component.html",
    styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent  {
 
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