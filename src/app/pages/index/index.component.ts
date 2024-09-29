import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {


  newsletter = [
    {sr:'1', url:'https://v17.angular.io/', heading:'The Health Initiative of the govt. of India, Aadhar Housing Finance Limited, and Y4D Foundation', date:'22-08-2022'},
    {sr:'2', url:'https://www.facebook.com/', heading:'Y4D Celebrated its 5th foundation day with a summary of the last 5yr working Y4D Chalked', date:'26-08-2023'},
    {sr:'3', url:'https://www.youtube.com/', heading:'The Health Initiative of the govt. of India, Aadhar Housing Finance Limited, and Y4D Foundation', date:'24-08-2022'},
    {sr:'5', url:'https://www.google.com/', heading:'Y4D Celebrated its 5th foundation day with a summary of the last 5yr working Y4D Chalked', date:'26-08-2022'},
    {sr:'4', url:'https://www.linkedin.com/', heading:'The Health Initiative of the govt. of India, Aadhar Housing Finance Limited, and Y4D Foundation', date:'24-08-2022'},
  ]


}
