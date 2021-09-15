import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Parent } from 'projects/storybook-example-lib/parent/src/parent.class';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChildComponent extends Parent {
  @Input()
  childInput?: string;
}
