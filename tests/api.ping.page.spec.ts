import { test, expect } from '@playwright/test';

test.describe('API Health Check', () => {

  test('Landing page returns status 200', async ({ request }) => {
    const response = await request.get('http://localhost:5173/');
    expect(response.status()).toBe(200);
  });

});