import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { URL } from './url/url.entity';
import { URLService } from './url/url.service';
import { URLController } from './url/url.controller';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller'; // Importe o AppController aqui

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Configurações de conexão com o banco de dados
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'website_tracker',
      entities: [User, URL],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, URL]),
    AuthModule,
  ],
  controllers: [UserController, URLController, AppController], // Adicione o AppController aqui
  providers: [UserService, URLService],
})
export class AppModule {}
