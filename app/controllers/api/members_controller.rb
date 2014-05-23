module Api
class MembersController < ApiController
    def index
      @members = Member.where(:user_id => current_user.id)
      render "api/members/index"
    end

    def show
      @member = Member.find(params[:id])
      render "api/members/show"
    end

    def create
      @member = Member.new(member_params)
      @member.user_id = current_user.id
      if @member.save
        render "api/members/show"
      else
        render json: @member.errors.full_messages
      end
    end

    def update
      @member = current_user.members.find(params[:id])

      if @member.update_attributes(member_params)
        render "api/members/show"
      else
        render json: { errors: @member.errors.full_messages }, status: 422
      end
    end

    def destroy
      @member = Member.find(params[:id])
      @member.destroy
      render "api/members/show"
    end

    private
    def member_params
      params.require(:member).permit(:fname, :lname, :role, :bio)
    end
  
end

end
