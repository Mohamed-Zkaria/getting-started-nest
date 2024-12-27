import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatService } from './cats.service';

@Global()
@Module({
    controllers: [CatsController],
    providers: [CatService],
    exports: [CatService]
})
export class CatsModule {}
