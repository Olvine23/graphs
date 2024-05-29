import { IonContent } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
 
import { Chart, registerables } from 'chart.js';
import { CountrygraphComponent } from 'src/app/countrygraph/countrygraph.component';
import { DataService } from 'src/app/services/services/data.service';

@Component({
  standalone:true,
  selector: 'app-payment-graph',
  templateUrl: './payment-graph.component.html',
  styleUrls: ['./payment-graph.component.scss'],
  imports:[
    CountrygraphComponent,IonContent
  ]
})
export class PaymentGraphComponent  implements OnInit {

  constructor(private dataService: DataService) {
    Chart.register(...registerables);  // Register Chart.js components
   }

  ngOnInit() {
    this.dataService.getPaymentsGraphList().subscribe(data => {

      console.log(data.data[0].labels)
      this.createChart(data.data[0]);
    });
  }

  createChart(data: any) {
    console.log(data)
    console.log(data.labels)
    const ctx = document.getElementById('paymentChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: data.title,
          data: data.data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x:{
            beginAtZero: true
          }
        }
      }
    });
  }

  

}
