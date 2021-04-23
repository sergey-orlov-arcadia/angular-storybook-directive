Sample project to demonstrate issues with Angular Material + HostBinding('class') + Storybook.

Run `yarn start` to start the Angular app on http://localhost:4200

Run `yarn storybook` to start the storybook on http://localhost:6006/

Storybook has 2 stories, both use the custom `ColorDirective`, but one of the stories don't have it included in module. This is done to see the difference in how buttons are rendered with and without the directive.