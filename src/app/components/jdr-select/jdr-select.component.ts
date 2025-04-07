import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {JdrDqdService} from '../../services/jdr-dqd.service';

@Component({
  selector: 'app-jdr-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [JdrDqdService],
  templateUrl: './jdr-select.component.html',
  styleUrls: ['./jdr-select.component.css']
})
export class JdrSelectComponent implements OnInit {
  races: any[] = [];
  classes: any[] = [];

  raceSelectionnee?: any;
  classeSelectionnee?: any;

  constructor(private jdrService: JdrDqdService) {}

  ngOnInit(): void {
    this.jdrService.getRaces().subscribe((data: any) => {
      this.races = data;
    });

    this.jdrService.getClasses().subscribe((data: any) => {
      this.classes = data;
    });
  }

}
