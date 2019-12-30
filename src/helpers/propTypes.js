import * as PropTypes from 'prop-types';

export const propBool = () => PropTypes.bool;
export const propChildren = () => PropTypes.element.isRequired;
export const propNumber = () => PropTypes.number;
export const propShape = (value) => PropTypes.shape(value);
export const propString = () => PropTypes.string;
