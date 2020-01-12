import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { EnquiredcustomerComponent } from './enquiredcustomer/enquiredcustomer.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { DeuPaymentsComponent } from './deu-payments/deu-payments.component';
import { PaymentScheduleComponent } from './payment-schedule/payment-schedule.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule
    ],
    declarations: [ LayoutComponent, EnquiryFormComponent, EnquiredcustomerComponent, BookingFormComponent, ViewBookingComponent, DeuPaymentsComponent, PaymentScheduleComponent ]

})
export class LayoutModule { }
