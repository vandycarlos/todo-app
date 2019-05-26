import { Aurelia } from 'aurelia-framework';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  await aurelia.start();
  await aurelia.setRoot('./app', document.body);
}
