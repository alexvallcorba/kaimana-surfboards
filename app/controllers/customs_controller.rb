class CustomsController < ApplicationController
  before_action :set_custom, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /customs
  def index
    @customs = Custom.all

    render json: @customs
  end

  # GET /customs/1
  def show
   
    render json: @custom
  end

  # POST /customs
  def create
    @custom = Custom.new(custom_params)
    @custom.user = @current_user
    if @custom.save
      render json: @custom, status: :created
    else
      render json: @custom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /customs/1
  def update
    if @custom.update(custom_params)
      render json: @custom
    else
      render json: @custom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /customs/1
  def destroy
    @custom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_custom
      @custom = Custom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def custom_params
      params.require(:custom).permit(:name, :rocker, :height, :volume, :tail_width)
    end
end
