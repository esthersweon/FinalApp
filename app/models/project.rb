# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  description :text             not null
#  created_at  :datetime
#  updated_at  :datetime
#  user_id     :integer
#  end_date    :date
#

class Project < ActiveRecord::Base
	validates :title, :description, :end_date, :user_id, presence: true

	belongs_to :user, inverse_of: :projects

	has_many :phases, inverse_of: :project, dependent: :destroy
end
