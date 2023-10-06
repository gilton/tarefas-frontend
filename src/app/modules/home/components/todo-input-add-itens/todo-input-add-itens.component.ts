import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})

export class TodoInputAddItensComponent implements OnInit {
  
  @Output() emitTarefa = new EventEmitter();
  public novaTarefa: string = "";

  constructor() { }

  ngOnInit(): void { }

  public addTarefa() {
    this.novaTarefa = this.novaTarefa.trim();
    if( this.novaTarefa ) {
      this.emitTarefa.emit(this.novaTarefa);
      this.novaTarefa = "";
    }
  }

}
