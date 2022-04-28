import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stringToArray',
})
export class StringToArrayPipe implements PipeTransform {
    transform(value: string | undefined) {
        if (!value) return;
        return value.split(',');
    }
}