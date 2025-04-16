import { Email, Max, MaxLength, Min, MinLength, Pattern, Required } from "../../../core/forms/validation.decortators";


export class LoginForm 
{
  @Required()
  @MinLength(3)
  @MaxLength(50)
  Name: string = 'Usama Ahmad';
  
  @Required()
  @Email()
  Password: string = '';
}

export class LoginFormDTO 
{
  Name: string = '';
  Password: string = '';
}
  