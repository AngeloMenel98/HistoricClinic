import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT', 54321),
        username: configService.get<string>('DB_USER', 'root'),
        password: configService.get<string>('DB_PASSWORD', 'clinicVCP'),
        database: configService.get<string>('DB_DATABASE', 'history_clinic'),
        autoLoadEntities: true,
        synchronize:
          configService.get<string>('NODE_ENV') === 'production' ? false : true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DataBaseModule {}
