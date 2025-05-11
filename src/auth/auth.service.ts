import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async login(data: LoginDto) {
    const usuario = await this.prisma.usuarios.findUnique({
      where: { email: data.email },
    });

    if (!usuario || !usuario.senha_hash) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const senhaOk = await bcrypt.compare(data.senha, usuario.senha_hash);
    if (!senhaOk) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = {
      sub: usuario.id.toString(),
      email: usuario.email,
      admin: usuario.admin,
    };

    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}