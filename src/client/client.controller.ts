import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async getClients() {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  async getClient(@Param('id') id: number) {
    return this.clientService.getClientById(id);
  }

  @Post()
  async createClient(@Body() body: { name: string; email: string }) {
    return this.clientService.createClient(body);
  }
}
