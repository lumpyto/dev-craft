import { test as base, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export const test = base.extend({
  user: async ({}, use) => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password({ length: 12 }) + '6'
    };
    await use(user);
  }
});
export { expect };