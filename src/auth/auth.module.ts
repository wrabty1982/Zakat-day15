import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module.js';
import { RegisterModule } from './register/register.module.js';

@Module({
  imports: [LoginModule, RegisterModule]
})
export class AuthModule {}
