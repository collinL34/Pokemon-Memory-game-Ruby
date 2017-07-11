class GamesController < ApplicationController

  def show
    @game = Game.find(params[:id])
    @pokemons = Pokemon.all.shuffle()
    @pokemon = @pokemons[(0..8)]
    @pokemon_clone = @pokemon.shuffle
  end

  def new
    @game = Game.new()
  end

  def create 
    @game = Game.new(player_one_score: 0, player_two_score: 0)

    if @game.save
      redirect_to game_path(@game)
    else
      redirect_to :new
    end
  end


end
