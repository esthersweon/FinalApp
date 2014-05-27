# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  phase_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#  member_id  :integer
#  status     :text             default("Incomplete"), not null
#

class Task < ActiveRecord::Base
	validates :title, :phase_id, :member_id, presence: true

	belongs_to :phase, inverse_of: :tasks
	belongs_to :member, inverse_of: :tasks
	has_one :project, through: :phase
end
