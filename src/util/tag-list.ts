const tagList = {
  fast: {
    icon: 'ion:flash-outline',
    text: 'Fast',
    color: 'red',
  },
  simple: {
    icon: 'ion:sunny-outline',
    text: 'Simple',
    color: 'green',
  },
};

export type TagKey = keyof typeof tagList;

export default tagList;
