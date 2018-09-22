import { composeComplex_T } from './compose';
import { transform_T } from './transform';
import { flatResReducer } from './map';
import { character, characterCollection } from './types';
import computeOpts from './options';

const c = composeComplex_T({
  complexJung: false,
  complexJong: false,
} |> computeOpts);
const composeComplexCho_g_T = data => flatResReducer(c, data);
export const transformLeavingCho_T = (char) => {
  const res = transform_T(char);
  const cc = characterCollection(res);
  if (cc[0] & 2) {
    return composeComplexCho_g_T(cc[1]);
  }
  return cc[1];
};
export const chooseTransformer = opts => (
  opts.decomposeComplexDouble
    ? transform_T
    : transformLeavingCho_T
);
export default ((datum, opts = {}) => datum
  |> character
  |> chooseTransformer(opts)
);
// no need to computeOpts since the only
// thing that it's going into is chooseTransformer
