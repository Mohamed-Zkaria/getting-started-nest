import { Controller, Get, Post, Req, HttpCode, Header, Param, Body, Res, HttpStatus  } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { Response } from 'express';


@Controller('cats')
export class CatsController {

    // @Post()
    // create(): string {
    //     return 'This action adds a new cat';
    // }

    // @HttpCode(204)
    // @Header('Cache-control', 'no-store')
    // @Get()
    // findAll(@Req() request: Request): string {
    //     return "This action returns all cats.";
    // }

    // @Get(':id')
    // findOne(@Param() params: any): string{
    //     console.log(params.id);
    //     return `This action returns cat with id: ${params.id}`;
    // }

    @Get(':id')
    findOne(@Param('id') id: number): string{
        console.log({id});
        return `This action returns cat with id: ${id}`;
    }

    // @Post()
    // async create(@Body() createCatDto: CreateCatDto){
    //     console.log({createCatDto})
    //     return "this action adds new cat.";
    // }

    @Post()
    create(@Res() res: Response){
        res.status(HttpStatus.CREATED).send();
    }


    // @Get()
    // findAll(@Res() res: Response){
        // console.log("Have full control on the response and send it yourself.")
    //     res.status(HttpStatus.OK).json([]);
    // }


    @Get()
    findAll(@Res({ passthrough: true }) res: Response) {
        console.log("Use pass through to let nest handle the response and send it itself.")
        console.log("Now you can interact with the native response object.")
        console.log("(for example, set cookies or headers depending on certain conditions), but leave the rest to the framework.")
        res.status(HttpStatus.OK);
        return [];
    }


}
