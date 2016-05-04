class CreateMentions < ActiveRecord::Migration
  def change
    create_table :mentions do |t|
      t.references :user, index: true, foreign_key: true, null: false
      t.string :mention_type, null: false
      t.text :comment

      t.timestamps null: false
    end
  end
end
