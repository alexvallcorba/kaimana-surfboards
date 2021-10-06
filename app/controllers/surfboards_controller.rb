class SurfboardsController < ApplicationController
  def index
    @surfboards = Surfboard.all

    render json: @surfboards
  end

  def show
    @surfboard = Surfboard.find(params[:id])
    render json: @surfboard
  end
end

