class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :course, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :projects, :title
  end
end
