import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the Arabic lesson and rewards a correct answer', async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByText('أصوات الحروف')).toBeDefined();
  await user.click(screen.getByRole('button', { name: /بطة/ }));
  expect(screen.getByRole('status').textContent).toContain('إجابة رائعة');

  await user.click(screen.getByRole('button', { name: /التاء/ }));
  expect(screen.getByText('أي كلمة تبدأ بحرف التاء؟')).toBeDefined();
  expect(screen.queryByRole('status')).toBeNull();
});

test('provides every Arabic letter in the writing lesson', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: /الكتابة والتشكيل/ }));

  expect(screen.getByRole('heading', { name: 'نكتب ونشكّل' })).toBeDefined();
  expect(screen.getAllByRole('button', { name: /اكتبي حرف/ })).toHaveLength(28);
  await user.click(screen.getByRole('button', { name: 'اكتبي حرف الجيم' }));
  expect(screen.getByLabelText('لوحة كتابة حرف الجيم')).toBeDefined();
  await user.click(screen.getByRole('button', { name: 'تحقق من كتابتي ✓' }));
  expect(screen.getByRole('status').textContent).toContain('ابدئي برسم الحرف');
});

test('browses stories and shows story comprehension feedback', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: /كلمات وقصص/ }));

  expect(screen.getByRole('heading', { name: 'كلمات وقصص' })).toBeDefined();
  await user.click(screen.getByRole('button', { name: 'القصة التالية' }));
  expect(screen.getByRole('heading', { name: 'شمس الصباح' })).toBeDefined();
  await user.click(screen.getByRole('button', { name: 'زهرة' }));
  expect(screen.getByRole('status').textContent).toContain('فهمتِ القصة');
});
