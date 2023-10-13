import { MinLength, IsEnum } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['Rasengan', 'Sharingan', 'Healing'], {
    message: 'Not unlocked weapon yet',
  })
  weapon: 'Rasengan' | 'Sharingan' | 'Healing';
}
