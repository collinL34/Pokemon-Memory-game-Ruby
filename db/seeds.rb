require 'PokemonGenerator'

900.times do
  pok_obj = PokemonGenerator.pokemon()
  Pokemon.find_or_create_by(name: pok_obj[:name], image_url: pok_obj[:image])
end