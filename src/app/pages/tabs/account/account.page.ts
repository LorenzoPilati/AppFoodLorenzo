import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  orders: any[] = [];
  isLoading : boolean = true;
  model: any = {
    icon: "restaurant-outline",
    title: "Nenhum Pedido Feito"
  }

  constructor() {}

  ngOnInit() {
    if(Math.random() < 0.5){
      this.orders = [
        {
          restaurant: "Dom Henrique",
          address: "Gurapuava, Paraná",
          totalPrice: 60,
          items: [
            {name: "Pizza", quantity: 2},
            {name: "Burguer", quantity: 2}
          ],
          date: "Fevereiro 15, 2024"
        },
      ]
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

}
