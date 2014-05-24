# == Schema Information
#
# Table name: members
#
#  id         :integer          not null, primary key
#  fname      :string(255)      not null
#  lname      :string(255)      not null
#  user_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#  bio        :text
#  role       :string(255)      default("Team Member")
#

class Member < ActiveRecord::Base
	before_save :default_values
	validates :fname, :lname, :user_id, :role, presence: true

	belongs_to :user, inverse_of: :members
	has_many :tasks, inverse_of: :member

	def default_values
		self.role ||= "Team Member"
	end
end
