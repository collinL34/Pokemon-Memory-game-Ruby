class PokemonController < ApplicationController
  
  def index
    @pokemons = Pokemon.all.shuffle()
    @pokemon = @pokemons[(0..9)]
    @pokemon_clone = @pokemon.shuffle
  end

end
