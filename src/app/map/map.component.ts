import { Component, Input, OnInit } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Country } from '../country';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() latitude: number;
  @Input() longitude: number;
  zoom = 5;
}
