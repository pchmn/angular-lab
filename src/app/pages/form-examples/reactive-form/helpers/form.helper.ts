import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class FormHelper {
  static createForm(fb: FormBuilder): FormGroup {
    return fb.group({
      firstName: fb.control(null, Validators.required),
      lastName: fb.control(null),
      active: fb.control('1'),
      city: fb.control(null)
    });
  }
}
