import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

import {RolloutForm} from './rollout_form';

@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
  ],
  declarations: [
    RolloutForm,
  ],
  exports: [
    RolloutForm,
  ]
})
export class RolloutFormModule {
}
