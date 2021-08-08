interface IColorUtils {
  transparency: Record<number, string>;
}

const transparency: Record<number, string> = {
  0.1: '1A',
  0.2: '33',
  0.25: '40',
  0.3: '4D',
  0.4: '66',
  0.5: '80',
  0.6: '99',
  0.7: 'B3',
  0.75: 'BF',
  0.8: 'CC',
  0.9: 'E6'
};

const ColorUtils: IColorUtils = {
  transparency
};

export default ColorUtils;
