import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetValidators } from './validation.decortators';

export function CreateFormFromModel(model: any, fb: FormBuilder): FormGroup 
{
  const FormControls: { [key: string]: any } = {};
  const Meta = GetValidators(Object.getPrototypeOf(model));
  Object.keys(model).forEach((key) => 
  {
    const validators = (Meta[key] || []).map((rule: { validator: any }) => rule.validator);
    FormControls[key] = [model[key], validators];
  });
  return fb.group(FormControls);
}
