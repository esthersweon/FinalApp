module Api
  class TasksController < ApiController
    def index
      @tasks = Phase.find(params[:phase_id]).tasks
      render json: @tasks
    end

    def show
      @task = Task.find(params[:id])
      render json: @task
    end

    def create
      @task = Task.new(task_params)
      if @task.save
        render json: @task
      else
        render json: {errors: @task.errors.full_messages}, status: 422
      end
    end

    # def update
    #   @task = Task.find(params[:id])

    #   if @card.update_attributes(card_params)
    #     render partial: "api/cards/card", locals: { card: @card }
    #   else
    #     render json: {errors: @task.errors.full_messages}, status: 422
    #   end
    # end

    def destroy
      Task.find(params[:id]).try(:destroy)
      render json: {}
    end

    private
    def task_params
      params.require(:task).permit(:title, :phase_id, :status)
    end
  end
end
