import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { AuthService } from '@services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        AuthService,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a mat-card-title tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('Inicio de sesión');
  });
});
