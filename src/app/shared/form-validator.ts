import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ageValidator(age: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        let result: {[key: string]: any} | null = null;

        if (control.value) {
            const ageDiffMs = Date.now() - new Date(control.value).getTime();
            const ageDate = new Date(ageDiffMs);
            const isOverAgeLimit = (Math.abs(ageDate.getUTCFullYear() - 1970)) >= age;
            result = !isOverAgeLimit ? {ageUnderLimit: {ageLimit: age}} : null;
        }

        return result;
    };
  }
