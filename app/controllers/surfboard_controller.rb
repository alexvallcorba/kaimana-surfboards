class SurfboardController < ApplicationController
  def index
    @surfboards = Surfboard.all

    render json: @surfboards
  end
end
