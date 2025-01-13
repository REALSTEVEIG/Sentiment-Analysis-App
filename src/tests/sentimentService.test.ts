import { analyzeSentiment } from '../services/sentimentService';

test('analyzeSentiment correctly scores positive text', async () => {
  const score = await analyzeSentiment('This is amazing!');
  expect(score).toBe(1);
});

test('analyzeSentiment correctly scores negative text', async () => {
  const score = await analyzeSentiment('This is awful.');
  expect(score).toBe(0);
});
