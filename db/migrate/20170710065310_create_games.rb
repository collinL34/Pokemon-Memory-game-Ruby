class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :player_one_score
      t.integer :player_two_score

      t.timestamps
    end
  end
end
