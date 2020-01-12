import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { EnquiredcustomerComponent } from './enquiredcustomer/enquiredcustomer.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import{ ViewBookingComponent } from './view-booking/view-booking.component';
import { DeuPaymentsComponent } from './deu-payments/deu-payments.component';
import { PaymentScheduleComponent } from './payment-schedule/payment-schedule.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
           {
               path:'enquiryForm',
               component:EnquiryFormComponent
           },
           {
            path:'enquiredCustomer',
            component:EnquiredcustomerComponent
        },
        {
            path:'bookingForm',
            component:BookingFormComponent
        },
        {
            path:'viewBooking',
            component:ViewBookingComponent
        },
        {
            path:'duePayments',
            component:DeuPaymentsComponent
        },
        {
            path:'paymentSchedule',
            component:PaymentScheduleComponent
        }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
