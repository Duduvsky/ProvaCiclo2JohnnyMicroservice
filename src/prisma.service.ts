import { Injectable, Global } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }
}
