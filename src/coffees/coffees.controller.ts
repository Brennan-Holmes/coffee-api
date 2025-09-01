import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This returns all coffees with limit ${limit} and offset ${offset}`;
  }

  @Get('flavors')
  findAllFlavors() {
    return 'This is a string that returns all flavors and is a place holder for now';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This will return coffee with id ${id} and is a place holder for now`;
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body('name') name: string) {
    return 'What this will do once done is add the coffee to the database';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return body;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This will remove coffee with id ${id} and is a place holder for now`;
  }
}
