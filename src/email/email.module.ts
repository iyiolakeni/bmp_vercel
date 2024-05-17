import { DatabaseModule } from 'database/database.module';
import { Module } from '@nestjs/common';
import { ImapService } from './imap.service';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';



@Module({
  imports: [DatabaseModule],
  controllers: [EmailController],
  providers: [EmailService,ImapService],
})
export class EmailModule {}
