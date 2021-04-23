import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ColorDirective } from '../color.directive';
import { AppComponent } from '../app.component';

export default {
  title: 'MyApp/WithDirective',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ColorDirective
      ],
      imports: [
        CommonModule,
        MatButtonModule
      ],
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
  template: '<app-root></app-root>'
});

export const Default = Template.bind({});
