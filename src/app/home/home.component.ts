import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myDateValue: Date;

  dateContents: any[] = Array();
  inputContents: any[] = Array();

  constructor() { }

  ngOnInit() {
    this.dateContents.push({
      start: {
        value: new Date()
      }, 
      end: {
        value: new Date()
      }
    });

    this.inputContents.push({
      input: {
        value: 'ddd'
      }
    })
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  onAddDateRow() {
    let endDate = this.dateContents.slice(-1)[0].end.value;

    if (endDate !== "" && endDate !== undefined) {
      this.dateContents.push({
        start: {
          value: endDate
        }, 
        end: {
          value: ""
        }
      });      
    } else {
      alert("Please select end date!")
    }
  }

  onAddInputRow() {
    this.inputContents.push({
      input: {
        value: 'input data'
      }
    })
  }

  onSubmit(form) {
    console.log(form)
  }

  getStartDate(index) {
    if (index == 0) return;

    return this.dateContents[index - 1].end.value;
  }
}
