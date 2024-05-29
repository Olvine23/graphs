import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataService } from '../services/services/data.service';

@Component({
  selector: 'app-countrygraph',
  templateUrl: './countrygraph.component.html',
  standalone:true,
  styleUrls: ['./countrygraph.component.scss'],
})
export class CountrygraphComponent  implements OnInit {
  constructor(private dataService: DataService) {
    Chart.register(...registerables);  // Register Chart.js components
   }

  ngOnInit() {
    this.dataService.getPaymentsGraphList().subscribe(data => {

      console.log(data.data[1].labels)
      this.createChart(data.data[1]);
    });
  }

  createChart(data: any) {
    console.log(data)
    console.log(data.labels)
    const ctx = document.getElementById('country-paymentChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.labels,
        datasets: [{
          label: data.title,
          data: data.data,
          backgroundColor:  [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
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
