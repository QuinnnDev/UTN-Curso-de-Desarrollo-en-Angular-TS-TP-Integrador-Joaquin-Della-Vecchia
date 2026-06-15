import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
})
export class DescuentoPipe implements PipeTransform {
  transform(value: number, discountPercent: number): number {

    if(!value || isNaN(value)){
      return 0
    }
    if(!discountPercent || isNaN(discountPercent) || discountPercent <= 0){
      return value
    }

    const discount = value * (discountPercent / 100);
    return value - discount;
  }
}
