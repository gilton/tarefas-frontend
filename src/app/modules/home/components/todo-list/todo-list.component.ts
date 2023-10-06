import { Component, DoCheck } from '@angular/core';

import { TarefaList } from '../../model/tarefa-list';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck {

	public tarefaList: Array<TarefaList> = JSON.parse(localStorage.getItem("list") || "[]");

	constructor() { }

	ngDoCheck(): void {
		this.setLocalStorage();
	}

	public insertTarefa(event: string) {
		this.tarefaList.push({ tarefa: event, checked: false });
	}

	public deleteTarefa(event: number): void {
		this.tarefaList.splice(event, 1);
	}

	public deleteALLTarefa(): void {
		const confirm = window.confirm("Deseja realmente excuir todas as tareas?");
		if (confirm) { this.tarefaList = []; }
	}

	public validaEntrada(event: string, index: number) {
		if (!event.length) {
			const confirm = window.confirm("Tarefa vazia, deseja excluir?");
			if (confirm) {
				this.deleteTarefa(index);
			}
		}
	}

	private setLocalStorage() {
		if (this.tarefaList) {
			this.tarefaList.sort((first, last) => Number(first.checked) - Number(last.checked));
			localStorage.setItem("list", JSON.stringify(this.tarefaList));
		}
	}

}
