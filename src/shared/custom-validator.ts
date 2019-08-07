import {AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';

export class RepeatPassWordValidator {
    static validate(passwordFormGroup: FormGroup) {
        let password = passwordFormGroup.controls.password.value;
        let repeatPassword = passwordFormGroup.controls.repeatPassword.value;

        if (repeatPassword.length <= 0) {
            return null;
        }

        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }

        return null;

    }
}

// export class PasswordValidation {
//
//     static MatchPassword(AC: AbstractControl) {
//         let password = AC.get('password').value; // to get value in input tag
//         let repeatPassword = AC.get('repeatPassword').value; // to get value in input tag
//         if (password != repeatPassword) {
//             console.log('false');
//             AC.get('repeatPassword').setErrors( {MatchPassword: true} );
//         } else {
//             console.log('true');
//             return null;
//         }
//     }
// }

export const usernameValidator = (): ValidatorFn => {
    return (control: AbstractControl): { [key: string ]: string } => {
        const result = /^([a-zA-z]+)$/i.test(control.value);
        return result == true ? null : {'error' : 'Username wrong format'};
    };
};
export const passwordValidator = (): ValidatorFn => {
    return (control: AbstractControl): { [key: string ]: string } => {
        const result = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!\"#'$%&()=~|\\/]).{6,16})$/i.test(control.value);
        return result == true ? null : {'error' : 'Password wrong format'};
    };
};
