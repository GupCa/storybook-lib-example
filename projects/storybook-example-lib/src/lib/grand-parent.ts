import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive()
export abstract class GrandParent implements OnInit {
  private _grandParentInput!: string;
  @Input()
  get grandParentInput(): string {
    return this._grandParentInput;
  }
  set grandParentInput(grandParentInput: string) {
    this._grandParentInput = grandParentInput;
    this.grandParentOutput.emit(grandParentInput);
  }
  @Output() grandParentOutput = new EventEmitter();

  ngOnInit(): void {
    console.log(this.grandParentInput);
    this.grandParentOutput.emit('emitting value on init');
  }
}
