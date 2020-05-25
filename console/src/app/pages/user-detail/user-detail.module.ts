import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HasRoleModule } from 'src/app/directives/has-role/has-role.module';
import { CardModule } from 'src/app/modules/card/card.module';
import { ChangesModule } from 'src/app/modules/changes/changes.module';
import { MetaLayoutModule } from 'src/app/modules/meta-layout/meta-layout.module';

import { AuthUserDetailComponent } from './auth-user-detail/auth-user-detail.component';
import { AuthUserMfaComponent } from './auth-user-mfa/auth-user-mfa.component';
import { CodeDialogModule } from './code-dialog/code-dialog.module';
import { DetailFormModule } from './detail-form/detail-form.module';
import { DialogOtpComponent } from './dialog-otp/dialog-otp.component';
import { ThemeSettingComponent } from './theme-setting/theme-setting.component';
import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserGrantsModule } from './user-grants/user-grants.module';
import { UserMfaComponent } from './user-mfa/user-mfa.component';

@NgModule({
    declarations: [
        AuthUserDetailComponent,
        UserDetailComponent,
        DialogOtpComponent,
        AuthUserMfaComponent,
        UserMfaComponent,
        ThemeSettingComponent,
    ],
    imports: [
        UserDetailRoutingModule,
        ChangesModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DetailFormModule,
        MatDialogModule,
        MetaLayoutModule,
        MatFormFieldModule,
        UserGrantsModule,
        CodeDialogModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        CardModule,
        MatProgressBarModule,
        MatTooltipModule,
        HasRoleModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserDetailModule { }