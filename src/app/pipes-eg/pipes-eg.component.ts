import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-eg',
  templateUrl: './pipes-eg.component.html',
  styleUrls: ['./pipes-eg.component.scss']
})
export class PipesEgComponent {
  date = new Date();
  currencyValue = 1234.56;
  decimalValue = 3.145678;
  jsonData = { key1: 'value1', key2: 'value2', key3: { nestedKey: 'nestedValue' } };
  originalText = 'Hello Angular';
  originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  slicedArray = this.originalArray.slice(6, 10);
  originalString = 'Welcome to Angular';
  nameArray = ['one', 'two', 'three', 'four'];
}
