import * as PropTypes from 'prop-types';

export const propArray = () => PropTypes.array;
export const propBool = () => PropTypes.bool;
export const propElement = () => PropTypes.element;
export const propFunc = () => PropTypes.func;
export const propNumber = () => PropTypes.number;
export const propShape = (value) => PropTypes.shape(value);
export const propString = () => PropTypes.string;
export const propOneOfType = (value) => PropTypes.oneOfType(value);
