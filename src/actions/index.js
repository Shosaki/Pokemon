import {
  SELECT_POKEMON,
  SET_TEAM,
  SET_OPPONENT_TEAM,
  SET_MOVE,
  SET_POKEMON,
  SET_OPPONENT_POKEMON,
  SET_OPPONENT_POKEMON_HEALTH,
  REMOVE_POKEMON_FROM_OPPONENT_TEAM
} from "./types";

export const selectPokemon = (id, pokemon_data, is_selected) => {
  return {
    type: SELECT_POKEMON,
    id,
    pokemon_data,
    is_selected
  };
};

export const setTeam = team => {
  return {
    type: SET_TEAM,
    team
  };
};

export const setOpponentTeam = team => {
  return {
    type: SET_OPPONENT_TEAM,
    team
  };
};

export const setMove = move => {
  return {
    type: SET_MOVE,
    move
  };
};

export const setPokemon = pokemon => {
  return {
    type: SET_POKEMON,
    pokemon
  };
};

export const setOpponentPokemon = pokemon => {
  return {
    type: SET_OPPONENT_POKEMON,
    pokemon
  };
};

export const setOpponentPokemonHealth = (team_member_id, health) => {
  return {
    type: SET_OPPONENT_POKEMON_HEALTH,
    team_member_id,
    health
  };
};

export const removePokemonFromOpponentTeam = team_member_id => {
  return {
    type: REMOVE_POKEMON_FROM_OPPONENT_TEAM,
    team_member_id
  };
};
