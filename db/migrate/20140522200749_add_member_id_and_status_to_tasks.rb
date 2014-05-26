class AddMemberIdAndStatusToTasks < ActiveRecord::Migration
  def change
  	add_column :tasks, :member_id, :integer, null: false
  	add_column :tasks, :status, :text, null: false, default: "Incomplete"
  end
end
