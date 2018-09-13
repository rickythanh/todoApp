import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

export class ConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      host: 'localhost',
      // host: 'cluster0-p2rto.mongodb.net',
      // host: 'mycluster0-shard-00-00.mongodb.net',
      port: 27017,
      username: 'admin', password: '', database: 'tododb',
      // username: 'user001', password: '123567Tam', database: 'test',
      // entities: [],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      keepConnectionAlive: true,
      retryAttempts: 2,
      retryDelay: 1000,
    };
  }
}

@Module({
  imports: [
    // TypeOrmModule.forRoot('mongodb+srv://user001:123567Tam@cluster0-p2rto.mongodb.net/test?retryWrites=true'),
    TypeOrmModule.forRootAsync({
      useClass: ConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
