import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('AuthService');

  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}
}
