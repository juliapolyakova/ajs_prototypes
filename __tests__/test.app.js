import Character from '../src/app';

test('Результат атаки', () => {
  const player = new Character('Fro', 'Bowman');
  player.damage(10);
  const expected = {
    name: 'Fro',
    type: 'Bowman',
    health: 94,
    attack: 10,
    defence: 40,
  };
  const received = player;
  expect(received).toEqual(expected);
});
