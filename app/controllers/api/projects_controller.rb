module Api
  class ProjectsController < ApiController
  before_filter :require_signed_in
  
    def index
      @projects = Project.where(:user_id => current_user.id)
      render "api/projects/index"
    end

    def show
      @project = Project.find(params[:id])
      @phases = @project.phases
      render "api/projects/show"
    end

    def create
      @project = Project.new(project_params)
      @project.user_id = current_user.id
      if @project.save
        render "api/projects/show"
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end

    def update
      @project = current_user.projects.find(params[:id])

      if @project.update_attributes(project_params)
        render "api/projects/show"
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @project = Project.find(params[:id])
      if @project.destroy
        render "api/projects/show"
      else
        raise "Could not destroy"
      end
    end

    private
    def project_params
      params.require(:project).permit(:title, :end_date, :description)
    end
  end
end
