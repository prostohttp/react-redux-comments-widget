const vNotEmpty = target => () => target.trim();

const vlength = (target, min, max) => () =>
  target.length >= min && target.length <= max;

export { vNotEmpty, vlength };
