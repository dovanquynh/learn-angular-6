import { FormGroup } from '@angular/forms';

export class RepeatPassWordValidator {
    static validate(passwordFormGroup: FormGroup) {
        const password = passwordFormGroup.controls.password.value;
        const repeatPassword = passwordFormGroup.controls.repeatPassword.value;

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