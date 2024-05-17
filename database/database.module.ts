import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from '../src/user/entities/user.entity'
import {Form} from '../src/form/entities/form.entity'
import { MerchantID } from '../src/merchantID/merchantID.entity';
import { Email } from '../src/email/email.entity';
import { Pos } from '../src/pos/pos.entity';



@Module({
  imports: [
      TypeOrmModule.forFeature([User, Form, MerchantID, Pos, Email]),
        TypeOrmModule.forRoot({
      type: 'postgres',
          host: process.env.POSTGRESS_HOST,
          port: 5432,
          username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [User, Form, MerchantID, Pos, Email],
      synchronize: true,
          // logging: true,
        }),
      ],
      exports: [TypeOrmModule],
})
export class DatabaseModule {}
