class CreateMessages < ActiveRecord::Migration[8.1]
  def change
    create_table :messages do |t|
      t.timestamps
      t.text :body
      t.integer :user_id
    end
  end
end
