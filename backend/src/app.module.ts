import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProductoModule } from './producto/producto.module';
import { VentaModule } from './venta/venta.module';
import { DetalleVentaModule } from './detalle_venta/detalle_venta.module';

@Module({
  imports: [UsuarioModule, ClienteModule, ProductoModule, VentaModule, DetalleVentaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
