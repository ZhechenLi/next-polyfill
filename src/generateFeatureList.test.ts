import getFeatureMap from './generateFeatureList';
test('Simple feature: array.prototype.copyWithin', () => {
  expect(1 + 1).toEqual(2);
});

test('type prototype feature', () => {
  expect(getFeatureMap().get('es6.array.copy-within')).toEqual(
    'Array.prototype.copyWithin'
  );
});

test('specific feature iso-string  feature', () => {
  expect(getFeatureMap().get('es6.date.to-iso-string')).toEqual(
    'Date.prototype.toISOString'
  );
});

test('constructor feature', () => {
  expect(getFeatureMap().get('es6.map')).toEqual('Map');
});

test('iterator feature', () => {
  expect(getFeatureMap().get('es6.array.iterator')).toEqual(
    'Array.prototype.@@iterator'
  );
});
