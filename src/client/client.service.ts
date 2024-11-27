import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  // Função para obter dados do cliente
  async getAllClients() {
    return this.prisma.client.findMany(); // Supondo que você tenha um modelo `client` no Prisma
  }

  // Função para obter dados de um cliente específico
  async getClientById(clientId: number) {
    return this.prisma.client.findUnique({
      where: { id: clientId }, // Supondo que o id é a chave primária
    });
  }

  // Função para criar um cliente
  async createClient(data: { name: string; email: string }) {
    return this.prisma.client.create({
      data,
    });
  }
}
