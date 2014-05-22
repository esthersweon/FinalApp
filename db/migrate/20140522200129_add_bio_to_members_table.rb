class AddBioToMembersTable < ActiveRecord::Migration
  def change
  	add_column :members, :bio, :text
  end
end
