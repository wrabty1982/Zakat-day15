import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller.js';
import { RegisterService } from './register.service.js';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
