import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  states = [
    { state: 'Andhra Pradesh', capital: 'Amaravati', language: 'Telugu' },
    { state: 'Arunachal Pradesh', capital: 'Itanagar', language: 'English' },
    { state: 'Assam', capital: 'Dispur', language: 'Assamese' },
    { state: 'Bihar', capital: 'Patna', language: 'Hindi' },
    { state: 'Chhattisgarh', capital: 'Itanagar', language: 'Hindi' },
    { state: 'Goa', capital: 'Panaji', language: 'Konkani' },
    { state: 'Punjab', capital: 'Chandigarh', language: 'Punjabi' },
    { state: 'Gujarat', capital: 'Gandhinagar', language: 'Gujarati' },
    { state: 'Haryana', capital: 'Chandigarh', language: 'Hindi' },
    { state: 'Himachal Pradesh', capital: 'Shimla', language: 'Hindi' },
    { state: 'Jharkhand', capital: 'Ranchi', language: 'Hindi' },
    { state: 'Karnataka', capital: 'Bengaluru', language: 'Kannada' },
    { state: 'Kerala', capital: 'Thiruvananthapuram', language: 'Malayalam' },
    { state: 'Madhya Pradesh', capital: 'Bhopal', language: 'Hindi' },
    { state: 'Maharashtra', capital: 'Chandigarh', language: 'Hindi' },
    { state: 'Manipur', capital: 'Imphal', language: 'Manipuri' },
    { state: 'Meghalaya', capital: 'Shillong', language: 'English' },
    { state: 'Mizoram', capital: 'Aizawl', language: 'Mizo' },
    { state: 'Nagaland', capital: 'Kohima', language: 'English' },
    { state: 'Odisha', capital: 'Kohima', language: 'Odia' },
    { state: 'Rajasthan', capital: 'Jaipur', language: 'Hindi' },
    { state: 'Sikkim', capital: 'Gangtok', language: 'Nepali' },
    { state: 'Tamil Nadu', capital: 'Chennai', language: 'Tamil' },
    { state: 'Telangana', capital: 'Hyderabad', language: 'Telugu' },
    { state: 'Tripura', capital: 'Agartala', language: 'Bengali' },
    { state: 'Uttar Pradesh', capital: 'Lucknow', language: 'Hindi' },
    { state: 'Uttarakhand', capital: 'Dehradun', language: 'Hindi' },
    { state: 'West Bengal', capital: 'Kolkata', language: 'Bengali' },
     ];
}

