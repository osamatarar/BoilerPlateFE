import 'reflect-metadata';
import { Validators } from '@angular/forms';

const VALIDATION_META_KEY = 'validations';
const metadataCache: Map<any, any> = new Map();

function AddValidator(target: any, propertyKey: string, validator: any) 
{
  const existingValidators = Reflect.getMetadata(VALIDATION_META_KEY, target) || {};
  existingValidators[propertyKey] = existingValidators[propertyKey] || [];
  existingValidators[propertyKey].push(validator);
  Reflect.defineMetadata(VALIDATION_META_KEY, existingValidators, target);
}

export function Required() 
{
  return function(target: any, propertyKey: string) 
  {
    AddValidator(target, propertyKey, { type: 'required', validator: Validators.required });
  };
}

export function MinLength(length: number) 
{
  return function(target: any, propertyKey: string) 
  {
    AddValidator(target, propertyKey, { type: 'minLength', value: length, validator: Validators.minLength(length) });
  };
}

export function MaxLength(length: number) 
{
  return function(target: any, propertyKey: string) 
  {
    AddValidator(target, propertyKey, { type: 'maxLength', value: length, validator: Validators.maxLength(length) });
  };
}

export function Email() 
{
  return function(target: any, propertyKey: string) 
  {
    AddValidator(target, propertyKey, { type: 'email', validator: Validators.email });
  };
}

export function Pattern(pattern: string | RegExp) 
{
  return function(target: any, propertyKey: string) 
  {
    AddValidator(target, propertyKey, { type: 'pattern', value: pattern, validator: Validators.pattern(pattern) });
  };
}

export function Min(min: number) 
{
  return function(target: any, propertyKey: string) 
  {
    AddValidator(target, propertyKey, { type: 'min', value: min, validator: Validators.min(min) });
  };
}

export function Max(max: number) 
{
  return function(target: any, propertyKey: string) 
  {
    AddValidator(target, propertyKey, { type: 'max', value: max, validator: Validators.max(max) });
  };
}

export function NullValidator() 
{
  return function(target: any, propertyKey: string) 
  {
    AddValidator(target, propertyKey, { type: 'null', validator: Validators.nullValidator });
  };
}


export function GetValidators(target: any) 
{
  if(metadataCache.has(target)) 
  {
    return metadataCache.get(target);
  }

  const metadata = Reflect.getMetadata(VALIDATION_META_KEY, target) || {};
  metadataCache.set(target, metadata);
  return metadata;
}
