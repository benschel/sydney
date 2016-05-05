class AddMentionsCountToUsers < ActiveRecord::Migration
  def change
    add_column :users, :mentions_count, :integer, index: true
  end
end
