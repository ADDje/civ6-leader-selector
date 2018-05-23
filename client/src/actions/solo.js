export const SOLO_CIVS_UPDATE = 'SOLO_CIVS_UPDATE';

export function soloCivsUpdate(civ, bool) {
  return {
    type: SOLO_CIVS_UPDATE,
    payload: {
      civ: civ,
      value: bool
    }
  };
}
