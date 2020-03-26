import { TestBed } from '@angular/core/testing';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { LoginComponent } from "../login/login.component";
import { User } from "../shared/user/user.model";

describe('Component: LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [NativeScriptFormsModule]
    }).compileComponents();
 
    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

    it('should return true since email cannot be blank', () => {
      let user = new User();
      user.username = "Aoife";
      user.household = "Galway";
      user.password = "1234";
      user.email = "";

      var result = component.hasEmailErrors();

      expect(result).toBe(true); 
    });
    
    it('should return true since email is not valid', () => {
      let user = new User();
      user.username = "Aoife";
      user.household = "Galway";
      user.password = "1234";
      user.email = "aoife@";

      var result = component.hasEmailErrors();

      expect(result).toBe(true); 
    }); 

    it('should return false since no error exist for the email field', () => {
      let user = new User();
      user.username = "Aoife";
      user.household = "Galway";
      user.password = "1234";
      user.email = "aoife@gmail.com";

      var result = component.hasEmailErrors();

      expect(result).toBe(false); 
    });

    it('should return true since username cannot be blank', () => {
      let user = new User();
      user.username = "";
      user.household = "Galway";
      user.password = "1234";
      user.email = "aoife@gmail.com";

      var result = component.hasUsernameErrors();

      expect(result).toBe(true); 
    });

    it('should return false since no error exist for the username field', () => {
      let user = new User();
      user.username = "Aoife";
      user.household = "Galway";
      user.password = "1234";
      user.email = "aoife@gmail.com";

      var result = component.hasUsernameErrors();

      expect(result).toBe(false); 
    });

    it('should return true since household name cannot be blank', () => {
      let user = new User();
      user.username = "Aoife";
      user.household = "";
      user.password = "1234";
      user.email = "aoife@gmail.com";

      var result = component.hasHouseholdErrors();

      expect(result).toBe(true); 
    });

    it('should return false since no errors exists for the household name field', () => {
      let user = new User();
      user.username = "Aoife";
      user.household = "Galway";
      user.password = "1234";
      user.email = "aoife@gmail.com";

      var result = component.hasHouseholdErrors();

      expect(result).toBe(false); 
    });

    it('should return true since password cannot be blank', () => {
      let user = new User();
      user.username = "Aoife";
      user.household = "Galway";
      user.password = "";
      user.email = "aoife@gmail.com";

      var result = component.hasPasswordErrors();

      expect(result).toBe(true); 
    });

    it('should return false since no erros exists for the password field', () => {
      let user = new User();
      user.username = "Aoife";
      user.household = "Galway";
      user.password = "1234";
      user.email = "aoife@gmail.com";

      var result = component.hasPasswordErrors();

      expect(result).toBe(false); 
    });
});



