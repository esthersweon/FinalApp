module Api
  class TasksController < ApiController
    def index
      @tasks = Phase.find(params[:phase_id]).tasks
      render "api/tasks/index"
    end

    def show
      @task = Task.find(params[:id])
      render "api/tasks/show"
    end

    def create
      @task = Task.new(task_params)
      if @task.save
        render "api/tasks/show"
      else
        render json: {errors: @task.errors.full_messages}, status: 422
      end
    end

    def update
      @task = Task.find(params[:id])

      if @task.update_attributes(task_params)
        render "api/tasks/show"
      else
        render json: {errors: @task.errors.full_messages}, status: 422
      end
    end

    def destroy
      @task = Task.find(params[:id])
      @task.try(:destroy)
      render "api/tasks/show"
    end

    private
    def task_params
      params.require(:task).permit(:title, :phase_id, :member_id, :status)
    end
  end
end
