import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ageValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        let result: {[key: string]: any} | null = null;

        if (control.value) {
            const ageDiffMs = Date.now() - new Date(control.value).getTime();
            const ageDate = new Date(ageDiffMs);
            const currentAge = ageDate.getUTCFullYear() - 1970;
            
            const isOverAgeLimit = currentAge >= minAge;
            result = !isOverAgeLimit ? {ageUnderLimit: {ageLimit: minAge}} : null;
        }

        return result;
    };
  }
