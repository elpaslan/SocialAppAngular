import { Component, Input, OnInit } from '@angular/core';
import { image } from 'src/app/_models/image';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
})
export class PhotoGalleryComponent implements OnInit {
  @Input() images: image[];
  constructor() {}

  ngOnInit(): void {}
}
