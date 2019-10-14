import { Component, ViewChild } from '@angular/core';
import { WheelSelectorComponent } from '@hyperblob/ngx-wheel-selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('wheelSelector', {static: false}) wheelSelector: WheelSelectorComponent;

 data: Array<any> = [
    {
      currentIndex: 0,
      weight: 10,
      list: [
        'Plan A', 'Plan B', 'Plan C', 'Plan D'
      ],
      onClick: this.clickOnPlan.bind(this),
      textAlign: 'center',
      className: 'row-group'
    }
  ];

  constructor() {
    /*noop*/
  }

  dataChange({ gIndex, iIndex }) {
    console.log('list', gIndex, iIndex);
  }

  clickOnPlan(gIndex, iIndex) {
    console.log(gIndex, iIndex);
    alert('Clicked plan: ' + this.data[gIndex].list[iIndex]);
  }

  confirm() {
    const ciList = this.wheelSelector.getCurrentIndexList();
    const planDetail = this.data[0].list[ciList[0]];

    alert(
      'Confirmed index list: ' + ciList + '.\n' +
      'Confirmed plan: ' + planDetail + '.\n'
    );
}
}
