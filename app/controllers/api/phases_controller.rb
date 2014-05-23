module Api
  class PhasesController < ApiController
    def index
      @phases = Project.find(params[:project_id]).phases
      render "api/phases/index"
    end

    def show
      @phase = Phase.find(params[:id])
      @tasks = @phase.tasks
      render "api/phases/show"
    end

    def create
      @phase = Phase.new(phase_params)
      if @phase.save
        render "api/phases/show"
      else
        render json: { errors: @phase.errors.full_messages }, status: 422
      end
    end

    def update
      @phase = Phase.find(params[:id])

      if @phase.update_attributes(phase_params)
        render "api/phases/show"
      else
        render json: { errors: @phase.errors.full_messages }, status: 422
      end
    end

    def destroy
      Phase.find(params[:id]).try(:destroy)
      render "api/phases/show"
    end

    private
    def phase_params
      params.require(:phase).permit(:title, :description, :end_date, :project_id)
    end
  end
end
