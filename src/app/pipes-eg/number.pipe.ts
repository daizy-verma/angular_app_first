import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text2num'
})
export class NumberPipe implements PipeTransform {

  transform(value: string): unknown {
    const numberMap : any = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9
      // Add more as needed
  };

  // Convert the text to lowercase for case-insensitive matching
  const lowerCaseText = value.toLowerCase();
  
  // Check if the text exists in the numberMap, if so return its corresponding numeric value
  if (lowerCaseText in numberMap) {
      return numberMap[lowerCaseText];
  } else {
      // If the text is not found in the numberMap, try parsing it as a number
      const parsedNumber = parseInt(value);
      if (!isNaN(parsedNumber)) {
          return parsedNumber;
      } else {
          // If the text is not found in the numberMap and not a valid number, return NaN
          return NaN;
      }
  }
  }

}
